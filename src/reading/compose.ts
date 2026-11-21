import STANZAS from '../data/stanzas.json';
import type { DrawnCard, Focus } from '../data/types';

interface StanzaSet { open: string; q: string[][] }
type StanzaTable = Record<string, Record<'upright' | 'reversed', Record<Focus, StanzaSet>>>;
const TABLE = STANZAS as StanzaTable;

/**
 * The card's four-line stanza (Figma "How each card stanza is composed"):
 * line 1 = card × orientation × focus, lines 2–4 = card × orientation × Q1/Q2/Q3 answer.
 */
export function stanzaFor(card: DrawnCard, focus: Focus, answers: number[]): string[] {
  const s = TABLE[card.slug]?.[card.rev ? 'reversed' : 'upright']?.[focus];
  if (!s) return [];
  return [s.open, s.q[0][answers[0]], s.q[1][answers[1]], s.q[2][answers[2]]];
}
