const s = { strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const HeartIcon = () => (
  <svg className="focus-icon" viewBox="0 0 28 28" fill="none" {...s}>
    <path d="M14 23S5 17.5 5 11a4.9 4.9 0 0 1 9-2.7A4.9 4.9 0 0 1 23 11c0 6.5-9 12-9 12z" />
  </svg>
);

export const SunIcon = () => (
  <svg className="focus-icon" viewBox="0 0 28 28" fill="none" {...s}>
    <circle cx="14" cy="14" r="5" />
    <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6 6l2 2M20 20l2 2M22 6l-2 2M8 20l-2 2" />
  </svg>
);

export const CycleIcon = () => (
  <svg className="focus-icon" viewBox="0 0 28 28" fill="none" {...s}>
    <path d="M5 14C5 9 9 5 14 5c3.6 0 6.8 2 8.4 5" />
    <path d="M23 14c0 5-4 9-9 9-3.6 0-6.8-2-8.4-5" />
    <polyline points="19.5,7 22.4,10 20,13" />
    <polyline points="8.5,21 5.6,18 8,15" />
  </svg>
);

export const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H15v-5h-6v5H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

export const ShareIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

export const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24">
    <path d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
  </svg>
);
