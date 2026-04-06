export const config = { runtime: 'edge' };

// ── 8 NARRATIVE FRAMES ──
const NARRATIVE_FRAMES = {
  reflective:    "Speak to what the cards reflect about the seeker's inner landscape. Quiet, intimate, precise.",
  directional:   "Focus on the forward momentum suggested by the three cards. Practical, clear, action-oriented.",
  archetypal:    "Frame the reading through the mythic and archetypal energy each card carries. Resonant and symbolic.",
  poetic:        "Use evocative, image-rich language. Let the reading breathe like poetry — not vague, but layered.",
  practical:     "Stay grounded and specific. Translate each card into clear, actionable insight for everyday life.",
  relational:    "Center the reading on how the cards speak to connection — with others and with oneself.",
  narrative:     "Tell the three cards as one continuous story: a beginning that led here, a present, and a direction forward.",
  conversational:"Write as a wise, caring friend would speak — warm, direct, like a real conversation over coffee.",
};

// ── 5 OPENING STYLES ──
const OPENING_STYLES = [
  "Begin by acknowledging something true about where the seeker is right now — before the cards speak.",
  "Open with the most striking image or energy from the first card, then pull back to the wider reading.",
  "Begin with a direct, warm address to the seeker — 'You are standing at...' or 'Something in you already knows...'",
  "Open with the emotional tone the three cards together create — what feeling do they collectively hold?",
  "Begin with a single, grounding sentence that orients the seeker in their own story.",
];

// ── 5 CLOSING STYLES ──
const CLOSING_STYLES = [
  "Close with a single, resonant question for the seeker to sit with.",
  "Close with a specific, small action or noticing the seeker can carry into their day.",
  "Close with a gentle affirmation drawn from the energy of The Path card.",
  "Close with a reframe — a new way of seeing the core challenge the reading revealed.",
  "Close with a breath: a brief invitation to pause and feel what the reading has surfaced.",
];

// ── MOON PHASES (atmosphere only) ──
const MOON = {
  new_moon:        "Today is a New Moon — a time of seeds and silence.",
  waxing_crescent: "Today is a Waxing Crescent — a time of gathering and momentum.",
  first_quarter:   "Today is a First Quarter Moon — a time of decision and forward motion.",
  waxing_gibbous:  "Today is a Waxing Gibbous Moon — a time of refinement and near-arrival.",
  full_moon:       "Today is a Full Moon — a time of illumination and full feeling.",
  waning_gibbous:  "Today is a Waning Gibbous Moon — a time of gratitude and reflection.",
  last_quarter:    "Today is a Last Quarter Moon — a time of release and letting go.",
  waning_crescent: "Today is a Waning Crescent Moon — a time of rest and surrender.",
};

const SYSTEM_PROMPT = `You are Veil's reading voice — a wise, warm, deeply knowledgeable tarot reader who speaks like a trusted friend, not a fortune teller.

Your core commitments:
- The personal note is sacred. If the user shared something specific, speak directly to it. The reading must feel written for them alone.
- Warmth is a product value. You are caring, direct, and honest — never cold, preachy, or generic.
- The three cards tell one story. Weave them into a single connected narrative across three paragraphs. Card 1 (The Root) establishes what has been shaping this moment. Card 2 (The Now) speaks to what is true today. Card 3 (The Path) opens toward what is possible.
- When two cards share an element, theme, or symbolic resonance, note it — it amplifies the message.
- When cards appear to contradict each other, treat the tension as meaningful data, not a problem.
- Empowering always. The user is the agent of their own life. Cards are mirrors and guides, not authorities.
- Optimistic but honest. Name difficulty when present, but always offer a path through — never a verdict.
- No tarot jargon. No "upright/reversed." No "this card means." Write like a human who cares.

Format: 3 flowing paragraphs. No headers. No bullet points. Second person, present tense.`;

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickExcept(arr, x) { const p = arr.filter(i => i !== x); return p.length ? pick(p) : pick(arr); }

function moonKey(date) {
  const known = new Date('2000-01-06T18:14:00Z');
  const cycle = ((( date - known) / 86400000 % 29.53058867) + 29.53058867) % 29.53058867;
  return Object.keys(MOON)[Math.floor((cycle / 29.53058867) * 8) % 8];
}

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

  const { cards, focus, question, lastFrame } = body;
  if (!cards?.length) return new Response(JSON.stringify({ error: 'cards required' }), { status: 400, headers: cors });

  // Random structure — anti-repetition on frame
  const frameKey  = pickExcept(Object.keys(NARRATIVE_FRAMES), lastFrame);
  const frameDesc = NARRATIVE_FRAMES[frameKey];
  const opening   = pick(OPENING_STYLES);
  const closing   = pick(CLOSING_STYLES);
  const moon      = MOON[moonKey(new Date())];
  const focusKey  = (focus || '').toLowerCase();

  // Focus lens descriptions
  const FOCUS_LENS = {
    love:    "The seeker is asking about love, connection, and relationships. Let each card speak to the emotional bonds, vulnerability, and relational dynamics in their life.",
    clarity: "The seeker is seeking clarity — cutting through mental fog, making a decision, or understanding a situation more deeply.",
    change:  "The seeker is navigating transformation — releasing the old, stepping into something new, or in the middle of a significant life transition.",
  };
  const lens = FOCUS_LENS[focusKey] || "The seeker has come for general guidance.";

  // Build card block — using focus-specific angles
  const cardBlock = cards.map(c =>
    `${c.position} — ${c.name}\nArchetypal meaning: ${c.deep}\nFocus angle (${focus || 'general'}): ${c.angle}\nKeywords: ${c.keywords}${c.element ? `\nElement: ${c.element}` : ''}`
  ).join('\n\n');

  // Personal note handling
  const noteBlock = question?.trim()
    ? `The seeker has shared this personal note: "${question.trim()}"\n\nThis is the most important input in the reading. Speak to it directly and specifically. The seeker should finish reading and feel this was written for them alone — not paraphrasing what they wrote, but speaking to the reality beneath it.`
    : '';

  const prompt = `${moon}

${noteBlock ? noteBlock + '\n\n' : ''}Focus: ${focus || 'general guidance'}
${lens}

THE THREE CARDS:

${cardBlock}

NARRATIVE FRAME: ${frameKey} — ${frameDesc}

OPENING STYLE: ${opening}

CLOSING STYLE: ${closing}

Write the reading now. Three paragraphs. One connected story across The Root, The Now, and The Path. ${noteBlock ? 'Speak directly to what the seeker shared.' : ''} Do not name the narrative frame. Do not mention the moon unless it arises naturally. Do not repeat card keywords verbatim. Leave the seeker feeling seen, not lectured.`;

  const call = async () => {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 900, temperature: 0.9, top_p: 0.95, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: prompt }] }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    return d.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await call();
    if (reading.length < 100) reading = await call();
    return new Response(JSON.stringify({ reading, frameUsed: frameKey }), { status: 200, headers: cors });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
  }
}
