import { useEffect, useState } from 'react';
import type { Focus } from '../data/types';
import { FOCUS_LABEL, QUESTIONS, answerIcon } from '../data/questions';
import { Logo } from '../components/Logo';
import { CONFIG } from '../config';

interface Props {
  focus: Focus;
  step: number;          // 0–2
  selected?: number;
  onAnswer: (i: number) => void;
  onBack: () => void;
}

/** Figma PQ-L1…PQ-X3: one question, three tiles, Back. */
export function QuestionScreen({ focus, step, selected, onAnswer, onBack }: Props) {
  const q = QUESTIONS[focus][step];
  const [picked, setPicked] = useState<number | undefined>(selected);
  useEffect(() => setPicked(selected), [focus, step, selected]);

  return (
    <div className="question" key={`${focus}-${step}`}>
      <Logo />
      <div className="step-tag">{FOCUS_LABEL[focus]} · {step + 1} of 3</div>
      <div className="section-title question-title">{q.prompt}</div>
      <div className="tile-row" role="radiogroup" aria-label={q.prompt}>
        {q.answers.map((a, i) => (
          <button
            key={a.label}
            role="radio"
            aria-checked={picked === i}
            className={`tile${picked === i ? ' on' : ''}`}
            onClick={() => {
              if (picked !== undefined && picked !== selected) return; // ignore double taps
              setPicked(i);
              window.setTimeout(() => onAnswer(i), CONFIG.timing.answerFeedback);
            }}
          >
            <img className="tile-icon" src={answerIcon(a.icon)} alt="" width={26} height={26} />
            <span className="tile-label">{a.label}</span>
          </button>
        ))}
      </div>
      <button className="back-link" onClick={onBack}>
        <img src="/figma/chevron-back.svg" alt="" width={12} height={12} />
        Back
      </button>
    </div>
  );
}
