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

/* ── True phase times (Meeus, Astronomical Algorithms ch. 49 — accurate to a few minutes) ── */

const SYNODIC = 29.53058868;
const rad = (d: number) => (d * Math.PI) / 180;
const sin = (d: number) => Math.sin(rad(d));
const cos = (d: number) => Math.cos(rad(d));
const jdToMs = (jd: number) => (jd - 2440587.5) * 864e5;

/** Moment (ms) of a principal phase: lunation k counted from 1900, q = 0 new, .25 first quarter, .5 full, .75 last quarter. */
function truePhase(k: number, q: number): number {
  k += q;
  const t = k / 1236.85, t2 = t * t, t3 = t2 * t;
  let jd = 2415020.75933 + SYNODIC * k + 0.0001178 * t2 - 0.000000155 * t3
    + 0.00033 * sin(166.56 + 132.87 * t - 0.009173 * t2);
  const m = 359.2242 + 29.10535608 * k - 0.0000333 * t2 - 0.00000347 * t3;   // sun's mean anomaly
  const mp = 306.0253 + 385.81691806 * k + 0.0107306 * t2 + 0.00001236 * t3; // moon's mean anomaly
  const f = 21.2964 + 390.67050646 * k - 0.0016528 * t2 - 0.00000239 * t3;   // moon's argument of latitude
  if (q === 0 || q === 0.5) {
    jd += (0.1734 - 0.000393 * t) * sin(m) + 0.0021 * sin(2 * m) - 0.4068 * sin(mp)
      + 0.0161 * sin(2 * mp) - 0.0004 * sin(3 * mp) + 0.0104 * sin(2 * f)
      - 0.0051 * sin(m + mp) - 0.0074 * sin(m - mp) + 0.0004 * sin(2 * f + m)
      - 0.0004 * sin(2 * f - m) - 0.0006 * sin(2 * f + mp) + 0.001 * sin(2 * f - mp)
      + 0.0005 * sin(m + 2 * mp);
  } else {
    jd += (0.1721 - 0.0004 * t) * sin(m) + 0.0021 * sin(2 * m) - 0.628 * sin(mp)
      + 0.0089 * sin(2 * mp) - 0.0004 * sin(3 * mp) + 0.0079 * sin(2 * f)
      - 0.0119 * sin(m + mp) - 0.0047 * sin(m - mp) + 0.0003 * sin(2 * f + m)
      - 0.0004 * sin(2 * f - m) - 0.0006 * sin(2 * f + mp) + 0.0021 * sin(2 * f - mp)
      + 0.0003 * sin(m + 2 * mp) + 0.0004 * sin(m - 2 * mp) - 0.0003 * sin(2 * m + mp);
    const adj = 0.0028 - 0.0004 * cos(m) + 0.0003 * cos(mp);
    jd += q === 0.25 ? adj : -adj;
  }
  return jdToMs(jd);
}

interface PhaseEvent { at: number; q: number } // q: 0 new, .25, .5, .75

/** The principal phases around `now`: the last one before it and the next one after it, plus the day's list. */
function eventsAround(now: number): PhaseEvent[] {
  const k0 = Math.floor(((now - Date.UTC(1900, 0, 1)) / 864e5) / SYNODIC) - 1;
  const out: PhaseEvent[] = [];
  for (let k = k0; k <= k0 + 3; k++) for (const q of [0, 0.25, 0.5, 0.75]) out.push({ at: truePhase(k, q), q });
  return out.sort((a, b) => a.at - b.at);
}

/** Fraction of the lunar cycle, 0 = new moon, 0.5 = full — interpolated between the true phase times. */
export function moonFraction(now = Date.now()): number {
  const ev = eventsAround(now);
  const i = ev.findIndex((e) => e.at > now);
  const prev = ev[i - 1], next = ev[i];
  return (prev.q + 0.25 * ((now - prev.at) / (next.at - prev.at))) % 1;
}

/**
 * Which of the 8 phases tonight is, the way moon calendars name it: new, first quarter,
 * full and last quarter only on the (local) day they happen; the in-between phases fill the rest.
 */
export function phaseIndex(now = Date.now()): number {
  const d = new Date(now);
  const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1).getTime();
  const ev = eventsAround(now);
  const today = ev.find((e) => e.at >= dayStart && e.at < dayEnd);
  if (today) return today.q * 8;                 // 0, 2, 4, 6
  const prev = ev.filter((e) => e.at <= now).pop()!;
  return prev.q * 8 + 1;                         // 1, 3, 5, 7
}

export function currentPhase(now = Date.now()): Phase {
  return PHASES[phaseIndex(now)];
}
