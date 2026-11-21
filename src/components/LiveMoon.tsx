import { forwardRef, useImperativeHandle, useRef } from 'react';

/**
 * A moon drawn live for any point in the cycle (0 = new, 0.5 = full), so the
 * shadow edge can glide smoothly instead of hopping between the 8 phase images.
 * Colours, gradient and glow are copied from the Figma "Moon phase" component.
 *
 * Drive it imperatively with `ref.current.set(fraction)` from a rAF loop —
 * no React re-render per frame.
 */
export interface LiveMoonHandle { set: (fraction: number) => void }

const R = 55;          // Figma disc radius
const PAD = 34;        // room for the glow (Figma filter stdDeviation 17 × 2)
const SIZE = (R + PAD) * 2;
const C = R + PAD;     // centre

/** Path of the lit part for a cycle fraction (northern hemisphere: waxing lit on the right). */
export function litPath(f: number): string {
  const p = ((f % 1) + 1) % 1;
  const waxing = p <= 0.5;
  // terminator's horizontal radius: R at new/full, 0 at the quarters
  const rx = Math.abs(Math.cos(p * 2 * Math.PI)) * R;
  const top = `${C} ${C - R}`, bottom = `${C} ${C + R}`;
  // outer limb on the lit side
  const limbSweep = waxing ? 1 : 0;
  // terminator bulges toward the lit side before the quarter (crescent), away after it (gibbous)
  const crescent = waxing ? p < 0.25 : p > 0.75;
  const termSweep = waxing ? (crescent ? 0 : 1) : (crescent ? 1 : 0);
  return `M ${top} A ${R} ${R} 0 0 ${limbSweep} ${bottom} A ${rx.toFixed(3)} ${R} 0 0 ${termSweep} ${top} Z`;
}

/** How much of the disc is lit, 0–1 — used to fade the glow in and out. */
const illumination = (f: number) => (1 - Math.cos(f * 2 * Math.PI)) / 2;

export const LiveMoon = forwardRef<LiveMoonHandle, { initial: number; className?: string }>(
  function LiveMoon({ initial, className = '' }, ref) {
    const lit = useRef<SVGPathElement>(null);
    const glow = useRef<SVGPathElement>(null);

    useImperativeHandle(ref, () => ({
      set(f: number) {
        const d = litPath(f);
        const a = illumination(f);
        lit.current?.setAttribute('d', d);
        // a sliver of lit edge still reads as lit; keep a hair of opacity near new moon
        lit.current?.setAttribute('opacity', String(Math.min(1, a * 40)));
        glow.current?.setAttribute('d', d);
        glow.current?.setAttribute('opacity', String(0.45 * Math.sqrt(a)));
      },
    }), []);

    const d0 = litPath(initial);
    const a0 = illumination(initial);

    return (
      <svg
        className={`live-moon ${className}`}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lm-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${C} ${C}) scale(${R})`}>
            <stop stopColor="#F5DE9E" />
            <stop offset="1" stopColor="#C7912B" />
          </radialGradient>
          <filter id="lm-glow" x="0" y="0" width={SIZE} height={SIZE} filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="17" />
          </filter>
        </defs>
        {/* disc (Figma "Disk") */}
        <circle cx={C} cy={C} r={R} fill="#C9A352" fillOpacity="0.08" />
        <circle cx={C} cy={C} r={R - 0.4} stroke="#C9A352" strokeOpacity="0.28" strokeWidth="0.8" fill="none" />
        {/* glow (Figma drop shadow #C9A352 @ 45%, blur 17) */}
        <path ref={glow} d={d0} fill="#C9A352" filter="url(#lm-glow)" opacity={0.45 * Math.sqrt(a0)} />
        {/* lit part */}
        <path ref={lit} d={d0} fill="url(#lm-fill)" opacity={Math.min(1, a0 * 40)} />
      </svg>
    );
  },
);

/** Displayed box is the disc (110px); the glow spills outside it like the Figma component. */
export const LIVE_MOON_BOX = R * 2;
export const LIVE_MOON_PAD = PAD;
