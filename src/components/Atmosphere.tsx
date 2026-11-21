import { useEffect, useRef } from 'react';

/** Background glow, twinkling star canvas and animated grain — as on the live site. */
export function Atmosphere() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext('2d')!;
    let W = 0, H = 0, raf = 0;
    let stars: { x: number; y: number; r: number; a: number; da: number }[] = [];
    const init = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
      stars = Array.from({ length: 140 }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.1 + 0.2,
        a: Math.random(), da: (Math.random() - 0.5) * 0.003,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        s.a = Math.max(0.05, Math.min(1, s.a + s.da));
        if (Math.random() < 0.002) s.da *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    init();
    draw();
    window.addEventListener('resize', init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init); };
  }, []);

  return (
    <>
      <div className="bg" />
      <canvas className="stars" ref={ref} />
      <div className="grain" />
      <img className="glow" src="/figma/glow.svg" alt="" width={1300} height={560} />
    </>
  );
}
