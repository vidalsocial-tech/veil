import { CONFIG } from '../config';
import { Moon } from '../components/Moon';
import { currentPhase } from '../data/moon';

/** Figma P01 Home — tonight's moon above the wordmark. */
export function Landing({ onBegin, onExplore }: { onBegin: () => void; onExplore: () => void }) {
  return (
    <>
      <Moon phase={currentPhase().key} className="hero-moon" />
      <h1 className="hero-title">
        Veil<em>Reads</em>
      </h1>
      <p className="hero-sub">
        {CONFIG.copy.heroSub[0]}
        <br />
        {CONFIG.copy.heroSub[1]}
      </p>
      <div className="hero-cta">
        <button className="btn-gold" onClick={onBegin}>Begin your reading</button>
        <button className="btn-ghost" onClick={onExplore}>Explore the deck</button>
      </div>
      <p className="hero-hint">{CONFIG.copy.heroHint}</p>
      <a className="hero-legal" href="/privacy.html">Privacy</a>
    </>
  );
}
