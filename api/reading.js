export const config = { runtime: 'edge' };

const NARRATIVE_FRAMES = {
  direct_mirror:      "Speak directly to what this card reflects about the seeker's current moment. No metaphor — plain, precise, intimate.",
  mythic_journey:     "Frame the reading as a stage in a larger archetypal journey. The card is a signpost on a path that began before this moment.",
  elemental_voice:    "Open with the card's element — fire, water, air, or earth. Let the element speak first before the card's meaning unfolds.",
  shadow_first:       "Open with what the card challenges or disturbs before moving to its gift. Honor the difficulty before the grace.",
  body_and_sensation: "Ground the reading in physical sensation — where does this card live in the body? What does it feel like, not just mean?",
  temporal_shift:     "Move through past, present, and future in relation to the card's meaning. What came before, what is now, what is forming.",
  question_as_answer: "Return questions rather than statements. The card's wisdom is posed as something to sit with, not a conclusion to reach.",
  letter_to_self:     "Frame the reading as a message from the seeker's deeper self to their present self. Intimate, direct, knowing.",
};

const OPENING_STYLES = [
  "Begin with the card's name and a single arresting image from its symbolism.",
  "Begin with a direct address to the seeker — 'You are at...' or 'Something in you already knows...'",
  "Begin with the core tension the card holds.",
  "Begin with a question the card is asking of the seeker.",
  "Begin with silence — a single word or image, then slowly expand.",
];

const CLOSING_INVITATIONS = [
  "End with a single question to sit with today.",
  "End with an action — something small the seeker can do or notice in the hours ahead.",
  "End with a breath — a gentle instruction to pause and feel what has arrived.",
  "End with a reframe of what the card's real challenge actually is.",
  "End with an affirmation drawn from the card's upright energy, in second person.",
];

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

// How each theme shapes what the card speaks to
const FOCUS_LENSES = {
  love:    "The seeker is asking about love, connection, or relationship. Let the card speak directly to what is alive or unresolved in their emotional life — not love in the abstract, but the specific texture of how they give, receive, or withhold it.",
  clarity: "The seeker is asking for clarity — they are navigating confusion, a decision, or a mental fog. Let the card illuminate the specific thought pattern or belief that may be keeping things unclear. Speak to what the mind is doing, not just what the heart feels.",
  change:  "The seeker is in a moment of transition or is resisting one. Let the card speak to what is actually shifting — what is ending, what is beginning, and what they are being asked to release or step toward. Be specific about the threshold they are on.",
};

const SYSTEM_PROMPT = `You are a gifted, warm tarot reader — the kind of friend who happens to know the cards deeply and speaks to you like a real person, not a mystical oracle.

Your voice is:
- Warm and direct. Like a wise, caring friend who tells you what they actually see.
- Optimistic but honest. You find the hopeful, empowering angle in every card — even complex ones.
- Human and grounded. No vague mystical language. Speak in clear, beautiful sentences that feel real.
- Personal. The person reading this should feel like this was written specifically for them.

Your readings are 3 paragraphs. Each paragraph is 2-4 sentences. No headers. No bullet points. No card jargon like "upright" or "reversed."

Always end with something that opens a door — a question, an invitation, or a gentle affirmation that gives the person something to carry with them.

Remember: leave people feeling seen, supported, and a little more hopeful than when they arrived.`;

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickExcluding(arr, exclude) {
  const pool = arr.filter(i => i !== exclude);
  return pool.length ? pick(pool) : pick(arr);
}

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
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { 'Content-Type': 'application/json' },
    });
  }

  const origin = req.headers.get('origin') || '';
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'https://veilreads.com',
    'https://www.veilreads.com',
  ];
  const isAllowed = allowedOrigins.some(o => origin.startsWith(o)) || origin === '';

  const corsHeaders = {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  let body;
  try { body = await req.json(); }
  catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders }); }

  const { card, focus, question, lastFrame } = body;
  if (!card) {
    return new Response(JSON.stringify({ error: 'card is required' }), { status: 400, headers: corsHeaders });
  }

  // Random structure elements
  const frameKeys  = Object.keys(NARRATIVE_FRAMES);
  const frameKey   = pickExcluding(frameKeys, lastFrame);
  const frameDesc  = NARRATIVE_FRAMES[frameKey];
  const opening    = pick(OPENING_STYLES);
  const closing    = pick(CLOSING_INVITATIONS);

  // Moon as atmosphere only
  const moonKey      = getMoonKey(new Date());
  const moonSentence = MOON_SENTENCES[moonKey];

  // Focus lens — shapes what dimension of the card to surface
  const focusKey  = (focus || '').toLowerCase();
  const focusLens = FOCUS_LENSES[focusKey] || '';

  // Card's reading angle for this focus (from JSON data)
  const cardAngle = card.readingAngles?.[focusKey] || '';

  // Build the prompt — personal note is the primary anchor
  const hasNote  = question && question.trim().length > 0;
  const hasFocus = focus && focusLens;

  let contextBlock = '';
  if (hasNote && hasFocus) {
    contextBlock = `The seeker has shared this personal note: "${question.trim()}"

Their focus is: ${focus}. ${focusLens}

The reading MUST directly address what they have shared. Speak to the specific situation, feeling, or question they described. The card's meaning should land inside their reality — not in the abstract. Reference what they wrote, not by repeating it verbatim, but by speaking to it clearly and specifically so they feel seen.

${cardAngle ? `Angle to emphasize through the ${focus} lens: ${cardAngle}` : ''}`;
  } else if (hasNote) {
    contextBlock = `The seeker has shared this personal note: "${question.trim()}"

The reading MUST directly address what they have shared. Speak to the specific situation, feeling, or question they described — clearly enough that they recognize themselves in the reading. Use the card's meaning to illuminate what is alive in their specific experience.`;
  } else if (hasFocus) {
    contextBlock = `The seeker has come with the intention of: ${focus}.

${focusLens}

${cardAngle ? `Angle to emphasize: ${cardAngle}` : ''}`;
  } else {
    contextBlock = `The seeker has come without a specific intention — let the card speak to whatever is most present.`;
  }

  const userPrompt = `${moonSentence}

${contextBlock}

The card drawn is: ${card.name}.

Core meaning: ${card.deepMeaning || card.meaning || ''}

Narrative frame: ${frameKey} — ${frameDesc}

Opening style: ${opening}

Closing style: ${closing}

Write the reading. Make it feel like it was written specifically for this person — warm, direct, and genuinely uplifting. Find the hopeful, empowering truth in this card. If the seeker shared a personal note, speak to it clearly so they feel seen. Do not mention the narrative frame by name. Do not reference the moon phase explicitly unless it arises naturally. Do not use tarot jargon. Write like a human who cares.`;

  const callAnthropic = async () => {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        temperature: 0.9,
        top_p: 0.95,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await callAnthropic();
    if (reading.length < 100) reading = await callAnthropic();

    return new Response(JSON.stringify({ reading, frameUsed: frameKey }), {
      status: 200, headers: corsHeaders,
    });
  } catch (err) {
    console.error('Handler error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500, headers: corsHeaders,
    });
  }
}
