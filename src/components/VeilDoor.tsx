import { useId } from 'react';

/**
 * Figma "Veil door" (316:2311, page "Veil Leaning · Closing slide"): the closing slide's image.
 * Five states, drawn on the same 92×92 grid as the Figma component. Colours: gold strokes,
 * surface-coloured door/casement leaves, the moon's gold gradient for light, and the
 * "Shadow/Gold glow" effect (0 4 26 rgba(201,162,82,.28)) on the light.
 */
export type DoorState = 'door-open' | 'door-ajar' | 'door-closed' | 'window-open' | 'window-closed';

const GOLD = 'var(--gold)';
const SURFACE = 'var(--surface)';
const stroke = { stroke: GOLD, strokeWidth: 1.4, strokeLinejoin: 'round', strokeLinecap: 'round', fill: 'none' } as const;

// Door: opening x 30–62, arch centre (46,30) r16, threshold y78.
const DOOR_OPENING = 'M30 78 V30 A16 16 0 0 1 62 30 V78 Z';
const DOOR_FRAME = 'M30 78 V30 A16 16 0 0 1 62 30 V78';
const AJAR_Y = (30 - Math.sqrt(16 * 16 - 9 * 9)).toFixed(2); // where x=55 meets the arch
// Window: opening x 28–64, arch centre (46,40) r18, sill y62, ledge y68.
const PANE = 'M28 62 V40 A18 18 0 0 1 64 40 V62 Z';

export function VeilDoor({ state, className = '' }: { state: DoorState; className?: string }) {
  const id = useId().replace(/:/g, '');
  const light = `url(#${id}-light)`;
  const glow = `url(#${id}-glow)`;
  const isDoor = state.startsWith('door');

  return (
    <svg className={`veil-door ${className}`} viewBox="0 0 92 92" width="92" height="92" aria-hidden="true" overflow="visible">
      <defs>
        <radialGradient id={`${id}-light`} cx="46" cy={isDoor ? 46 : 42} r="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5DE9E" />
          <stop offset="1" stopColor="#C7912B" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="13" floodColor="rgb(201,162,82)" floodOpacity="0.28" />
        </filter>
      </defs>

      {state === 'door-open' && (
        <>
          <path d="M30 78 H62 L68 86 H24 Z" fill={light} opacity="0.3" />
          <path d={DOOR_OPENING} fill={light} filter={glow} />
          <path d="M30 78 V30 C30 24 26 20 21 19 V78 Z" fill={SURFACE} />
          <path d="M30 30 C30 24 26 20 21 19 V78" {...stroke} />
          <circle cx="24" cy="52" r="1.5" fill={GOLD} />
        </>
      )}
      {state === 'door-ajar' && (
        <>
          <path d="M55 78 H62 L65 84 H56 Z" fill={light} opacity="0.3" />
          <path d={`M55 78 V${AJAR_Y} A16 16 0 0 1 62 30 V78 Z`} fill={light} filter={glow} />
          <path d={`M30 78 V30 A16 16 0 0 1 55 ${AJAR_Y} V78 Z`} fill={SURFACE} />
          <path d={`M55 ${AJAR_Y} V78`} {...stroke} />
          <circle cx="51" cy="52" r="1.5" fill={GOLD} />
        </>
      )}
      {state === 'door-closed' && (
        <>
          <path d={DOOR_OPENING} fill={GOLD} fillOpacity="0.1" />
          <path d="M35 72 V34 A10 10 0 0 1 55 34 V72 Z" {...stroke} strokeOpacity="0.45" />
          <circle cx="58.5" cy="52" r="1.5" fill={GOLD} />
        </>
      )}
      {isDoor && (
        <>
          <path d={DOOR_FRAME} {...stroke} />
          <path d="M20 78 H72" {...stroke} />
        </>
      )}

      {state === 'window-open' && (
        <>
          <path d={PANE} fill={light} filter={glow} />
          <path d="M28 62 V40 C28 33 25 28 19 26 V64 Z" {...stroke} fill={SURFACE} />
          <path d="M64 62 V40 C64 33 67 28 73 26 V64 Z" {...stroke} fill={SURFACE} />
        </>
      )}
      {state === 'window-closed' && (
        <>
          <path d={PANE} fill={GOLD} fillOpacity="0.1" />
          <path d="M46 22.8 V62 M28 44 H64" stroke={GOLD} strokeWidth="1.2" fill="none" />
        </>
      )}
      {!isDoor && (
        <>
          <path d={PANE} {...stroke} />
          <path d="M22 68 H70" {...stroke} />
        </>
      )}
    </svg>
  );
}
