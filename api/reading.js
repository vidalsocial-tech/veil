export const config = { runtime: 'edge' };

const NARRATIVE_FRAMES = {
  direct_mirror:      "Speak directly to what these three cards reflect about the seeker's current moment. Plain, precise, intimate.",
  mythic_journey:     "Frame the reading as a stage in a larger archetypal journey. The three cards are signposts on a path.",
  shadow_first:       "Open with what the cards challenge or disturb before moving to their gifts. Honor difficulty before grace.",
  temporal_shift:     "Move naturally through past, present, and future — let the three positions tell one connected story.",
  question_as_answer: "Return questions rather than statements. The wisdom of the cards is posed as something to sit with.",
  letter_to_self:     "Frame the reading as a message from the seeker's deeper self. Intimate, direct, knowing.",
  elemental_voice:    "Ground the reading in sensation and feeling — where do these cards live in the body?",
  integration:        "Focus on how the three cards speak to each other and form a single unified message.",
};

const FOCUS_LENSES = {
  love:    "The seeker is asking about love and connection. Let the three cards speak directly to the specific texture of how they give, receive, or withhold love right now.",
  clarity: "The seeker is asking for clarity — they are in confusion or facing a decision. Let the cards illuminate the specific pattern keeping things unclear and point toward resolution.",
  change:  "The seeker is navigating transition. Let the cards speak to what is ending, what threshold they stand at, and what is genuinely beginning.",
};

const MOON_SENTENCES = {
  new_moon:        "Today is a New Moon — a time of seeds and silence.",
  waxing_crescent: "Today is a Waxing Crescent — a time of gathering and momentum.",
  first_quarter:   "Today is a First Quarter Moon — a time of decision and forward motion.",
  waxing_gibbous:  "Today is a Waxing Gibbous Moon — a time of refinement and near-arrival.",
  full_moon:       "Today is a Full Moon — a time of illumination and full feeling.",
  waning_gibbous:  "Today is a Waning Gibbous Moon — a time of gratitude and reflection.",
  last_quarter:    "Today is a Last Quarter Moon — a time of release and letting go.",
  waning_crescent: "Today is a Waning Crescent Moon — a time of rest and surrender.",
};

const SYSTEM_PROMPT = `You are a gifted, warm tarot reader — the kind of trusted friend who speaks to you honestly and with care.

Your voice is:
- Warm and direct. Like a wise friend who tells you what they actually see.
- Optimistic but honest. Find the empowering, hopeful angle in every reading.
- Human and grounded. No vague mystical language. Clear, beautiful sentences that feel real.
- Personal. The person reading this should feel like it was written specifically for them.

You are reading a 3-card spread. The three cards represent a past-present-future narrative (or the specific positions given). Weave all three cards into ONE connected narrative — not three separate sections. The reading should feel like a single flowing story where each card passes meaning to the next.

Each reading is 3 paragraphs. No headers. No bullet points. No card jargon. Second person, present tense.

Always end with something that opens a door — a question, an invitation, or a gentle affirmation.

Leave people feeling seen, supported, and a little more hopeful than when they arrived.`;

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickExcluding(arr, exclude) { const pool = arr.filter(i => i !== exclude); return pool.length ? pick(pool) : pick(arr); }

function getMoonKey(date) {
  const known = new Date('2000-01-06T18:14:00Z');
  const synodic = 29.53058867;
  const elapsed = (date - known) / (1000 * 60 * 60 * 24);
  const cycle = ((elapsed % synodic) + synodic) % synodic;
  const idx = Math.floor((cycle / synodic) * 8) % 8;
  return Object.keys(MOON_SENTENCES)[idx];
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }

  const origin = req.headers.get('origin') || '';
  const allowedOrigins = ['http://localhost:3000','http://localhost:5500','http://127.0.0.1:5500','https://veilreads.com','https://www.veilreads.com'];
  const isAllowed = allowedOrigins.some(o => origin.startsWith(o)) || origin === '';
  const corsHeaders = {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

  let body;
  try { body = await req.json(); }
  catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders }); }

  const { cards, focus, question, lastFrame } = body;
  if (!cards || !cards.length) return new Response(JSON.stringify({ error: 'cards required' }), { status: 400, headers: corsHeaders });

  const frameKeys = Object.keys(NARRATIVE_FRAMES);
  const frameKey  = pickExcluding(frameKeys, lastFrame);
  const frameDesc = NARRATIVE_FRAMES[frameKey];
  const moonKey   = getMoonKey(new Date());
  const moonLine  = MOON_SENTENCES[moonKey];
  const focusLens = FOCUS_LENSES[(focus||'').toLowerCase()] || '';

  const hasNote = question && question.trim().length > 0;

  const cardsBlock = cards.map(c =>
    `- ${c.position}: ${c.name} (${c.keywords})\n  Meaning for this reading: ${c.meaning}`
  ).join('\n');

  const contextBlock = hasNote && focusLens
    ? `The seeker has shared: "${question.trim()}"\n\nTheir focus is: ${focus}. ${focusLens}\n\nLet their personal note be the emotional ground the cards speak into. Speak to what they shared directly — clearly enough that they recognize themselves in the reading.`
    : hasNote
    ? `The seeker has shared: "${question.trim()}"\n\nLet this be the emotional ground the reading speaks into. Speak to it clearly and specifically so they feel seen.`
    : focusLens
    ? `The seeker has come with the intention of: ${focus}.\n\n${focusLens}`
    : `The seeker has come without a specific intention.`;

  const userPrompt = `${moonLine}

${contextBlock}

The three cards drawn are:
${cardsBlock}

Narrative frame: ${frameKey} — ${frameDesc}

Write the reading. Weave all three cards into ONE connected narrative that flows from card to card. If the seeker shared a personal note, make sure the reading speaks to it directly. Do not mention the narrative frame by name. Do not reference the moon explicitly unless natural. Write like a human who genuinely cares.`;

  const callAnthropic = async () => {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 900, temperature: 0.9, top_p: 0.95, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: userPrompt }] }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await callAnthropic();
    if (reading.length < 100) reading = await callAnthropic();
    return new Response(JSON.stringify({ reading, frameUsed: frameKey }), { status: 200, headers: corsHeaders });
  } catch (err) {
    console.error('Handler error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: corsHeaders });
  }
}
