/**
 * Prompt for "The heart of it" — the closing slide of a reading.
 *
 * In the new flow the per-card stanzas are hand-written (src/data/stanzas.json,
 * from the Figma "Readings" pages). The AI writes only the closing: four lines
 * that gather the three stanzas into one image. Tune freely.
 */

export type Focus = 'love' | 'clarity' | 'change';

export interface HeartCard {
  name: string;
  position: string;
  element: string;
  reversed: boolean;
  stanza: string[];
}

export interface HeartRequest {
  focus: Focus;
  answers: { question: string; answer: string }[];
  cards: HeartCard[];
  lastFrames: string[];
}

export const SYSTEM_PROMPT = `You write the closing lines of a Veil Reads tarot reading.

The person has already read three short stanzas — one per card — written for what they told you. Your job is the last page, "The heart of it": four lines that gather those stanzas into one feeling they can carry out the door.

How it should sound (this is the house style):
"So turn the wick up. Let the room be seen.
You do not have to earn the warmth to stay.
A kettle on the stove, the window clean,
two cups set out, the curtains drawn away."

Rules:
- Exactly four lines, one per line, nothing else. No title, no quotation marks, no sign-off.
- Second person, present tense. Warm, plain, concrete. The last two lines should be a small, ordinary, physical image.
- Do not name the cards, the positions, the moon, or tarot. Do not predict events.
- Each line under 70 characters. Light rhythm is good; forced rhyme is not.`;

const FOCUS_HINT: Record<Focus, string> = {
  love: 'They came for love — any kind of love, including how they love themselves.',
  clarity: 'They came for clarity — seeing something plainly, without being told to "trust yourself".',
  change: 'They came for change — something ending, something forming.',
};

const FRAMES: Record<string, string> = {
  tender: 'Let it feel like someone on their side.',
  plainspoken: 'Keep it very plain — kitchen-table words.',
  quiet: 'Keep it soft and slow.',
  bright: 'Let a little light and lift in.',
  steady: 'Let it feel grounded and calm.',
  brave: 'Let it carry a little courage.',
};

const pick = <T,>(a: readonly T[]): T => a[Math.floor(Math.random() * a.length)];

export function buildUserPrompt(req: HeartRequest): { prompt: string; frame: string } {
  const recent = new Set(req.lastFrames);
  const keys = Object.keys(FRAMES).filter((k) => !recent.has(k));
  const frame = pick(keys.length ? keys : Object.keys(FRAMES));
  const cards = req.cards
    .map((c) => `${c.position} — ${c.name}${c.reversed ? ' (reversed)' : ''}, ${c.element}:\n${c.stanza.join('\n')}`)
    .join('\n\n');
  const prompt = [
    FOCUS_HINT[req.focus],
    `What they told us:\n${req.answers.map((a) => `- ${a.question} ${a.answer}`).join('\n')}`,
    `The three stanzas they just read:\n\n${cards}`,
    `Tone for this one: ${FRAMES[frame]}`,
    'Write the four lines.',
  ].join('\n\n');
  return { prompt, frame };
}

const FOCI: Focus[] = ['love', 'clarity', 'change'];
const str = (v: unknown, n: number) => (typeof v === 'string' ? v.slice(0, n) : '');

/** Validates and normalises an untrusted request body. Returns null if unusable. */
export function parseRequest(body: unknown): HeartRequest | null {
  if (!body || typeof body !== 'object') return null;
  const b = body as Record<string, unknown>;
  if (!FOCI.includes(b.focus as Focus)) return null;
  if (!Array.isArray(b.cards) || b.cards.length !== 3) return null;
  const cards = b.cards.map((raw): HeartCard => {
    const c = (raw ?? {}) as Record<string, unknown>;
    return {
      name: str(c.name, 60),
      position: str(c.position, 30),
      element: str(c.element, 10),
      reversed: c.reversed === true,
      stanza: Array.isArray(c.stanza) ? c.stanza.slice(0, 4).map((l) => str(l, 200)) : [],
    };
  });
  if (cards.some((c) => !c.name || c.stanza.length === 0)) return null;
  const answers = Array.isArray(b.answers)
    ? b.answers.slice(0, 3).map((a) => {
        const o = (a ?? {}) as Record<string, unknown>;
        return { question: str(o.question, 80), answer: str(o.answer, 40) };
      })
    : [];
  const lastFrames = Array.isArray(b.lastFrames)
    ? b.lastFrames.filter((x): x is string => typeof x === 'string').slice(0, 3)
    : [];
  return { focus: b.focus as Focus, answers, cards, lastFrames };
}
