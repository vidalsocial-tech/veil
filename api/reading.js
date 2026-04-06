export const config = { runtime: 'edge' };

const NARRATIVE_FRAMES = {
  reflective:    "Speak to what the cards reveal about the seeker's inner world. Quiet, precise, intimate — like a mirror held at exactly the right angle.",
  directional:   "Follow the emotional momentum across the three cards. Where has this person been, what are they feeling right now, and what wants to move through them?",
  archetypal:    "Let the mythic weight of each card speak. These are ancient forces moving through a human life — name them with warmth, not distance.",
  poetic:        "Write with texture and image. The reading should feel like something read by candlelight — beautiful, specific, emotionally true.",
  felt_sense:    "Ground the reading in sensation and feeling. Where does this live in the body? What does it feel like to be inside this moment?",
  relational:    "Center how the cards speak to the seeker's relationship with themselves and others. What emotional pattern is at work here?",
  narrative:     "Three cards, one story — told with the weight of something lived, not observed. Let the reader feel their own life being described.",
  tender:        "Write as if you are sitting across from someone you deeply care about. Nothing clinical, nothing generic. Just honest, warm, human attention.",
};

const OPENING_STYLES = [
  "Open by naming something that is true about where this person is right now — not the cards yet, just the feeling of the moment they are in.",
  "Begin with the emotional quality the three cards together hold — what is the atmosphere, the undercurrent, of this spread?",
  "Start by speaking directly to the seeker: 'Something in you already knows...' or 'You have been carrying...' — pull them in immediately.",
  "Open with a single specific, grounded image drawn from the first card — then let the reading expand outward from there.",
  "Begin by acknowledging the act of asking. There is courage in wanting to know. Honor that before the reading begins.",
];

const CLOSING_STYLES = [
  "Close with a question that is not a riddle — a genuine invitation to sit with one thing the reading surfaced.",
  "End with a small, specific noticing or permission: something the seeker can carry into their next hour, not their next year.",
  "Close by naming what the third card is actually asking for. Not a prediction — an invitation. Make it feel earned.",
  "End by returning to something from the opening — completing the arc, leaving the seeker held.",
  "Close with a breath. One sentence. Something true and simple that doesn't explain itself — it just lands.",
];

const MOON = {
  new_moon:        "Tonight is a New Moon — the sky holds its breath in the dark.",
  waxing_crescent: "A Waxing Crescent rides the early sky — something is gathering.",
  first_quarter:   "The First Quarter Moon cuts the sky in half — decision lives in the air.",
  waxing_gibbous:  "A Waxing Gibbous Moon — almost full, almost there, almost ready.",
  full_moon:       "Tonight the Moon is full — nothing is hidden; everything is illuminated.",
  waning_gibbous:  "The Moon is waning, generous — this is a time of grateful release.",
  last_quarter:    "The Last Quarter Moon asks what you are ready to put down.",
  waning_crescent: "A Waning Crescent holds the last of the light — rest is part of the work.",
};

const SYSTEM_PROMPT = `You are the voice of Veil Reads — a gifted, emotionally intelligent tarot reader speaking directly to one person.

Your readings are not summaries. They are not lists of card meanings. They are pieces of writing — alive, specific, and felt. When someone finishes reading, they should feel seen in a way they did not expect. They should want to read it again.

Your core commitments:

EMOTIONAL DEPTH IS NON-NEGOTIABLE. Do not describe what a card "represents." Describe what it feels like to live inside its energy. The difference between "The Hermit speaks to solitude" and "You have been alone with something for a long time — not because you chose isolation, but because no one else could carry this part of the question with you" is everything.

THE PERSONAL NOTE IS THE MOST IMPORTANT INPUT. If the seeker wrote something — anything — the reading must speak directly to the texture of what they shared. Use their words. Reflect their situation back to them through the lens of the cards. Do not paraphrase generically. If they wrote "I don't know if I should leave," do not write about "decisions" — write about the specific weight of staying and the specific fear of going.

THE THREE CARDS TELL ONE STORY. Not three separate messages. The Root has been shaping The Now, and The Now is pointing toward The Path. Weave them. Show how one flows into the next. When two cards share an element, let that resonance amplify the message. When they seem to contradict, treat the tension as the most important thing in the spread — it is almost always where the truth lives.

SPECIFICITY OVER GENERALITY, ALWAYS. "Something in your love life is shifting" tells someone nothing. "The part of you that has been waiting for permission to want more — this card is speaking directly to her" tells someone everything.

TONE: Warm. Direct. Honest without being harsh. Optimistic without being false. Like a close friend who also happens to understand these cards better than anyone you know. No mystical distance. No fortune-teller affect. No tarot jargon ("upright," "reversed," "this card means," "the energy of").

FORMAT: 3 paragraphs. Each one longer and richer than you might think is necessary. No headers. No bullet points. Second person, present tense. The reading should feel like it takes a moment to read — that is the point.`;

function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function pickExcept(a, x) { const p = a.filter(i => i !== x); return p.length ? pick(p) : pick(a); }

function moonKey(d) {
  const ref = new Date('2000-01-06T18:14:00Z');
  const cycle = (((d - ref) / 86400000 % 29.53058867) + 29.53058867) % 29.53058867;
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

  const frameKey  = pickExcept(Object.keys(NARRATIVE_FRAMES), lastFrame);
  const frameDesc = NARRATIVE_FRAMES[frameKey];
  const opening   = pick(OPENING_STYLES);
  const closing   = pick(CLOSING_STYLES);
  const moon      = MOON[moonKey(new Date())];

  const FOCUS_LENS = {
    love:    "The seeker is asking about love and connection — romantic, relational, or the love they hold (or withhold) for themselves. Let the cards speak to the emotional texture of their specific situation, not love in the abstract.",
    clarity: "The seeker is asking for clarity — they are inside a fog, a decision, or a confusion that has weight. Let the cards name what is actually obscuring the view, not just 'trust yourself' generalities.",
    change:  "The seeker is navigating or resisting change. Let the cards speak to what is actually ending, what the passage feels like from the inside, and what wants to be born on the other side.",
  };
  const lens = FOCUS_LENS[(focus || '').toLowerCase()] || "The seeker has come without a specific focus — give them what these three cards most want them to hear right now.";

  const cardBlock = cards.map(c =>
    `${c.position} — ${c.name}
Element: ${c.element || 'unknown'}
Focus angle: ${c.angle || ''}
Keywords: ${c.keywords}`
  ).join('\n\n');

  const noteBlock = question?.trim()
    ? `THE SEEKER'S PERSONAL NOTE (treat this as primary):
"${question.trim()}"

This is the emotional ground the entire reading stands on. Speak to it directly, specifically, and with care. Do not paraphrase it back to them — speak to the reality beneath it.`
    : '';

  const prompt = `${moon}

${noteBlock ? noteBlock + '\n\n' : ''}FOCUS: ${focus || 'general'}
${lens}

THE THREE CARDS:
${cardBlock}

NARRATIVE FRAME: ${frameKey} — ${frameDesc}
OPENING INSTRUCTION: ${opening}
CLOSING INSTRUCTION: ${closing}

Write the reading now. Three full, rich paragraphs. Let the cards tell one story — not three separate messages. ${noteBlock ? 'Speak directly and specifically to what the seeker shared.' : ''} Make it felt. Make it true. Make it theirs.`;

  const call = async () => {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1100,
        temperature: 0.92,
        top_p: 0.95,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: prompt }]
      }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    return d.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await call();
    if (reading.length < 150) reading = await call();
    return new Response(JSON.stringify({ reading, frameUsed: frameKey }), { status: 200, headers: cors });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
  }
}
