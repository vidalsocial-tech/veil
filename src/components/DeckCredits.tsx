import { DECK_CREDITS as C } from '../data/deck';
import { Chevron } from './Icons';

const Monogram = ({ initials }: { initials: string }) => <span className="monogram" aria-hidden="true">{initials}</span>;

/** The credit line under the Explore carousel: plain text that opens About the deck. */
export function DeckCreditsStrip({ onOpen }: { onOpen: () => void }) {
  return (
    <button className="credits-line" onClick={onOpen} aria-label="About the deck: who made it">
      <span>Art by <em>{C.artist.short}</em></span>
      <span className="credits-dot" aria-hidden="true">·</span>
      <span>Created by <em>{C.creator.short}</em></span>
      <Chevron dir="right" />
    </button>
  );
}

/** Figma "Explore/Deck credits": the full block on the card page and About the deck. */
export function DeckCredits({ onOpen, sub = C.published }: { onOpen?: () => void; sub?: string }) {
  return (
    <section className="credits-card" aria-label="Deck credits">
      <div className="credits-eyebrow">The deck</div>
      <div className="credits-deck">{C.deck}</div>
      <div className="credits-sub">{sub}</div>
      <div className="credits-rule" />
      {[C.artist, C.creator].map((p) => (
        <div className="credits-row" key={p.role}>
          <Monogram initials={p.initials} />
          <div>
            <div className="credits-role">{p.role}</div>
            <div className="credits-fullname">{p.name}</div>
            <p className="credits-note">{p.note}</p>
            <div className="credits-dates">{p.dates}</div>
          </div>
        </div>
      ))}
      <div className="credits-rule" />
      <div className="credits-publisher">{C.publisher}</div>
      {onOpen && (
        <button className="credits-link" onClick={onOpen}>
          The story behind the deck <Chevron dir="right" />
        </button>
      )}
    </section>
  );
}

/** Figma "Explore/Title card": the first card in the carousel, like a printed deck. */
export function TitleCard() {
  return (
    // The outer div is a size container: everything inside is sized in cqw, so the text
    // scales with the card and never overflows when the carousel gets short.
    <div className="title-card">
      <div className="title-card-body">
        <div className="title-card-inset" />
        <svg className="title-card-star" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
        </svg>
        <div className="title-card-name">The {C.deck}</div>
        <div className="title-card-line">78 cards · London · 1909</div>
        <div className="title-card-rule" />
        {[['Art by', C.artist.name], ['Devised by', C.creator.name], ['Published by', 'William Rider & Son']].map(([role, name]) => (
          <div className="title-card-credit" key={role}>
            <div className="title-card-role">{role}</div>
            <div className="title-card-person">{name}</div>
          </div>
        ))}
        <div className="title-card-hint">Swipe to meet the cards →</div>
      </div>
    </div>
  );
}
