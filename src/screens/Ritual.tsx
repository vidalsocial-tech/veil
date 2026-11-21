import { useEffect, useMemo, useRef, useState } from 'react';
import { CONFIG } from '../config';
import { shuffle } from '../reading/logic';
import { LiveMoon, type LiveMoonHandle } from '../components/LiveMoon';
import { PHASES, phaseIndex } from '../data/moon';
import { cubicBezier } from '../lib/ease';

/**
 * Figma P04a → P04b, extended: the moon is drawn live and makes one full,
 * continuous turn through every phase, easing back to rest on tonight's. Once it lands the
 * caption fades in and the moon breathes (the Figma "moon pulse").
 * Calls onDone when the whole sequence (glide + hold) has played.
 */
export function Preparation({ active, onDone }: { active: boolean; onDone: () => void }) {
  const landOn = useMemo(() => phaseIndex(), []);
  const target = landOn / 8;                      // the canonical shape for tonight's phase
  const [landed, setLanded] = useState(false);
  const moon = useRef<LiveMoonHandle>(null);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    if (!active) return;
    const { startDelay, duration, turns, easing, holdAfterLand } = CONFIG.timing.moonCycle;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const timers: number[] = [];

    if (reduce) {
      moon.current?.set(target);
      setLanded(true);
      timers.push(window.setTimeout(() => done.current(), holdAfterLand + 800));
      return () => timers.forEach(clearTimeout);
    }

    // Start on tonight's shape and turn exactly `turns` full cycles back to it,
    // so every phase passes once and the pace is the same whatever the date.
    const ease = cubicBezier(...easing);
    setLanded(false);
    moon.current?.set(target);
    let start = 0;
    const frame = (now: number) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / duration);
      moon.current?.set(target + ease(p) * turns);
      if (p < 1) raf = requestAnimationFrame(frame);
      else {
        setLanded(true);
        timers.push(window.setTimeout(() => done.current(), holdAfterLand));
      }
    };
    timers.push(window.setTimeout(() => { raf = requestAnimationFrame(frame); }, startDelay));
    return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout); };
  }, [active, target]);

  return (
    <div className={`prep${landed ? ' landed' : ''}`}>
      <img className="orb-halo" src="/figma/orb-halo.svg" alt="" />
      <div className="prep-moon">
        <LiveMoon ref={moon} initial={target} />
      </div>
      <div className="moon-caption" aria-live="polite">
        Tonight · {PHASES[landOn].label}
      </div>
      <div className="prep-title">{CONFIG.copy.prepTitle}</div>
      <p className="prep-sub">
        {CONFIG.copy.prepSub[0]}
        <br />
        {CONFIG.copy.prepSub[1]}
      </p>
    </div>
  );
}

const POS = [
  { x: -88, y: 0, r: -6 }, { x: -44, y: 6, r: -3 }, { x: 0, y: 10, r: 0 },
  { x: 44, y: 6, r: 3 }, { x: 88, y: 0, r: 6 },
];

/** Figma P05a–P06: deck, fan out, three shuffle beats, gather. */
export function Shuffle({ active, onDone }: { active: boolean; onDone: () => void }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    const cards = refs.current;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const place = (el: HTMLDivElement | null, ms: number, t: string) => {
      if (!el) return;
      el.style.transition = `transform ${ms}ms var(--ease-soft)`;
      el.style.transform = t;
    };
    const at = (p: { x: number; y: number; r: number }, jitter = 0) =>
      `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px)) rotate(${p.r + jitter}deg)`;

    cards.forEach((c) => { if (c) { c.style.transition = 'none'; c.style.transform = 'translate(-50%,-50%)'; } });
    if (!active) return;

    cards.forEach((c, i) => later(() => place(c, 480, at(POS[i])), i * 70));
    let phase = 0;
    const doShuffle = () => {
      phase++;
      const order = shuffle([0, 1, 2, 3, 4]);
      cards.forEach((c, i) =>
        later(() => place(c, 280 + Math.random() * 180, at(POS[order[i]], (Math.random() - 0.5) * 10)), i * 55),
      );
      if (phase < CONFIG.timing.shufflePhases) later(doShuffle, CONFIG.timing.shufflePhaseMs);
      else {
        later(() => cards.forEach((c, i) =>
          later(() => place(c, 380, `translate(-50%,-50%) translateX(${(i - 2) * 3}px) translateY(${Math.abs(i - 2) * -2}px)`), i * 50),
        ), 360);
        later(() => done.current(), 1300);
      }
    };
    later(doShuffle, CONFIG.timing.shuffleStartDelay);
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <>
      <div className="shuffle-deck">
        {POS.map((_, i) => (
          <div key={i} className="sh-card" ref={(el) => { refs.current[i] = el; }}>
            <img src="/figma/icon-star.svg" alt="" width={22} height={22} />
          </div>
        ))}
      </div>
      <div className="shuffle-label">{CONFIG.copy.shuffle}</div>
    </>
  );
}
