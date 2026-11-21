import type { DrawnCard } from '../data/types';
import { cardImage } from '../components/Logo';

/** Port of the live 1080×1620 "fan spread" share image. */
export async function shareReading(drawn: DrawnCard[]) {
  const W = 1080, H = 1620;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const G = 'rgba(158,118,44,';

  const bg = ctx.createRadialGradient(W / 2, H * 0.08, 0, W / 2, H * 0.55, H);
  bg.addColorStop(0, '#f7eee0'); bg.addColorStop(0.5, '#f0e5d2'); bg.addColorStop(1, '#e5d7c0');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, W * 0.9);
  glow.addColorStop(0, 'rgba(195,155,55,.13)'); glow.addColorStop(1, 'rgba(195,155,55,0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H * 0.55);

  await document.fonts.ready;
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(125,85,18,.92)';
  ctx.font = '600 60px Cinzel, Georgia, serif';
  ctx.fillText('VEILREADS', W / 2, 97);

  // celestial arc
  const arcCY = 620, apexY = arcCY - 390;
  ctx.strokeStyle = G + '.16)'; ctx.lineWidth = 1.6;
  for (const r of [390, 352]) { ctx.beginPath(); ctx.arc(W / 2, arcCY, r, Math.PI, 0); ctx.stroke(); }
  ctx.strokeStyle = G + '.44)';
  for (const r of [16, 6]) { ctx.beginPath(); ctx.arc(W / 2, apexY, r, 0, Math.PI * 2); ctx.stroke(); }

  const cW = 272, cH = 455, cR = 14, CCX = W / 2, CCY = 440, ANG = (18 * Math.PI) / 180;
  const rr = (x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
  };
  const load = (src: string) => new Promise<HTMLImageElement | null>((res) => {
    const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src;
  });
  const drawCard = (img: HTMLImageElement | null, cx: number, cy: number, angle: number, center: boolean, rev: boolean) => {
    const hw = cW / 2, hh = cH / 2;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(angle);
    ctx.save(); ctx.shadowColor = 'rgba(30,18,4,.26)'; ctx.shadowBlur = center ? 55 : 36; ctx.shadowOffsetY = center ? 18 : 12;
    ctx.fillStyle = '#f5ead6'; rr(-hw, -hh, cW, cH, cR); ctx.fill(); ctx.restore();
    ctx.save(); rr(-hw, -hh, cW, cH, cR); ctx.clip();
    if (img) { if (rev) ctx.rotate(Math.PI); ctx.drawImage(img, -hw, -hh, cW, cH); }
    ctx.restore();
    ctx.strokeStyle = center ? 'rgba(190,150,55,.72)' : G + '.4)'; ctx.lineWidth = center ? 2.8 : 1.8;
    rr(-hw, -hh, cW, cH, cR); ctx.stroke();
    ctx.restore();
  };

  const imgs = await Promise.all(drawn.map((c) => load(cardImage(c.slug))));
  drawCard(imgs[0], CCX - 275, CCY + 30, ANG, false, drawn[0].rev);
  drawCard(imgs[2], CCX + 275, CCY + 30, -ANG, false, drawn[2].rev);
  drawCard(imgs[1], CCX, CCY, 0, true, drawn[1].rev);

  const tagY = 1020;
  ctx.fillStyle = 'rgba(32,18,4,.86)'; ctx.font = '500 63px "Libre Baskerville", Georgia, serif';
  ctx.fillText('Three cards. One story.', W / 2, tagY);
  ctx.fillStyle = G + '.7)'; ctx.beginPath(); ctx.arc(W / 2, tagY + 36, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(125,88,20,.6)'; ctx.font = '400 27px Cinzel, Georgia, serif';
  ctx.fillText('VEILREADS.COM', W / 2, tagY + 96);
  ctx.fillStyle = 'rgba(80,52,14,.78)'; ctx.font = '400 34px Cinzel, Georgia, serif';
  ctx.fillText(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), W / 2, tagY + 172);

  // bottom ornament: crescent · crosshair · eye
  const barY = 1510, moonX = W / 2 - 342, eyeX = W / 2 + 342;
  ctx.strokeStyle = G + '.26)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(moonX + 52, barY); ctx.lineTo(eyeX - 52, barY); ctx.stroke();
  ctx.fillStyle = 'rgba(125,88,20,.72)'; ctx.beginPath(); ctx.arc(moonX, barY, 30, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#e4d6be'; ctx.beginPath(); ctx.arc(moonX + 13, barY - 5, 23, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = G + '.48)'; ctx.lineWidth = 1.8;
  for (const r of [24, 9]) { ctx.beginPath(); ctx.arc(W / 2, barY, r, 0, Math.PI * 2); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(125,88,20,.68)'; ctx.lineWidth = 2.2; ctx.beginPath();
  ctx.moveTo(eyeX - 35, barY); ctx.quadraticCurveTo(eyeX, barY - 25, eyeX + 35, barY); ctx.quadraticCurveTo(eyeX, barY + 25, eyeX - 35, barY); ctx.stroke();
  ctx.fillStyle = 'rgba(125,88,20,.7)'; ctx.beginPath(); ctx.arc(eyeX, barY, 11, 0, Math.PI * 2); ctx.fill();

  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png', 0.95));
  if (!blob) return;
  const file = new File([blob], 'veil-reading.png', { type: 'image/png' });
  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({ files: [file], title: 'My Veil Reads reading', text: 'Three cards. One story.' }).catch(() => {});
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'veil-reading.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
}
