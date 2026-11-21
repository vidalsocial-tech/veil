import { useEffect, useRef, useState } from 'react';
import { CARDS } from '../data/cards';
import type { Focus } from '../data/types';
import { cardImage } from '../components/Logo';

const MAJOR = /^(0|[IVX]+)$/;

interface Props {
  index: number;
  onIndex: (i: number) => void;
  onBack: () => void;
  onBegin: () => void;
}

export function CardDetail({ index, onIndex, onBack, onBegin }: Props) {
  const [angle, setAngle] = useState<Focus>('love');
  const scrollRef = useRef<HTMLDivElement>(null);
  const c = CARDS[index];

  useEffect(() => {
    setAngle('love');
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const arcana = MAJOR.test(c.num) ? `Major Arcana ${c.num}` : `Minor Arcana · ${c.num}`;

  return (
    <div className="det-scroll" ref={scrollRef}>
      <div className="det-inner">
        <button className="det-back" onClick={onBack}>← All Cards</button>
        <div className="det-hero">
          <div className="det-card-face">
            <img src={cardImage(c.slug)} alt={c.name} />
          </div>
          <div className="det-meta">
            <div className="det-arcana">{arcana}</div>
            <div className="det-name">{c.name}</div>
            <div className="det-kws">
              <span className="det-kw">{c.element}</span>
              <span className="det-kw">{c.emoji} {c.num}</span>
            </div>
          </div>
        </div>

        <div className="det-section">
          <div className="det-section-label">Meaning</div>
          <div className="det-body">{c.archetype}</div>
          <div className="det-shadow">Shadow: {c.shadow}</div>
        </div>

        <div className="det-section">
          <div className="det-section-label">Reading angles</div>
          <div className="det-tabs">
            {(['love', 'clarity', 'change'] as Focus[]).map((f) => (
              <button key={f} className={`det-tab${angle === f ? ' on' : ''}`} onClick={() => setAngle(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="det-angle">{c[angle]}</div>
        </div>

        <div className="det-cta">
          <p>
            <strong>Want this card in a reading?</strong>
            Draw three cards and let the story unfold
          </p>
          <button className="btn-gold" onClick={onBegin}>Begin Your Reading</button>
        </div>

        <div className="det-nav">
          <button className="det-nav-btn" disabled={index === 0} onClick={() => onIndex(index - 1)}>← Prev</button>
          <span className="det-nav-counter">{index + 1} / {CARDS.length}</span>
          <button className="det-nav-btn" disabled={index === CARDS.length - 1} onClick={() => onIndex(index + 1)}>Next →</button>
        </div>
      </div>
    </div>
  );
}
