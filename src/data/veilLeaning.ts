import type { DrawnCard } from './types';
import type { DoorState } from '../components/VeilDoor';
import { CONFIG } from '../config';

/**
 * The closing slide — Figma page "Veil Leaning · Closing slide (draft 11.25.26)" (312:2189),
 * section "Veil leaning · closing slide concept" (313:2189).
 *
 * The Veil, not the moon, shapes the ending: an unnamed pull leaning one way.
 *   1. the spread's pattern (10)       → the direction, whisper and body
 *   2. pattern → image: motion or people get a door (a way through), stillness gets a window (a view)
 *   3. how many cards are reversed (0–3) → how far it's open, plus a closing line that describes it
 * Nothing on the slide names the moon phase. Figma keeps it only as a frame-name key
 * ("Veil leaning · <phase> · <pattern> · <n> reversed"); the text is the same in every phase.
 */

export type Group = 'O' | 'E' | 'C';
export type PatternCode = 'OEC' | 'OOE' | 'EEO' | 'OOC' | 'EEC' | 'OOO' | 'EEE' | 'CCO' | 'CCE' | 'CCC';

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
  if (n[major] === 3) return major.repeat(3) as PatternCode;
  const minor = (['O', 'E', 'C'] as Group[]).find((g) => n[g] === 1)!;
  return (major + major + minor) as PatternCode;
}

interface Direction { label: string; kind: 'door' | 'window'; title: string; whisper: string; body: string }

/** Copy from the Figma slides (Direction / Whisper / Body layers). */
export const DIRECTIONS: Record<PatternCode, Direction> = {
  OOO: { label: '3 Odd', kind: 'door', title: 'Toward motion', whisper: 'Something is already moving.',
    body: "Three forces are pushing the same way. Whatever you've been waiting on is on its way through." },
  OOE: { label: '2 Odd + 1 Even', kind: 'door', title: 'Toward momentum', whisper: "It's picking up speed.",
    body: 'Two forces push forward while one holds the ground. Let it come through, but keep one thing steady.' },
  OOC: { label: '2 Odd + 1 Court', kind: 'door', title: 'Toward someone in motion', whisper: 'Someone is moving things.',
    body: 'The energy is restless, and a person sits at the center of it. Notice who keeps showing up at your door.' },
  CCO: { label: '2 Court + 1 Odd', kind: 'door', title: 'Toward a stirring', whisper: 'Something is shifting between you.',
    body: 'The cards are mostly people, and one of them is changing. A connection is on the move, even if no one has said so.' },
  CCC: { label: '3 Court', kind: 'door', title: 'Toward your people', whisper: 'Someone is part of this.',
    body: 'Every card is a person. Whatever is coming will come through the people around you.' },
  OEC: { label: 'Odd + Even + Court', kind: 'door', title: 'Toward a choice', whisper: 'Every force is in the room.',
    body: 'Motion, stillness, and someone in between. Nothing has won yet. The Veil is waiting to see which way you step.' },
  EEE: { label: '3 Even', kind: 'window', title: 'Toward stillness', whisper: 'Something wants you to stay.',
    body: 'Everything here is settling. Nothing needs to move yet. Stay where you are long enough to see clearly.' },
  EEO: { label: '2 Even + 1 Odd', kind: 'window', title: 'Toward a quiet shift', whisper: 'Something small is stirring.',
    body: 'Most of the energy is calm, but one current is restless. Keep watching. Something out there is starting to move.' },
  EEC: { label: '2 Even + 1 Court', kind: 'window', title: 'Toward someone steady', whisper: 'Someone is holding this still.',
    body: "The pull is calm, and it gathers around one person. Look at who's been there all along." },
  CCE: { label: '2 Court + 1 Even', kind: 'window', title: 'Toward those who hold you', whisper: "You're not carrying this alone.",
    body: 'The cards are mostly people, and they are steady. The energy gathers around the ones who keep a light on for you.' },
};

/** Reversed cards close it. Door: 0 wide open · 1–2 ajar · 3 closed. Window: 0–1 open · 2–3 closed. */
const STATE: Record<Direction['kind'], DoorState[]> = {
  door: ['door-open', 'door-ajar', 'door-ajar', 'door-closed'],
  window: ['window-open', 'window-open', 'window-closed', 'window-closed'],
};

const CLOSING_LINE: Record<Direction['kind'], string[]> = {
  door: [
    'The door is wide open. Every card is upright, so nothing is standing in the way.',
    'The door is only ajar. One card is reversed, so part of this is still on the other side.',
    'The door is only ajar. Two cards are reversed, so most of this is moving inside you first.',
    'The door is closed for now. All three cards are reversed, so this is happening quietly, behind it.',
  ],
  window: [
    'The window is open. Every card is upright, so you can see it clearly.',
    'The window is open, but one card is reversed, so part of the view is still hazy.',
    'The window is closed. Two cards are reversed, so you are watching this from the inside.',
    'The window is closed. All three cards are reversed, so the Veil is keeping this one quiet for now.',
  ],
};

export function veilLeaning(cards: DrawnCard[]) {
  const pattern = spreadPattern(cards);
  const reversed = cards.filter((c) => c.rev).length;
  const d = DIRECTIONS[pattern];
  return {
    pattern,
    patternLabel: d.label,
    reversed,
    door: STATE[d.kind][reversed],
    title: d.title,
    whisper: d.whisper,
    body: `${d.body} ${CLOSING_LINE[d.kind][reversed]}`,
  };
}
