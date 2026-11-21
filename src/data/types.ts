export type Element = 'Air' | 'Fire' | 'Water' | 'Earth';
export type Focus = 'love' | 'clarity' | 'change';

/** One card in the deck — shape matches the live CARDS array. */
export interface CardData {
  slug: string;
  emoji: string;
  num: string;
  name: string;
  element: Element;
  archetype: string;
  shadow: string;
  love: string;
  clarity: string;
  change: string;
}

/** A card as drawn into a reading. */
export interface DrawnCard extends CardData {
  rev: boolean;
}
