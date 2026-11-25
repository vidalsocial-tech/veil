import DECK from './deck.json';
import STANZAS from './stanzas.json';
import { CARDS } from './cards';
import type { CardData, Focus } from './types';

/**
 * Everything Explore needs about one card, joined from three sources:
 * - cards.ts      — name, numeral, element, reading angles (from the live site)
 * - deck.json     — line, title, short meaning, shadow (Figma "Card Deck" page),
 *                   plus the reversed meaning (from the original reading prompt, in "you" voice)
 * - stanzas.json  — first stanza line per orientation × focus, used for Root / Now / Path
 */
export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

export interface DeckCard extends CardData {
  index: number;
  suit: Suit;
  line: string;
  title: string;
  meaning: string;
  shortShadow: string;
  reversed: string;
}

interface DeckEntry { line: string; title: string; meaning: string; shadow: string; reversed: string }
const D = DECK as Record<string, DeckEntry>;

/** Card order in cards.ts: 22 major, then 14 each of wands, cups, swords, pentacles. */
const suitAt = (i: number): Suit =>
  i < 22 ? 'major' : (['wands', 'cups', 'swords', 'pentacles'] as const)[Math.floor((i - 22) / 14)];

export const DECK_CARDS: DeckCard[] = CARDS.map((c, index) => {
  const d = D[c.slug];
  return {
    ...c, index, suit: suitAt(index),
    line: d?.line ?? `${c.num} · ${c.element}`,
    title: d?.title ?? '',
    meaning: d?.meaning ?? c.archetype,
    shortShadow: d?.shadow ?? c.shadow,
    reversed: d?.reversed ?? c.shadow,
  };
});

export const SUITS: { key: Suit; label: string; filter: string; tagline: string }[] = [
  { key: 'major', label: 'Major Arcana', filter: 'Major', tagline: 'the big turning points' },
  { key: 'wands', label: 'Wands', filter: 'Wands', tagline: 'fire · drive and spark' },
  { key: 'cups', label: 'Cups', filter: 'Cups', tagline: 'water · feeling and connection' },
  { key: 'swords', label: 'Swords', filter: 'Swords', tagline: 'air · thought and conflict' },
  { key: 'pentacles', label: 'Pentacles', filter: 'Pentacles', tagline: 'earth · work, money, the body' },
];

export const suitInfo = (s: Suit) => SUITS.find((x) => x.key === s)!;

type StanzaTable = Record<string, Record<'upright' | 'reversed', Record<Focus, { open: string }>>>;
const S = STANZAS as StanzaTable;

/** The line a reading opens this card with, for one focus (Figma "Readings" pages). */
export const stanzaOpener = (slug: string, rev: boolean, focus: Focus): string =>
  S[slug]?.[rev ? 'reversed' : 'upright']?.[focus]?.open ?? '';

/** Who made the deck. Shown in the credits strip, the card page and About the deck. */
export const DECK_CREDITS = {
  deck: 'Rider-Waite-Smith Tarot',
  published: 'First published in London, 1909',
  publisher: 'Published by William Rider & Son, London',
  artist: {
    initials: 'PCS', role: 'Artist', name: 'Pamela Colman Smith', short: 'Pamela Colman Smith', dates: '1878–1951',
    note: 'Drew all 78 cards in 1909 and gave every card, the small ones too, its own scene.',
  },
  creator: {
    initials: 'AEW', role: 'Creator', name: 'Arthur Edward Waite', short: 'A. E. Waite', dates: '1857–1942',
    note: 'Devised the deck’s scheme and wrote its guide, The Pictorial Key to the Tarot.',
  },
} as const;
