/** Moon phases (Figma components "Moon phase" 24:510 and "Moon note" 55:902). */
export type PhaseKey =
  | 'new-moon' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous'
  | 'full-moon' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';

export interface Phase { key: PhaseKey; label: string; note: string }

export const PHASES: Phase[] = [
  { key: 'new-moon', label: 'New moon', note: 'Begin before it has a name. The rest will follow.' },
  { key: 'waxing-crescent', label: 'Waxing crescent', note: 'Start small and keep faith with it. It’s already growing.' },
  { key: 'first-quarter', label: 'First quarter', note: 'You’re halfway to deciding. Choose one thing and act on it.' },
  { key: 'waxing-gibbous', label: 'Waxing gibbous', note: 'Keep tending. You’re closer than it feels.' },
  { key: 'full-moon', label: 'Full moon', note: 'Everything is in view now. Trust what you see.' },
  { key: 'waning-gibbous', label: 'Waning gibbous', note: 'Give a little of this away. It grows when it’s shared.' },
  { key: 'last-quarter', label: 'Last quarter', note: 'Decide what’s worth carrying forward, and set the rest down.' },
  { key: 'waning-crescent', label: 'Waning crescent', note: 'Rest now. Make room for what comes next.' },
];

/** Fraction of the lunar cycle, 0 = new moon (same reference as the live site). */
export function moonFraction(now = Date.now()): number {
  const base = Date.parse('2000-01-06T18:14:00Z');
  const cycle = 29.53058867 * 24 * 3600 * 1000;
  return ((((now - base) % cycle) + cycle) % cycle) / cycle;
}

/** The eight buckets used by getMoonPhase() in reading.js. */
export function phaseIndex(now = Date.now()): number {
  return Math.round(moonFraction(now) * 8) % 8;
}

export function currentPhase(now = Date.now()): Phase {
  return PHASES[phaseIndex(now)];
}
