import type { DrawnCard } from './types';
import type { PhaseKey } from './moon';
import CLOSING from './moonClosing.json';
import { CONFIG } from '../config';

/**
 * The closing moon slide — Figma page "Moon Phases · Closing slide" (135:888).
 *
 * The ending is chosen by reading the shape of the spread, then letting
 * tonight's moon respond to it:
 *   1. tonight's phase (8)           — sets the tone
 *   2. the spread's pattern (10)     — each card is Odd, Even or Court; order doesn't matter
 *   3. how many cards are reversed (0–3) — out in the world vs. happening inside
 * 8 × 10 × 4 = 320 endings. Text = pattern line + reversal line (both in moonClosing.json).
 */

export type Group = 'O' | 'E' | 'C';
export type PatternCode = keyof typeof CLOSING.patterns;

export const TAGLINE: Record<PhaseKey, string> = {
  'new-moon': 'A blank page.',
  'waxing-crescent': 'Something small is starting.',
  'first-quarter': 'Time to decide.',
  'waxing-gibbous': 'Almost there.',
  'full-moon': "Everything's in view.",
  'waning-gibbous': 'Share what you learned.',
  'last-quarter': "Let go of what's heavy.",
  'waning-crescent': 'Rest before the reset.',
};

const ROMAN: Record<string, number> = { I: 1, V: 5, X: 10, L: 50 };
function fromRoman(s: string): number {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const v = ROMAN[s[i]], next = ROMAN[s[i + 1]] ?? 0;
    n += v < next ? -v : v;
  }
  return n;
}

const COURTS = new Set(['Page', 'Knight', 'Queen', 'King']);

/**
 * Tarot numerology: odd numbers carry momentum and change, even numbers balance
 * and stability, court cards point to people. Aces count as 1. The Fool is 0 —
 * even by the number — set CONFIG.foolGroup to 'O' to read it as momentum instead.
 */
export function cardGroup(card: { num: string; slug: string }): Group {
  if (COURTS.has(card.num)) return 'C';
  if (card.slug === 'the-fool') return CONFIG.foolGroup;
  const n = card.num === '0' ? 0 : fromRoman(card.num);
  return n % 2 === 1 ? 'O' : 'E';
}

/** Order-free pattern code: majority group first, then the odd one out (e.g. 2 Odd + 1 Court → "OOC"). */
export function spreadPattern(cards: { num: string; slug: string }[]): PatternCode {
  const n = { O: 0, E: 0, C: 0 };
  for (const c of cards) n[cardGroup(c)]++;
  if (n.O === 1 && n.E === 1 && n.C === 1) return 'OEC';
  const major = (['O', 'E', 'C'] as Group[]).find((g) => n[g] >= 2)!;
  if (n[major] === 3) return (major.repeat(3)) as PatternCode;
  const minor = (['O', 'E', 'C'] as Group[]).find((g) => n[g] === 1)!;
  return (major + major + minor) as PatternCode;
}

export function moonReading(cards: DrawnCard[], phase: PhaseKey) {
  const pattern = spreadPattern(cards);
  const reversed = cards.filter((c) => c.rev).length;
  return {
    tagline: TAGLINE[phase],
    pattern,
    patternLabel: CLOSING.patterns[pattern],
    reversed,
    body: `${CLOSING.pattern[phase][pattern]} ${CLOSING.reversal[phase][reversed]}`,
  };
}
