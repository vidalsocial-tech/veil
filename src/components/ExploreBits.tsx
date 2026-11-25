import type { ReactNode } from 'react';

/** Figma "Top bar" on the card page, Find a card and About the deck. Home stays in the global corner button. */
export function BackBar({ label, onBack, sticky }: { label: string; onBack: () => void; sticky?: boolean }) {
  return (
    <header className={`back-bar${sticky ? ' sticky' : ''}`}>
      <button className="back-link" onClick={onBack}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
        {label}
      </button>
    </header>
  );
}

/** Figma "Explore/Section label": gold caps with a hairline running to the edge. */
export const SectionLabel = ({ children }: { children: ReactNode }) => <div className="section-label">{children}</div>;
