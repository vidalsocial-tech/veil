import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';
import { DECK_CARDS, stanzaOpener } from '../data/deck';
import type { Focus } from '../data/types';
import { cardImage } from '../components/Logo';
import { DeckCredits } from '../components/DeckCredits';
import { BackBar, SectionLabel } from '../components/ExploreBits';

interface Props {
  index: number;
  onIndex: (i: number) => void;
  onBack: () => void;
  onBegin: () => void;
  onAbout: () => void;
}

const ANGLES: Focus[] = ['love', 'clarity', 'change'];
const POSITIONS = ['Root', 'Now', 'Path'] as const;

/** Figma M05 / M06 — the card page, upright or reversed. */
export function CardDetail({ index, onIndex, onBack, onBegin, onAbout }: Props) {
  const [rev, setRev] = useState(false);
  const [angle, setAngle] = useState<Focus>('love');
  const scrollRef = useRef<HTMLDivElement>(null);
  const c = DECK_CARDS[index];
  const prev = DECK_CARDS[index - 1];
  const next = DECK_CARDS[index + 1];

  useEffect(() => { scrollRef.current?.scrollTo({ top: 0 }); }, [index]);

  // Upright angles are the live site's; reversed ones are the reading's own opening line for that focus.
  const angleText = rev ? stanzaOpener(c.slug, true, angle) : c[angle];

  return (
    <div className="det-scroll" ref={scrollRef}>
      <BackBar label="All cards" onBack={onBack} sticky />
      <div className="det-inner">
        <div className={`det-art${rev ? ' reversed' : ''}`}>
          <img src={cardImage(c.slug)} alt={`${c.name}${rev ? ', reversed' : ''}`} />
        </div>
        <div className="det-line">{c.line}</div>
        <h1 className="det-name">{c.name}</h1>
        <div className="det-title">{c.title}</div>

        <div className="det-orient" role="tablist" aria-label="Orientation">
          <button role="tab" aria-selected={!rev} className={`pill${!rev ? ' on' : ''}`} onClick={() => setRev(false)}>Upright</button>
          <button role="tab" aria-selected={rev} className={`pill${rev ? ' on' : ''}`} onClick={() => setRev(true)}>Reversed</button>
        </div>

        <SectionLabel>{rev ? 'Meaning · reversed' : 'Meaning'}</SectionLabel>
        <p className="det-body">{rev ? c.reversed : c.meaning}</p>
        {!rev && <p className="det-shadow">Shadow: {c.shortShadow.charAt(0).toLowerCase() + c.shortShadow.slice(1)}</p>}

        <SectionLabel>Reading angles</SectionLabel>
        <div className="det-tabs" role="tablist" aria-label="Reading angle">
          {ANGLES.map((f) => (
            <button key={f} role="tab" aria-selected={angle === f} className={`pill${angle === f ? ' on' : ''}`} onClick={() => setAngle(f)}>{f}</button>
          ))}
        </div>
        <div className="det-angle">{angleText}</div>

        <SectionLabel>In a reading</SectionLabel>
        <p className="det-hint">Where it falls in your spread changes what it speaks to.</p>
        <div className="det-positions">
          {POSITIONS.map((p, i) => (
            <div className="det-position" key={p}>
              <div className="det-position-label">{p}</div>
              <div className="det-position-line">
                {CONFIG.positionPhrase[i][rev ? 'reversed' : 'upright'].replace(/^./, (s) => s.toUpperCase())}
              </div>
            </div>
          ))}
        </div>

        <DeckCredits onOpen={onAbout} />

        <div className="det-cta">
          <strong>Want this card in a reading?</strong>
          <span>Draw three cards and let the story unfold</span>
          <button className="btn-gold" onClick={onBegin}>Begin your reading</button>
        </div>

        <nav className="det-nav" aria-label="Other cards">
          <button className="pill" disabled={!prev} onClick={() => prev && onIndex(index - 1)}>← {prev?.name ?? 'Start'}</button>
          <span className="det-nav-counter">{index + 1} of {DECK_CARDS.length}</span>
          <button className="pill" disabled={!next} onClick={() => next && onIndex(index + 1)}>{next?.name ?? 'End'} →</button>
        </nav>
      </div>
    </div>
  );
}
