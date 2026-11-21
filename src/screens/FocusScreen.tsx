import { CONFIG } from '../config';
import type { Focus } from '../data/types';
import { Logo } from '../components/Logo';

const OPTIONS: { key: Focus; label: string; icon: string }[] = [
  { key: 'love', label: 'Love', icon: '/figma/icon-heart.svg' },
  { key: 'clarity', label: 'Clarity', icon: '/figma/icon-sun.svg' },
  { key: 'change', label: 'Change', icon: '/figma/icon-change.svg' },
];

interface Props {
  focus: Focus | null;
  onFocus: (f: Focus) => void;
  onContinue: () => void;
}

/** Figma P02 / P03a–c. The personal note is gone — three questions follow instead. */
export function FocusScreen({ focus, onFocus, onContinue }: Props) {
  return (
    <>
      <Logo />
      <div className="section-title">{CONFIG.copy.focusTitle}</div>
      <p className="section-sub">{CONFIG.copy.focusSub}</p>
      <div className="tile-row" role="radiogroup" aria-label="Focus">
        {OPTIONS.map(({ key, label, icon }) => (
          <button
            key={key}
            role="radio"
            aria-checked={focus === key}
            className={`tile${focus === key ? ' on' : ''}`}
            onClick={() => onFocus(key)}
          >
            <img className="tile-icon" src={icon} alt="" width={26} height={26} />
            <span className="tile-label">{label}</span>
          </button>
        ))}
      </div>
      <button className="btn-gold btn-continue" disabled={!focus} onClick={onContinue}>
        Continue
      </button>
    </>
  );
}
