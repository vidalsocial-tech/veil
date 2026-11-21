# VeilReads

Prototype rebuild of [veilreads.com](https://veilreads.com), a daily three-card tarot reading ("Three cards. One story."), following the **Figma prototype "Exp - VeilReads"**.

## Run it

```bash
npm install
npm run dev          # http://localhost:5175 (also on your network IP)
```

Everything is hand-written in Figma and needs no API key. (`server/` still holds an optional Claude endpoint from an earlier design; the app no longer calls it.)

## The flow (Figma frame names)

1. **P01 Home**: tonight's moon, Begin / Explore.
2. **P02–P03 Focus**: Love · Clarity · Change.
3. **PQ ×3**: three questions for that focus (`Love · 1 of 3`…), with Back.
4. **P04 Prep**: tonight's moon phase pulses, then
5. **P05–P06 Shuffle**, followed by
6. **P07 Draw**: tap each card to reveal it.
7. **PR1–PR6 Reading**: a stack of six pages you swipe, tap, arrow-key or click through:
   - Your cards
   - Where you are
   - Card I
   - Card II
   - Card III
   - Tonight's moon: the closing slide, chosen by tonight's phase × the spread's odd/even/court pattern × how many cards are reversed (8 × 10 × 4 = 320 endings), with Reshuffle.

Each card's four-line stanza comes from the Figma **Readings** pages. Line 1 is picked by card × orientation × focus, and lines 2–4 by your three answers. That's 4,680 lines in `src/data/stanzas.json`.

## Where to tweak things

| Want to change… | Edit |
|---|---|
| Colours, fonts, radii, shadows | `src/styles/tokens.css` |
| Layout and styling of any screen | `src/styles/app.css` |
| Questions, answers, "Where you are" sentences | `src/data/questions.ts` |
| Card subtitles ("Upright · what's arriving"), copy, timings, reversal rate | `src/config.ts` |
| Stanza text | `src/data/stanzas.json` (regenerate from Figma, see below) |
| Closing moon slide copy (pattern lines, reversal lines) | `src/data/moonClosing.json` |
| How a spread is classified (odd / even / court, The Fool) | `src/data/moonReading.ts`, `CONFIG.foolGroup` |
| Flow and screen order | `src/App.tsx` |

Figma assets (moon phases, answer icons, chevrons, glow) are in `public/figma/`.

## Not in Figma yet, so drafted here (marked in code)

- The "Where you are" sentence for each answer. Figma shows only the three love sentences: Taken, Unsure, Their side.
- "You came here for clarity / change."
- Card subtitles for Root·upright, Now·reversed and Path·reversed.

## Publish (veilreads.com)

veilreads.com is a Vercel project that deploys the GitHub repo `vidalsocial-tech/veil`:

- A push to any **other branch** gets a private Vercel **preview** URL. The live site doesn't change.
- A merge or push to **`main`** goes **live** on veilreads.com.
- To roll back, go to Vercel → Deployments, pick an earlier one, and choose **Promote to Production**.

`vercel.json` tells Vercel to run `npm ci && npm run build` and serve `dist/`, with every path falling back to `index.html`. The app is fully static, so it needs no API key.

Carried over from the old site: Google Analytics (`G-DVEBR4RVF5`), the AdSense loader, `public/ads.txt` and `public/privacy.html` (linked top-right on Home). Link previews use `https://veilreads.com/og-image.png`. Override with `SITE_URL=… npm run build`.

`server/` holds an older optional Claude endpoint that the app doesn't call, and it isn't deployed.
