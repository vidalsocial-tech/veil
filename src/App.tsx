import { useMemo, useState, type ReactNode } from 'react';
import type { DrawnCard, Focus } from './data/types';
import { currentPhase } from './data/moon';
import { Atmosphere } from './components/Atmosphere';
import { Landing } from './screens/Landing';
import { FocusScreen } from './screens/FocusScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { Preparation, Shuffle } from './screens/Ritual';
import { Draw } from './screens/Draw';
import { Reading } from './screens/Reading';
import { Library } from './screens/Library';
import { CardDetail } from './screens/CardDetail';
import { drawThree } from './reading/logic';
import { stanzaFor } from './reading/compose';
import { shareReading } from './reading/share';

type ScreenId = 'landing' | 'focus' | 'question' | 'prep' | 'shuffle' | 'draw' | 'reading' | 'library' | 'detail';

/** Progress dots lit per screen (0 hides them). The reading has its own segmented bar. */
const DOTS: Record<ScreenId, number> = {
  landing: 1, focus: 1, question: 1, prep: 2, shuffle: 3, draw: 4, reading: 0, library: 0, detail: 0,
};

export default function App() {
  const [screen, setScreen] = useState<ScreenId>('landing');
  const [exiting, setExiting] = useState<ScreenId | null>(null);
  const [focus, setFocus] = useState<Focus | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [detailIndex, setDetailIndex] = useState(0);
  const phase = useMemo(() => currentPhase(), []);

  const goTo = (next: ScreenId) => {
    setScreen((prev) => {
      if (prev !== next) {
        setExiting(prev);
        window.setTimeout(() => setExiting((e) => (e === prev ? null : e)), 600);
      }
      return next;
    });
  };

  const stanzas = useMemo(
    () => (focus && answers.length === 3 ? cards.map((c) => stanzaFor(c, focus, answers)) : []),
    [cards, focus, answers],
  );

  // ── flow ──
  const startRitual = () => {
    setCards(drawThree()); // drawn after the intention is set
    goTo('prep'); // Preparation moves on to the shuffle when its moon cycle finishes
  };

  const onAnswer = (i: number) => {
    const next = [...answers.slice(0, step), i];
    setAnswers(next);
    if (step < 2) setStep(step + 1);
    else startRitual();
  };

  const onBack = () => {
    if (step === 0) goTo('focus');
    else setStep(step - 1);
  };

  const onReshuffle = () => {
    // Same intention, fresh cards (Figma: Reshuffle → P05a shuffle).
    setCards(drawThree());
    goTo('shuffle');
  };

  const goHome = () => {
    setFocus(null);
    setStep(0);
    setAnswers([]);
    goTo('landing');
  };

  const screenEl = (id: ScreenId, className: string, children: ReactNode) => (
    <div
      className={`screen ${className}${screen === id ? ' active' : ''}${exiting === id ? ' exit' : ''}`}
      aria-hidden={screen !== id}
    >
      {(screen === id || exiting === id) && children}
    </div>
  );

  const dots = DOTS[screen];

  return (
    <>
      <Atmosphere />
      <button className={`home-btn${screen !== 'landing' ? ' visible' : ''}`} onClick={goHome} aria-label="Home">
        <img src="/figma/icon-home.svg" alt="" width={16} height={16} />
      </button>

      {screenEl('landing', 's-landing', <Landing onBegin={() => goTo('focus')} onExplore={() => goTo('library')} />)}
      {screenEl('focus', 's-focus',
        <FocusScreen
          focus={focus}
          onFocus={(f) => { if (f !== focus) { setFocus(f); setAnswers([]); } }}
          onContinue={() => { setStep(0); goTo('question'); }}
        />)}
      {screenEl('question', 's-question', focus &&
        <QuestionScreen focus={focus} step={step} selected={answers[step]} onAnswer={onAnswer} onBack={onBack} />)}
      {screenEl('prep', 's-prep', <Preparation active={screen === 'prep'} onDone={() => goTo('shuffle')} />)}
      {screenEl('shuffle', 's-shuffle', <Shuffle active={screen === 'shuffle'} onDone={() => goTo('draw')} />)}
      {screenEl('draw', 's-draw', <Draw cards={cards} onAllRevealed={() => goTo('reading')} />)}
      {screenEl('reading', 's-reading', focus &&
        <Reading
          cards={cards} focus={focus} answers={answers} stanzas={stanzas} phase={phase}
          onReshuffle={onReshuffle}
          onShare={() => void shareReading(cards)}
        />)}
      {screenEl('library', 's-library',
        <Library active={screen === 'library'} onBegin={() => goTo('focus')}
          onOpenCard={(i) => { setDetailIndex(i); goTo('detail'); }} />)}
      {screenEl('detail', 's-detail',
        <CardDetail index={detailIndex} onIndex={setDetailIndex} onBack={() => goTo('library')} onBegin={() => goTo('focus')} />)}

      <div className="dots" style={{ opacity: dots ? 1 : 0 }} aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className={`dot${i < dots ? ' on' : ''}`} />)}
      </div>
    </>
  );
}
