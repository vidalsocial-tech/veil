import { useEffect, useMemo, useRef, useState } from 'react';
import { DECK_CARDS, SUITS, type Suit } from '../data/deck';
import { cardImage } from '../components/Logo';
import { Chevron } from '../components/Icons';
import { BackBar, SectionLabel } from '../components/ExploreBits';

type Scope = 'name' | 'meaning' | 'element';
const SCOPES: { key: Scope; label: string }[] = [
  { key: 'name', label: 'Name' }, { key: 'meaning', label: 'Meaning' }, { key: 'element', label: 'Element' },
];
const MAX_RESULTS = 12;

interface Props {
  active: boolean;
  onBack: () => void;
  onOpenCard: (deckIndex: number) => void;
  onSuit: (suit: Suit) => void;
  onAbout: () => void;
}

/** Figma M04 — search by name, meaning or element, then browse by suit. */
export function FindCard({ active, onBack, onOpenCard, onSuit, onAbout }: Props) {
  const [q, setQ] = useState('');
  const [scope, setScope] = useState<Scope>('name');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (active) window.setTimeout(() => inputRef.current?.focus(), 350); }, [active]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return DECK_CARDS.filter((c) => {
      if (scope === 'name') return c.name.toLowerCase().includes(term) || c.title.toLowerCase().includes(term);
      if (scope === 'element') return c.line.toLowerCase().includes(term) || c.element.toLowerCase().includes(term);
      return [c.meaning, c.archetype, c.shortShadow, c.love, c.clarity, c.change].some((t) => t.toLowerCase().includes(term));
    });
  }, [q, scope]);

  return (
    <div className="find">
      <BackBar label="The deck" onBack={onBack} />
      <div className="find-inner">
        <h1 className="lib-title">Find a card</h1>
        <label className="find-field">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="The Moon, hope, water…"
            aria-label="Search the deck" enterKeyHint="search" />
          {q && (
            <button className="find-clear" onClick={() => { setQ(''); inputRef.current?.focus(); }} aria-label="Clear search">
              <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          )}
        </label>
        <div className="find-scopes" role="tablist" aria-label="Search in">
          {SCOPES.map((s) => (
            <button key={s.key} role="tab" aria-selected={scope === s.key} className={`pill${scope === s.key ? ' on' : ''}`}
              onClick={() => setScope(s.key)}>{s.label}</button>
          ))}
        </div>

        {q.trim() && (
          <>
            <SectionLabel>{results.length === 1 ? '1 card' : `${results.length} cards`}</SectionLabel>
            {results.length === 0 && <p className="find-empty">No cards match “{q.trim()}”. Try a name like “Cups” or a word like “hope”.</p>}
            <div className="find-results">
              {results.slice(0, MAX_RESULTS).map((c) => (
                <button className="result-row" key={c.slug} onClick={() => onOpenCard(c.index)}>
                  <img src={cardImage(c.slug)} alt="" loading="lazy" />
                  <span className="result-text">
                    <span className="result-line">{c.line}</span>
                    <span className="result-name">{c.name}</span>
                    <span className="result-title">{c.title}</span>
                  </span>
                  <Chevron dir="right" />
                </button>
              ))}
            </div>
            {results.length > MAX_RESULTS && <p className="find-empty">Showing {MAX_RESULTS} of {results.length}. Add a word to narrow it down.</p>}
          </>
        )}

        <SectionLabel>Browse by suit</SectionLabel>
        <div className="suit-list">
          {SUITS.map((s) => (
            <button className="suit-row" key={s.key} onClick={() => onSuit(s.key)}>
              <span>
                <span className="suit-name">{s.label}</span>
                <span className="suit-meta">{s.key === 'major' ? 22 : 14} cards · {s.tagline}</span>
              </span>
              <Chevron dir="right" />
            </button>
          ))}
        </div>
        <button className="suit-row boxed" onClick={onAbout}>
          <span>
            <span className="suit-name">About the deck</span>
            <span className="suit-meta">Pamela Colman Smith · 1909</span>
          </span>
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
