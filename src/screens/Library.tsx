import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CONFIG } from '../config';
import { DECK_CARDS, SUITS, suitInfo, type DeckCard, type Suit } from '../data/deck';
import { cardImage } from '../components/Logo';
import { Chevron } from '../components/Icons';
import { DeckCreditsStrip, TitleCard } from '../components/DeckCredits';

export type LibFilter = 'all' | Suit;
/** A carousel slide: a deck card, or the title card that opens the full deck (Figma M07). */
type Slide = { kind: 'title' } | { kind: 'card'; card: DeckCard };

interface Props {
  active: boolean;
  filter: LibFilter;
  /** Deck index of the centred card; null = the title card. */
  card: number | null;
  onChange: (filter: LibFilter, card: number | null) => void;
  onBegin: () => void;
  onOpenCard: (deckIndex: number) => void;
  onSearch: () => void;
  onAbout: () => void;
}

const NEAR = 3; // slides rendered either side of the centre one

/** Figma M01–M03 + M07 — "The Full Tarot": deck first, tap the centre card to turn it. */
export function Library({ active, filter, card, onChange, onBegin, onOpenCard, onSearch, onAbout }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [drag, setDrag] = useState(0);
  const [size, setSize] = useState({ w: 390, h: 380 });
  const areaRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ start: 0, moved: false, down: false });

  const slides = useMemo<Slide[]>(() => {
    const pool = DECK_CARDS.filter((c) => filter === 'all' || c.suit === filter).map((c) => ({ kind: 'card' as const, card: c }));
    return filter === 'all' && CONFIG.explore.titleCard ? [{ kind: 'title' as const }, ...pool] : pool;
  }, [filter]);
  const pos = Math.max(0, slides.findIndex((s) => (s.kind === 'title' ? card === null : s.card.index === card)));
  const current = slides[pos];
  const cardCount = slides.filter((s) => s.kind === 'card').length;

  // Card size follows the space left between the header and the nav (Figma: 228 × 380 at 390 × 844).
  useLayoutEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);
  // As tall as the space allows, but never so wide that the neighbours stop peeking in.
  const cardH = Math.max(260, Math.min(size.h - 8, Math.round((size.w * 0.76) / 0.6), 600));
  const cardW = Math.round(cardH * 0.6);
  const step = Math.round(cardW * 0.83) + 14; // 14px gap to a neighbour scaled to .66

  useEffect(() => setFlipped(false), [card, filter]);

  const go = (p: number) => {
    const next = slides[Math.max(0, Math.min(slides.length - 1, p))];
    onChange(filter, next.kind === 'title' ? null : next.card.index);
  };
  const setFilter = (f: LibFilter) => {
    const first = DECK_CARDS.find((c) => c.suit === f);
    onChange(f, f === 'all' ? (CONFIG.explore.titleCard ? null : 0) : first!.index);
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(pos + 1);
      else if (e.key === 'ArrowLeft') go(pos - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

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

  const subtitle = filter === 'all'
    ? `${cardCount} cards · swipe · tap to turn`
    : filter === 'major'
      ? `22 cards · ${suitInfo('major').tagline}`
      : `14 ${suitInfo(filter).label.toLowerCase()} · ${suitInfo(filter).tagline}`;
  const announce = current?.kind === 'card'
    ? `${current.card.name}, ${pos + (slides[0]?.kind === 'title' ? 0 : 1)} of ${cardCount}`
    : 'Title card: the deck and its makers';

  return (
    <div className="lib">
      <header className="lib-top">
        <button className="icon-btn" onClick={onSearch} aria-label="Find a card">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        </button>
        <div className="lib-logo">VeilReads</div>
        <span className="lib-top-spacer" aria-hidden="true" />
      </header>
      <h1 className="lib-title">The Full Tarot</h1>
      <p className="lib-sub">{subtitle}</p>

      <div className="lib-filters" role="tablist" aria-label="Filter by suit">
        {[{ key: 'all' as const, filter: 'All 78' }, ...SUITS].map((f) => (
          <button key={f.key} role="tab" aria-selected={filter === f.key}
            className={`pill${filter === f.key ? ' on' : ''}`} onClick={() => setFilter(f.key)}>
            {f.filter}
          </button>
        ))}
      </div>

      <div
        className="lib-carousel"
        ref={areaRef}
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
      >
        {slides.map((s, si) => {
          const off = si - pos;
          if (Math.abs(off) > NEAR) return null;
          const isActive = off === 0;
          const x = size.w / 2 - cardW / 2 + off * step + drag;
          return (
            <div
              key={s.kind === 'title' ? 'title' : s.card.slug}
              className={`lib-slide${isActive ? ' active' : ''}`}
              style={{
                width: cardW, height: cardH,
                transform: `translateX(${x}px) scale(${isActive ? 1 : 0.66})`,
                transition: drag ? 'none' : undefined,
              }}
              onClick={() => {
                if (dragState.current.moved) return;
                if (!isActive) go(si);
                else if (s.kind === 'title') onAbout();
                else setFlipped((f) => !f);
              }}
            >
              {s.kind === 'title' ? <TitleCard /> : (
                <div className={`lib-flipper${isActive && flipped ? ' flipped' : ''}`}>
                  <div className="lib-face lib-face-front">
                    <img src={cardImage(s.card.slug)} alt={s.card.name} draggable={false} />
                  </div>
                  <div className="lib-face lib-face-back" aria-hidden={!(isActive && flipped)}>
                    <div className="back-num">{s.card.num} · {s.card.line.split(' · ').pop()}</div>
                    <div className="back-rule" />
                    <div className="back-name">{s.card.name}</div>
                    <div className="back-title">{s.card.title}</div>
                    <div className="back-divider" />
                    <div className="back-label">Meaning</div>
                    <p className="back-meaning">{s.card.meaning}</p>
                    <button className="back-cta" onClick={(e) => { e.stopPropagation(); onOpenCard(s.card.index); }}>
                      View full card <Chevron dir="right" />
                    </button>
                    <div className="back-hint">Tap the card to turn it back</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No visible name / arrows / counter: you swipe (or use ← →). Screen readers still hear where they are. */}
      <p className="sr-only" aria-live="polite">{announce}</p>

      {/* On the title card the credits are already the card itself (Figma M07). */}
      <div className={`lib-credits${current?.kind === 'title' ? ' hidden' : ''}`}>
        <DeckCreditsStrip onOpen={onAbout} />
      </div>

      <div className="reading-bar">
        <div>
          <strong>Ready for a reading?</strong>
          <span>Three cards. One story.</span>
        </div>
        <button className="pill on" onClick={onBegin}>Begin →</button>
      </div>
    </div>
  );
}
