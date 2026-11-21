import type { PhaseKey } from '../data/moon';

/**
 * Figma "Moon phase" component. Each phase SVG carries its own glow, so it
 * extends past the moon's box — the per-phase insets below come from the design.
 */
const INSET_LG: Record<PhaseKey, string> = {
  'new-moon': '0',
  'waxing-crescent': '-30.91% -30.91% -30.91% 0',
  'first-quarter': '-30.91% -30.91% -30.91% 0',
  'waxing-gibbous': '-30.91% -30.91% -30.91% -15.14%',
  'full-moon': '-30.91%',
  'waning-gibbous': '-30.91% -15.14% -30.91% -30.91%',
  'last-quarter': '-30.91% 0 -30.91% -30.91%',
  'waning-crescent': '-30.91% 0 -30.91% -30.91%',
};
const INSET_SM: Record<PhaseKey, string> = {
  'new-moon': '0',
  'waxing-crescent': '-33.33% -33.33% -33.33% 0',
  'first-quarter': '-33.33% -33.33% -33.33% 0',
  'waxing-gibbous': '-33.33% -33.33% -33.33% -17.56%',
  'full-moon': '-33.33%',
  'waning-gibbous': '-33.33% -17.56% -33.33% -33.33%',
  'last-quarter': '-33.33% 0 -33.33% -33.33%',
  'waning-crescent': '-33.33% 0 -33.33% -33.33%',
};

export function Moon({ phase, small = false, className = '' }: { phase: PhaseKey; small?: boolean; className?: string }) {
  const src = small && phase !== 'new-moon' ? `/figma/moon-sm/${phase}.svg` : `/figma/moon/${phase}.svg`;
  return (
    <div className={`moon ${small ? 'moon-sm' : 'moon-lg'} ${className}`} aria-hidden="true">
      <div className="moon-art" style={{ inset: (small ? INSET_SM : INSET_LG)[phase] }}>
        <img src={src} alt="" />
      </div>
    </div>
  );
}
