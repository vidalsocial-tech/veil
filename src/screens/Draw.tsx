import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';
import type { DrawnCard } from '../data/types';
import { Logo, cardImage } from '../components/Logo';

/** Figma P07-0 … P07-3. */
export function Draw({ cards, onAllRevealed }: { cards: DrawnCard[]; onAllRevealed: () => void }) {
  const [revealed, setRevealed] = useState([false, false, false]);
  const done = useRef(onAllRevealed);
  done.current = onAllRevealed;

  useEffect(() => setRevealed([false, false, false]), [cards]);

  useEffect(() => {
    if (revealed.every(Boolean)) {
      const t = setTimeout(() => done.current(), CONFIG.timing.revealToReading);
      return () => clearTimeout(t);
    }
  }, [revealed]);

  return (
    <>
      <Logo />
      <p className="draw-instruction">
        {CONFIG.copy.draw[0]}
        <br />
        {CONFIG.copy.draw[1]}
      </p>
      <div className="spread">
        {cards.map((card, i) => (
          <div key={card.slug + i} className={`cslot${revealed[i] ? ' revealed' : ''}`}>
            <span className="pos-num">{CONFIG.numerals[i]}</span>
            <button
              className={`flip-wrap${revealed[i] ? ' done' : ''}`}
              aria-label={revealed[i] ? card.name : `Reveal card ${CONFIG.numerals[i]}`}
              onClick={() => setRevealed((r) => r.map((v, j) => v || j === i))}
            >
              <div className={`flip-inner${revealed[i] ? ' flipped' : ''}`}>
                <div className="card-back">
                  <img src="/figma/icon-star.svg" alt="" width={22} height={22} />
                </div>
                <div className="card-front">
                  <img src={cardImage(card.slug)} alt={card.name} className={card.rev ? 'rev' : ''} />
                </div>
              </div>
            </button>
            <div className="pos-label">
              {CONFIG.positions[i]}
              {card.rev ? ' · ℞' : ''}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
