import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CARDS } from '../data/cards';
import type { Element } from '../data/types';
import { cardImage } from '../components/Logo';
import { Chevron } from '../components/Icons';

const FILTERS: { key: 'all' | Element; label: string }[] = [
  { key: 'all', label: 'All 78' },
  { key: 'Fire', label: 'Fire' },
  { key: 'Water', label: 'Water' },
  { key: 'Air', label: 'Air' },
  { key: 'Earth', label: 'Earth' },
];
const SLIDE = 240, GAP = 12;

interface Props {
  active: boolean;
  onBegin: () => void;
  onOpenCard: (deckIndex: number) => void;
}

/** "The Full Tarot" — swipeable carousel; tap the centre card to flip it. */
export function Library({ active, onBegin, onOpenCard }: Props) {
  const [filter, setFilter] = useState<'all' | Element>('all');
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [drag, setDrag] = useState(0);
  const [vw, setVw] = useState(window.innerWidth);
  const vpRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ start: 0, moved: false, down: false });

  const pool = useMemo(
    () => CARDS.map((c, i) => ({ c, i })).filter(({ c }) => filter === 'all' || c.element === filter),
    [filter],
  );

  useLayoutEffect(() => {
    const measure = () => setVw(vpRef.current?.offsetWidth || window.innerWidth);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  useEffect(() => { setPos(0); setFlipped(false); }, [filter]);

  const go = (p: number) => { setFlipped(false); setPos(Math.max(0, Math.min(pool.length - 1, p))); };
  const offset = (vw - SLIDE) / 2 - pos * (SLIDE + GAP) + drag;

  const onDown = (x: number) => { dragState.current = { start: x, moved: false, down: true }; };
  const onMove = (x: number) => {
    if (!dragState.current.down) return;
    const d = x - dragState.current.start;
    if (Math.abs(d) > 8) dragState.current.moved = true;
    setDrag(d);
  };
  const onUp = () => {
    if (!dragState.current.down) return;
    dragState.current.down = false;
    if (Math.abs(drag) > 52) go(pos + (drag < 0 ? 1 : -1));
    setDrag(0);
  };

  const current = pool[pos]?.c;

  return (
    <>
      <div className="lib-header">
        <div className="lib-title">The Full Tarot</div>
        <div className="lib-sub">78 cards · swipe to explore · tap to reveal</div>
        <div className="lib-banner">
          <div className="lib-banner-text">
            <strong>Ready for a reading?</strong>
            Draw three cards and let the story unfold
          </div>
          <button className="lib-banner-btn" onClick={onBegin}>Begin →</button>
        </div>
      </div>
      <div className="lib-filters">
        {FILTERS.map((f) => (
          <button key={f.key} className={`lib-filter${filter === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="lib-carousel-wrap">
        <div
          className="lib-carousel-vp"
          ref={vpRef}
          onMouseDown={(e) => onDown(e.clientX)}
          onMouseMove={(e) => onMove(e.clientX)}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          onTouchEnd={onUp}
        >
          <div
            className="lib-carousel-track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: drag ? 'none' : 'transform .42s cubic-bezier(.25,.46,.45,.94)',
            }}
          >
            {pool.map(({ c, i }, si) => {
              // Render images only near the current card (78 × large PNGs otherwise).
              const near = Math.abs(si - pos) <= 3;
              return (
                <div
                  key={c.slug}
                  className={`lib-slide${si === pos ? ' active' : ''}`}
                  onClick={() => {
                    if (dragState.current.moved) return;
                    if (si !== pos) go(si);
                    else setFlipped((f) => !f);
                  }}
                >
                  <div className={`lib-flipper${si === pos && flipped ? ' flipped' : ''}`}>
                    <div className="lib-face lib-face-front">
                      {near && <img src={cardImage(c.slug)} alt={c.name} loading="lazy" draggable={false} />}
                    </div>
                    <div className="lib-face lib-face-back">
                      <div className="lib-back-corner tl" />
                      <div className="lib-back-corner br" />
                      <div className="lib-back-roman">{c.num}</div>
                      <div className="lib-back-rule" />
                      <div className="lib-back-name">{c.name}</div>
                      <div className="lib-back-elem">{c.element}</div>
                      <div className="lib-back-divider" />
                      <div className="lib-back-label">Meaning</div>
                      <div className="lib-back-meaning">{c.archetype.split(/(?<=[.!?])\s/)[0]}</div>
                      <div
                        className="lib-back-cta"
                        onClick={(e) => { e.stopPropagation(); onOpenCard(i); }}
                      >
                        View Full Card <span>›</span>
                      </div>
                      <div className="lib-back-hint">tap card to turn back</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`lib-card-meta${flipped ? ' hidden' : ''}`}>
          <div className="lib-meta-name">{current?.name}</div>
          <div className="lib-meta-el">{current?.element}</div>
        </div>
      </div>

      <div className="lib-nav">
        <button className="lib-nav-btn" disabled={pos === 0} onClick={() => go(pos - 1)} aria-label="Previous card">
          <Chevron dir="left" />
        </button>
        <div>
          <div className="lib-progress">
            <div className="lib-progress-fill" style={{ width: `${((pos + 1) / pool.length) * 100}%` }} />
          </div>
          <div className="lib-nav-counter">{pos + 1} / {pool.length}</div>
        </div>
        <button className="lib-nav-btn" disabled={pos === pool.length - 1} onClick={() => go(pos + 1)} aria-label="Next card">
          <Chevron dir="right" />
        </button>
      </div>
    </>
  );
}
