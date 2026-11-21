import { CARDS } from '../data/cards';
import type { DrawnCard } from '../data/types';
import { CONFIG } from '../config';

export function shuffle<T>(a: readonly T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export function drawThree(): DrawnCard[] {
  return shuffle(CARDS)
    .slice(0, 3)
    .map((c) => ({ ...c, rev: Math.random() < CONFIG.reversalRate }));
}
