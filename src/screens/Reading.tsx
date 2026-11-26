import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { CONFIG } from '../config';
import type { DrawnCard, Focus } from '../data/types';
import { FOCUS_LINE, QUESTIONS } from '../data/questions';
import { veilLeaning } from '../data/veilLeaning';
import { Logo, cardImage } from '../components/Logo';
import { VeilDoor } from '../components/VeilDoor';

interface Props {
  cards: DrawnCard[];
  focus: Focus;
  answers: number[];
  stanzas: string[][];
  onReshuffle: () => void;
  onShare: () => void;
}

/**
 * Figma PR1–PR6: the reading as a stack of six pages.
 * Your cards → Where you are → card I → card II → card III → The Veil is leaning.
 * Swipe, tap the card, use the arrows or ←/→ keys to turn the page.
 */
export function Reading({ cards, focus, answers, stanzas, onReshuffle, onShare }: Props) {
  const [page, setPage] = useState(0);
  const [drag, setDrag] = useState(0);
  const start = useRef<{ x: number; y: number; t: number } | null>(null);
  const moved = useRef(false);

  const pages: ReactNode[] = [
    <YourCards key="cards" cards={cards} />,
    <WhereYouAre key="where" focus={focus} answers={answers} />,
    ...cards.map((c, i) => <CardPage key={c.slug} card={c} index={i} lines={stanzas[i]} />),
    <VeilLeaning key="veil" cards={cards} onReshuffle={onReshuffle} onShare={onShare} />,
  ];
  const last = pages.length - 1;

  const go = useCallback((p: number) => setPage(Math.max(0, Math.min(last, p))), [last]);
  useEffect(() => setPage(0), [cards]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(page + 1);
      if (e.key === 'ArrowLeft') go(page - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page, go]);

  const down = (x: number, y: number) => { start.current = { x, y, t: Date.now() }; moved.current = false; };
  const move = (x: number) => {
    if (!start.current) return;
    const d = x - start.current.x;
    if (Math.abs(d) > 6) moved.current = true;
    // resist dragging past either end
    setDrag((page === 0 && d > 0) || (page === last && d < 0) ? d / 4 : d);
  };
  const up = () => {
    if (!start.current) return;
    const fast = Date.now() - start.current.t < 250 && Math.abs(drag) > 30;
    if (drag < -80 || (fast && drag < 0)) go(page + 1);
    else if (drag > 80 || (fast && drag > 0)) go(page - 1);
    start.current = null;
    setDrag(0);
  };

  return (
    <div className="reading">
      <div className="reading-head">
        <Logo />
        <div className="seg-progress" aria-label={`Page ${page + 1} of ${pages.length}`}>
          {pages.map((_, i) => <span key={i} className={`seg${i <= page ? ' on' : ''}`} />)}
        </div>
      </div>

      <div className="stack-wrap">
        <button className="page-nav prev" onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous page">
          <img src="/figma/chevron-left.svg" alt="" width={18} height={18} />
        </button>

        <div
          className="stack"
          onPointerDown={(e) => { if (!(e.target as HTMLElement).closest('button')) down(e.clientX, e.clientY); }}
          onPointerMove={(e) => move(e.clientX)}
          onPointerUp={up}
          onPointerCancel={up}
          onPointerLeave={up}
        >
          {pages.map((content, i) => {
            const off = i - page;
            const gone = off < 0;
            // Pages already turned fly off to the left, tilted (Figma: −14°, opacity 0).
            // Pages ahead stack underneath, slightly rotated (−1.4°, then 2.2°).
            const style: React.CSSProperties = gone
              ? { transform: 'translateX(-130%) rotate(-14deg)', opacity: 0, zIndex: 10 + i, pointerEvents: 'none' }
              : off === 0
                ? { transform: `translateX(${drag}px) rotate(${drag / 40}deg)`, zIndex: 100, transition: drag ? 'none' : undefined }
                : {
                    transform: `translate(${off === 1 ? 11 : 22}px, ${off === 1 ? 10 : 20}px) rotate(${off === 1 ? -1.4 : 2.2}deg)`,
                    opacity: off <= 2 ? (off === 2 ? 0.85 : 1) : 0,
                    zIndex: 100 - off,
                    pointerEvents: 'none',
                  };
            return (
              <article
                key={i}
                className={`page${off === 0 ? ' current' : ''}`}
                style={style}
                aria-hidden={off !== 0}
                onClick={() => { if (off === 0 && !moved.current && i < last) go(page + 1); }}
              >
                {Math.abs(off) <= 2 && content}
              </article>
            );
          })}
        </div>

        <button className="page-nav next" onClick={() => go(page + 1)} disabled={page === last} aria-label="Next page">
          <img src="/figma/chevron-right.svg" alt="" width={18} height={18} />
        </button>
      </div>

      <p className={`swipe-hint${page === last ? ' hidden' : ''}`}>{CONFIG.copy.hint}</p>
    </div>
  );
}

function YourCards({ cards }: { cards: DrawnCard[] }) {
  const c = CONFIG.copy.yourCards;
  return (
    <>
      <p className="eyebrow">{c.eyebrow}</p>
      <h2 className="page-title">{c.title}</h2>
      <div className="page-spread">
        {cards.map((card) => (
          <figure key={card.slug}>
            <img src={cardImage(card.slug)} alt={card.name} className={card.rev ? 'rev' : ''} draggable={false} />
            <figcaption>{card.name}{card.rev ? ' · ℞' : ''}</figcaption>
          </figure>
        ))}
      </div>
      <p className="page-lead">{c.body[0]}<br />{c.body[1]}</p>
    </>
  );
}

function WhereYouAre({ focus, answers }: { focus: Focus; answers: number[] }) {
  const qs = QUESTIONS[focus];
  return (
    <>
      <p className="eyebrow">{CONFIG.copy.whereYouAre.eyebrow}</p>
      <h2 className="page-title">{FOCUS_LINE[focus]}</h2>
      <div className="page-sentences">
        {qs.map((q, i) => <p key={i}>{q.answers[answers[i]]?.sentence}</p>)}
      </div>
    </>
  );
}

function CardPage({ card, index, lines }: { card: DrawnCard; index: number; lines: string[] }) {
  const phrase = CONFIG.positionPhrase[index][card.rev ? 'reversed' : 'upright'];
  return (
    <>
      <img className={`page-card${card.rev ? ' rev' : ''}`} src={cardImage(card.slug)} alt={card.name} draggable={false} />
      <h2 className="page-card-name">{card.name}</h2>
      <p className="eyebrow small">{card.rev ? 'Reversed' : 'Upright'} · {phrase}</p>
      {CONFIG.stanzaLayout === 'paragraph'
        ? <p className="page-stanza prose">{lines.join(' ')}</p>
        : <div className="page-stanza">{lines.map((l, i) => <p key={i}>{l}</p>)}</div>}
    </>
  );
}

/** Figma "Veil Leaning · Closing slide": where the Veil is leaning, read from the spread's shape. */
function VeilLeaning({ cards, onReshuffle, onShare }: {
  cards: DrawnCard[]; onReshuffle: () => void; onShare: () => void;
}) {
  const r = veilLeaning(cards);
  return (
    <div className="veil-leaning" data-pattern={r.pattern} data-reversed={r.reversed} data-door={r.door}>
      <p className="vl-eyebrow">The Veil is leaning</p>
      <VeilDoor state={r.door} className="vl-door" />
      <h2 className="vl-title">{r.title}</h2>
      <p className="vl-whisper">{r.whisper}</p>
      <p className="vl-body">{r.body}</p>
      <div className="page-actions vl-actions">
        <button className="btn-gold" onClick={onReshuffle}>Reshuffle</button>
        {CONFIG.showShare && (
          <button className="btn-ghost" onClick={onShare}>
            <img src="/figma/icon-share.svg" alt="" width={14} height={14} />
            Share reading
          </button>
        )}
      </div>
    </div>
  );
}
