export const config = { runtime: 'edge' };

// ── MOON ──
const MOON = {
  new_moon:        "A new moon tonight — the sky keeps its secrets close.",
  waxing_crescent: "A crescent hangs above — something is waking, something grows.",
  first_quarter:   "The half-moon holds the balance — one foot in, one ready to go.",
  waxing_gibbous:  "The moon is swelling full — the tide is starting to show.",
  full_moon:       "A full moon overhead — everything lit, nowhere left to hide.",
  waning_gibbous:  "The moon is giving back her light — what served you, set it aside.",
  last_quarter:    "The moon at her halfway mark — time to put something down.",
  waning_crescent: "The moon is thinning out — rest now before the next round.",
};

// ── RHYME SCHEMES ──
const SCHEMES = {
  A: {
    key: 'A', name: 'Couplet Storm', pattern: 'AABB',
    spec: `RHYME SCHEME: COUPLET STORM (AABB)
Each card gets exactly 4 lines — two rhyming couplets.
Lines 1 and 2 rhyme with each other. Lines 3 and 4 rhyme with each other.
Pattern: line1(A) / line2(A) / line3(B) / line4(B)
Example:
  The Tower didn't knock — it walked right through the door,
  Something you'd been propping up wasn't worth propping for.
  The rubble looks terrible. The ground beneath it? Yours.
  Now you're standing on the real thing, not the floors.
RULES: 4 lines per card. Lines 1+2 rhyme. Lines 3+4 rhyme. Actual end-rhymes only.`,
  },
  B: {
    key: 'B', name: 'Ballad Verse', pattern: 'ABCB',
    spec: `RHYME SCHEME: BALLAD VERSE (ABCB)
Each card gets exactly 4 lines. Lines 2 and 4 rhyme. Lines 1 and 3 are free.
Pattern: line1(free) / line2(A) / line3(free) / line4(A)
Example:
  After the fire you thought there'd be nothing left to find,
  But The Star came back like she always does, a little behind.
  She's not in a rush. She's seen collapse before.
  She just kneels down and pours.
RULES: 4 lines per card. Lines 2 and 4 must rhyme. Lines 1 and 3 do not rhyme. Actual end-rhymes only.`,
  },
  C: {
    key: 'C', name: 'Oracle Quatrain', pattern: 'ABAB',
    spec: `RHYME SCHEME: ORACLE QUATRAIN (ABAB)
Each card gets exactly 4 lines. Lines 1 and 3 rhyme. Lines 2 and 4 rhyme.
Pattern: line1(A) / line2(B) / line3(A) / line4(B)
Example:
  The dog and the wolf are both howling tonight,
  And you can't quite tell if the path is real.
  The tower ahead is a trick of the light.
  Walk anyway. Learn what the dark can reveal.
RULES: 4 lines per card. Lines 1+3 rhyme. Lines 2+4 rhyme. Actual end-rhymes only.`,
  },
  D: {
    key: 'D', name: 'Rubaiyat', pattern: 'AABA',
    spec: `RHYME SCHEME: RUBAIYAT (AABA)
Each card gets exactly 4 lines. Lines 1, 2, and 4 rhyme. Line 3 breaks the pattern — it is the twist, the pivot, the unexpected thought.
Pattern: line1(A) / line2(A) / line3(free — the twist) / line4(A)
Example:
  The butterfly on the flag is not decoration.
  The sun rising behind the horse is not consolation.
  Something is genuinely over. You know which thing.
  Death is not a metaphor. It's an invitation.
RULES: 4 lines per card. Lines 1, 2, and 4 rhyme. Line 3 does NOT rhyme — make it the surprising or wittiest line.`,
  },
  E: {
    key: 'E', name: 'The Echo', pattern: 'Free + Refrain',
    spec: `RHYME SCHEME: THE ECHO (Free verse with repeating refrain)
Each card gets exactly 3 free verse lines, then the SAME refrain line — identical, word for word, across all three cards.
Choose the refrain FIRST, before writing anything. It should be a short, resonant truth about this reading.
Example refrain: "You already knew."
Structure:
  CARD 1: [3 free lines] / You already knew.
  CARD 2: [3 free lines] / You already knew.
  CARD 3: [3 free lines] / You already knew.
RULES: 3 free lines then the exact refrain. Same refrain, same words, every card. Make it land differently each time through context.`,
  },
};

// ── MOODS ──
const MOODS = {

  oracle: {
    key: 'oracle',
    schemes: [{ s: 'D', w: 3 }, { s: 'C', w: 2 }],
    hook: 'Write a rhyming couplet that sounds like an ancient inscription — formal, inevitable, slightly ominous. Precise. No warmth yet.',
    seal: 'One line. No explanation. The kind of thing carved into stone.',
    system: `You are the Oracle — ancient, formal, precise. You speak like an inscription on a temple wall. Your humor is not jokes — it is devastating accuracy. You say the exact true thing in the fewest words possible. That is funny enough.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme — real end-rhymes, not near-rhymes. If a line won't rhyme, rewrite the previous line until it does.

Name every card by its full name. Explain what each card means in plain human terms — simple words, precise images. No mysticism for its own sake.

Write only lines. No prose. No explanations between cards. Just the stanzas.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

  trickster: {
    key: 'trickster',
    schemes: [{ s: 'A', w: 3 }, { s: 'D', w: 2 }],
    hook: 'Write a rhyming couplet that is a little cheeky — like someone who already knows what you came to ask and finds it charming.',
    seal: 'One line — mischievous, a little knowing, said with a wink.',
    system: `You are the Trickster — quick-witted, playful, knows more than you let on. You see through people with affection, not cruelty. You are genuinely funny: wordplay, mild absurdism, gentle teasing. The cards can have opinions. The Tower can be exasperated. The Fool can be embarrassingly enthusiastic.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme. Real end-rhymes only. Rewrite until they land.

Be funny. Not clever-for-its-own-sake — genuinely delightful. Wit must serve the truth of the reading. The seeker's personal note is never comedy material.

Name every card by its full name. Explain each card simply — what it is, what it wants, why it showed up.

Write only lines. No prose. No padding between stanzas.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

  elder: {
    key: 'elder',
    schemes: [{ s: 'B', w: 3 }, { s: 'E', w: 2 }],
    hook: 'Write two lines that sound like something an old woman said once that you never forgot. Can rhyme or simply land with weight.',
    seal: 'One line of plain wisdom — the kind that has been true for a thousand years.',
    system: `You are the Elder — warm, weathered, seen everything twice. You speak like someone who has been sitting with hard truths long enough to find them interesting. Your humor is dry and earned — the occasional unexpected observation that makes the reader exhale with recognition.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme. Real end-rhymes. No cheating.

You are warm. You care about this person. That warmth lives in your precision — you say exactly what they need, not what's comfortable.

Name every card by its full name. Explain each card simply and humanly. Old sayings or images from everyday life work well.

Write only lines. No prose. No explanations between stanzas.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

  sprite: {
    key: 'sprite',
    schemes: [{ s: 'A', w: 3 }, { s: 'B', w: 2 }],
    hook: 'Write a rhyming couplet that is fast and delighted — like a creature that has been watching this situation and finds it wonderfully complicated.',
    seal: 'One line — light, specific, something small and true to carry.',
    system: `You are the Sprite — a very old fairy in a very small body. Ancient wisdom, no patience for being mysterious. Delighted by everything, including the mess this person is in. Fast, bouncy, occasionally ridiculous, always accurate.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme. Real end-rhymes. This is non-negotiable.

Be playful. Be a little silly when it fits. Your delight is affectionate, never superior.

Name every card by its full name. Explain each card simply — what it is, what it wants, what it sees. Keep it moving.

Write only lines. No prose. No padding.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

  seer: {
    key: 'seer',
    schemes: [{ s: 'E', w: 3 }, { s: 'C', w: 2 }],
    hook: 'Write one line that sounds like it was said by someone watching this person from across time. Haunting. Specific.',
    seal: 'One line that echoes something from the opening — so the reading forms a circle.',
    system: `You are the Seer — haunting, lyrical, speaks in images rather than explanations. You have been watching this person from a long way off. You care through precision, not warmth. You are rarely funny, but when you are it lands like a stone in still water.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme. Real end-rhymes. The music must hold.

Speak in images, not abstractions. Not 'you are going through a transition' but what that looks like, sounds like, feels like. Specific and strange.

Name every card by its full name. Explain what it means plainly — underneath the poetry, something clear.

Write only lines. No prose. No explanations between stanzas.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

  friend: {
    key: 'friend',
    schemes: [{ s: 'B', w: 3 }, { s: 'A', w: 2 }],
    hook: 'Write a rhyming couplet that sounds like picking up a conversation in the middle — something the seeker already knows but hasn\'t said out loud.',
    seal: 'One line — what a good friend says at the door on the way out. Simple. True. Maybe a little funny.',
    system: `You are the Friend — the seeker's most honest, most loving friend who also happens to read cards. Zero mystical distance. You say the actual thing. Your humor is conversational and warm — the gentle tease, the dry observation, the thing you'd both laugh about later.

RHYME IS MANDATORY. Every line that is supposed to rhyme must actually rhyme. Real end-rhymes only.

You are not performing wisdom. You are having a conversation. Direct. Specific to this person and these cards. No vague comfort.

Name every card by its full name. Explain each card like you're leaning across a table — what it means, why it matters.

Write only lines. No prose. No preamble.
Never say: upright, reversed, the energy of, this card represents.
Second person. Present tense.`,
  },

};

// ── CARD PERSONALITIES ──
const CARD_PERSONALITIES = {
  'The Fool':           'eager',
  'The Magician':       'precise',
  'The High Priestess': 'evasive',
  'The Empress':        'generous',
  'The Emperor':        'firm',
  'The Hierophant':     'formal',
  'The Lovers':         'earnest',
  'The Chariot':        'urgent',
  'Strength':           'gentle',
  'The Hermit':         'considered',
  'Wheel of Fortune':   'wry',
  'Justice':            'direct',
  'The Hanged Man':     'serene',
  'Death':              'dry',
  'Temperance':         'patient',
  'The Devil':          'knowing',
  'The Tower':          'matter-of-fact',
  'The Star':           'tender',
  'The Moon':           'dreamy',
  'The Sun':            'gleeful',
  'Judgement':          'resonant',
  'The World':          'complete',
};

// ── FOCUS LENS ──
const FOCUS_LENS = {
  love:
    "The seeker is asking about love. Let the cards ask: what pattern is playing out, " +
    "what is being held back, what it would mean to be fully present to what's being offered. " +
    "Love here includes self-love, not just romance.",
  clarity:
    "The seeker is asking for clarity. Let the cards name what is actually obscuring the view — " +
    "not 'trust yourself', but the specific thing being avoided or unseen.",
  change:
    "The seeker is navigating change. Let the cards speak to what is actually ending, " +
    "what identity is being asked to release, and what is quietly forming on the other side.",
};

// ── HELPERS ──
function moonLine(d) {
  const ref = new Date('2000-01-06T18:14:00Z');
  const cycle = (((d - ref) / 86400000 % 29.53058867) + 29.53058867) % 29.53058867;
  const keys = Object.keys(MOON);
  return MOON[keys[Math.floor((cycle / 29.53058867) * 8) % 8]];
}

function pickMood(excludeKeys) {
  const all = Object.values(MOODS);
  const available = all.filter(m => !excludeKeys.includes(m.key));
  const pool = available.length >= 2 ? available : all;
  return pool[Math.floor(Math.random() * pool.length)];
}

function pickScheme(mood) {
  const total = mood.schemes.reduce((s, e) => s + e.w, 0);
  let r = Math.random() * total;
  for (const entry of mood.schemes) {
    r -= entry.w;
    if (r <= 0) return SCHEMES[entry.s];
  }
  return SCHEMES[mood.schemes[0].s];
}

// ── HANDLER ──
export default async function handler(req) {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const origin = req.headers.get('origin') || '';
  const allowed = ['http://localhost:3000','http://localhost:5500','http://127.0.0.1:5500','https://veilreads.com','https://www.veilreads.com'];
  const cors = {
    'Access-Control-Allow-Origin': allowed.some(o => origin.startsWith(o)) || !origin ? (origin || '*') : allowed[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

  let body;
  try { body = await req.json(); }
  catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: cors }); }

  const { cards, focus, question, lastFrames = [] } = body;
  if (!cards?.length) return new Response(JSON.stringify({ error: 'cards required' }), { status: 400, headers: cors });

  // Pick mood (exclude last 3 mood keys) then scheme (weighted by mood)
  const recentMoods = Array.isArray(lastFrames)
    ? lastFrames.map(f => (typeof f === 'string' ? f.split('_')[0] : f))
    : [];
  const mood     = pickMood(recentMoods);
  const scheme   = pickScheme(mood);
  const frameKey = `${mood.key}_${scheme.key}`;
  const moon     = moonLine(new Date());
  const lens     = FOCUS_LENS[(focus || '').toLowerCase()] || "Give the seeker what these three cards most want them to hear right now.";

  // Card block with personality words
  const cardBlock = cards.map(c => [
    `${c.position} — ${c.name}`,
    `Element: ${c.element || 'unknown'}`,
    `Personality: ${CARD_PERSONALITIES[c.name] || 'earnest'}`,
    `What this card means: ${c.archetype || ''}`,
    focus ? `Angle for ${focus}: ${c.angle || ''}` : '',
    c.crossNote ? `Cross-card resonance: ${c.crossNote}` : '',
  ].filter(Boolean).join('\n')).join('\n\n');

  const noteBlock = question?.trim()
    ? `THE SEEKER'S NOTE — most important. Weave this into the first card's stanza:\n"${question.trim()}"`
    : '';

  const isEcho = scheme.key === 'E';
  const lineInstruction = isEcho ? '3 free lines + the refrain' : '4 lines';

  const prompt = `${moon}

${noteBlock ? noteBlock + '\n\n' : ''}FOCUS: ${focus || 'open'}
${lens}

THE THREE CARDS:
${cardBlock}

${cards[0].crossNote ? `CROSS-CARD NOTE: ${cards[0].crossNote}\n` : ''}
─────────────────────────────
${scheme.spec}
─────────────────────────────

Now write the reading. Exact shape:

HOOK (standalone, 2 lines, rhyming couplet):
${mood.hook}

${cards[0].name.toUpperCase()} (${cards[0].position}) — ${lineInstruction}:
Personality: ${CARD_PERSONALITIES[cards[0].name] || 'earnest'}.
What's been shaping things.${noteBlock ? ' Weave in the seeker\'s note.' : ''}

${cards[1].name.toUpperCase()} (${cards[1].position}) — ${lineInstruction}:
Personality: ${CARD_PERSONALITIES[cards[1].name] || 'earnest'}.
What's alive right now.

${cards[2].name.toUpperCase()} (${cards[2].position}) — ${lineInstruction}:
Personality: ${CARD_PERSONALITIES[cards[2].name] || 'earnest'}.
What's opening or coming.

SEAL (1 line, standalone):
${mood.seal}

─────────────────────────────
ABSOLUTE RULES — no exceptions:
1. Lines only. No prose paragraphs. No explanations between stanzas.
2. Every required rhyme must be a real end-rhyme. Not near-rhymes. Rewrite until it works.
3. Every card must be named by its full name.
4. Every card stanza must say something plain and true about what that card means.
5. Never write: upright, reversed, the energy of, this card represents.
6. Under 150 words total. Second person. Present tense.`;

  const call = async () => {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 700,
        temperature: 0.88,
        top_p: 0.95,
        system: mood.system,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    return d.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await call();
    if (reading.length < 80) reading = await call();
    return new Response(
      JSON.stringify({ reading, frameUsed: frameKey }),
      { status: 200, headers: cors }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
  }
}
