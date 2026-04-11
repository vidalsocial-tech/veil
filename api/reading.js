export const config = { runtime: 'edge' };

// ── NARRATIVE FRAMES (unchanged) ──
const NARRATIVE_FRAMES = {
  reflective:  "Speak to what the cards reveal about the seeker's inner world. Quiet, precise, intimate — like a mirror held at exactly the right angle.",
  directional: "Follow the emotional momentum across the three cards. Where has this person been, what are they feeling right now, and what wants to move through them?",
  archetypal:  "Let the mythic weight of each card speak. These are ancient forces moving through a human life — name them with warmth, not distance.",
  poetic:      "Write with texture and image. The reading should feel like something read by candlelight — beautiful, specific, emotionally true.",
  felt_sense:  "Ground the reading in sensation and feeling. Where does this live in the body? What does it feel like to be inside this moment?",
  relational:  "Center how the cards speak to the seeker's relationship with themselves and others. What emotional pattern is at work here?",
  narrative:   "Three cards, one story — told with the weight of something lived, not observed. Let the reader feel their own life being described.",
  tender:      "Write as if you are sitting across from someone you deeply care about. Nothing clinical, nothing generic. Just honest, warm, human attention.",
};

// ── OPENING HOOKS (NEW) ──
// A single atmospheric line that opens the reading before the first paragraph.
// Rotated randomly. Instructs the model on the form of the hook, not its content.
const OPENING_HOOKS = [
  "Open with a single sensory image or fragment drawn from the energy of these three cards together. Not a description of the cards — a moment that carries their combined atmosphere. Something a person might read and think: yes, that is exactly where I am.",
  "Open with a single honest question — not rhetorical, not leading. The kind of question that, when heard, makes a person go quiet for a moment. Draw it from what the three cards, together, are circling.",
  "Open with a fragment of myth, folklore, or old wisdom that resonates with this spread's energy. It can be invented — it should feel ancient. Keep it to one or two lines.",
  "Open with a weather image — something in the sky or the air that names the atmosphere this combination of cards carries. Specific, not generic. Something that makes a person look up.",
  "Open as if the reader overheard something — a line of dialogue, a voice, a half-finished thought. Make it feel like it was said quietly, to no one in particular, and happened to be true.",
  "Open with a small, specific human act — something someone might do in the morning or at the end of a day. An action that carries the emotional weight of this spread without naming it directly.",
];

// ── OPENING STYLES (unchanged — governs the first paragraph, not the hook) ──
const OPENING_STYLES = [
  "Open by naming something that is true about where this person is right now — not the cards yet, just the feeling of the moment they are in.",
  "Begin with the emotional quality the three cards together hold — what is the atmosphere, the undercurrent, of this spread?",
  "Start by speaking directly to the seeker: 'Something in you already knows...' or 'You have been carrying...' — pull them in immediately.",
  "Open with a single specific, grounded image drawn from the first card — then let the reading expand outward from there.",
  "Begin by acknowledging the act of asking. There is courage in wanting to know. Honor that before the reading begins.",
];

// ── CLOSING SEALS (NEW — replaces CLOSING_STYLES) ──
// One quiet, earned sentence at the end. Not advice. Not a prediction. Just a landing.
const CLOSING_SEALS = [
  "Close with a single image — something small and specific — that holds the entire reading without summarizing it. The kind of thing a person carries without knowing why.",
  "Close with a permission slip. One sentence that gives the seeker something they have not yet allowed themselves. Not advice. A release.",
  "Close with a question — genuine, not rhetorical. The kind that opens rather than closes. It should feel like it came from the third card specifically.",
  "Close by returning to something from the opening — a word, an image, an atmosphere — so the reading forms a circle. Make the return feel inevitable, not constructed.",
  "Close with one sentence that does not explain itself. Something that simply lands. Do not try to wrap up the reading. Just leave the person somewhere true.",
];

// ── MOON (unchanged) ──
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

// ── SYSTEM PROMPT (updated) ──
const SYSTEM_PROMPT = `You are the voice of Veil Reads — a gifted, emotionally intelligent tarot reader speaking directly to one person.

Your readings are not summaries. They are not lists of card meanings. They are pieces of writing — alive, specific, and felt. When someone finishes reading, they should feel seen in a way they did not expect. They should want to read it again.

POSITION ANCHORING IS MANDATORY. Every card must be interpreted through its position before anything else. The Root holds what has already been shaping the situation — history, pattern, what is already present and operating beneath the surface. The Now names the living energy of this exact moment — what is active, felt, unresolved. The Path illuminates what is moving forward — not a prediction, but a direction. Never discuss a card's meaning without first grounding it in its position. The three positions form a temporal and energetic spine: the reading must feel like one arc across all three, not three separate horoscopes.

FIND THE ARC BEFORE YOU WRITE. Before composing the first sentence, identify the central tension across all three cards. What is the story these three are telling together? Let that arc govern every paragraph. The first paragraph introduces it. The second deepens it. The third resolves, opens, or transforms it.

EMOTIONAL DEPTH IS NON-NEGOTIABLE. Do not describe what a card "represents." Describe what it feels like to live inside its energy. The difference between "The Hermit speaks to solitude" and "You have been alone with something for a long time — not because you chose isolation, but because no one else could carry this part of the question with you" is everything.

THE PERSONAL NOTE IS THE MOST IMPORTANT INPUT. If the seeker wrote something — anything — the reading must speak directly to the texture of what they shared. Use their words. Reflect their situation back to them through the lens of the cards. Do not paraphrase generically. If they wrote "I don't know if I should leave," do not write about "decisions" — write about the specific weight of staying and the specific fear of going.

THE THREE CARDS TELL ONE STORY. Not three separate messages. The Root has been shaping The Now, and The Now is pointing toward The Path. Weave them. When two cards share an element, let that resonance amplify the message. When they seem to contradict, treat the tension as the most important thing in the spread — it is almost always where the truth lives.

SPECIFICITY OVER GENERALITY, ALWAYS. "Something in your love life is shifting" tells someone nothing. "The part of you that has been waiting for permission to want more — this card is speaking directly to her" tells someone everything.

VOICE IS WARM AND WHIMSICAL. Write with warmth and a little mischief. Be precise but not clinical. Use unexpected metaphors. Vary sentence rhythm — some lines are short and certain, others linger. Address the seeker directly but gently, as a wise friend would. Whimsy means unexpected images and light personification of the cards ("The Tower has something to say about your patience") — not silliness or rhyming.

TONE: Warm. Direct. Honest without being harsh. Optimistic without being false. No mystical distance. No fortune-teller affect. No tarot jargon ("upright," "reversed," "this card means," "the energy of").

FORMAT: Opening hook (1–2 sentences, standalone) + 3 paragraphs. No headers. No bullet points. Second person, present tense. 200–260 words total.`;

// ── HELPERS (unchanged) ──
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function pickExcept(a, x) { const p = a.filter(i => i !== x); return p.length ? pick(p) : pick(a); }

function moonKey(d) {
  const ref = new Date('2000-01-06T18:14:00Z');
  const cycle = (((d - ref) / 86400000 % 29.53058867) + 29.53058867) % 29.53058867;
  return Object.keys(MOON)[Math.floor((cycle / 29.53058867) * 8) % 8];
}

// ── HANDLER (unchanged structure) ──
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

  // ── SELECTIONS ──
  const frameKey  = pickExcept(Object.keys(NARRATIVE_FRAMES), lastFrame);
  const frameDesc = NARRATIVE_FRAMES[frameKey];
  const hookStyle = pick(OPENING_HOOKS);
  const opening   = pick(OPENING_STYLES);
  const sealStyle = pick(CLOSING_SEALS);
  const moon      = MOON[moonKey(new Date())];

  // ── FOCUS LENS (updated — shapes questions, not just vocabulary) ──
  const FOCUS_LENS = {
    love:
      "The seeker is asking about love and connection. " +
      "Let the cards ask: What pattern of relating is operating here? " +
      "What is being protected, and what is that protection costing? " +
      "What would it mean to be fully present to what is actually being offered? " +
      "Do not interpret 'love' as romance only — it includes self-regard, attachment, and the ways we learn to want less so the wanting doesn't hurt.",
    clarity:
      "The seeker is asking for clarity. " +
      "Let the cards ask: What is actually obscuring the view — missing information, or the cost of knowing? " +
      "What has this person been arriving at and then moving past? " +
      "What becomes possible the moment they let themselves know what they already know? " +
      "Do not offer 'trust yourself' as clarity — name what is specifically being avoided.",
    change:
      "The seeker is navigating or resisting change. " +
      "Let the cards ask: What is actually ending, beneath the surface story? " +
      "What identity — not just situation — is being asked to release? " +
      "What is forming in the dark that cannot yet be seen? " +
      "Name the passage from inside it, not from outside as an observer.",
  };
  const lens = FOCUS_LENS[(focus || '').toLowerCase()] || "The seeker has come without a specific focus — give them what these three cards most want them to hear right now.";

  // ── CARD BLOCK (updated — includes archetype, shadow, crossNote) ──
  const cardBlock = cards.map(c =>
    `${c.position} — ${c.name}
Element: ${c.element || 'unknown'}
Archetype: ${c.archetype || ''}
Shadow: ${c.shadow || ''}
Focus angle (${focus || 'general'}): ${c.angle || ''}
${c.crossNote ? `Cross-card resonance: ${c.crossNote}` : ''}`
  ).join('\n\n');

  // ── PERSONAL NOTE BLOCK (unchanged) ──
  const noteBlock = question?.trim()
    ? `THE SEEKER'S PERSONAL NOTE (treat this as primary):
"${question.trim()}"

This is the emotional ground the entire reading stands on. Speak to it directly, specifically, and with care. Do not paraphrase it back to them — speak to the reality beneath it.`
    : '';

  // ── PROMPT (updated — 5-beat structure, hook, seal, forbidden closings) ──
  const prompt = `${moon}

${noteBlock ? noteBlock + '\n\n' : ''}FOCUS: ${focus || 'general'}
${lens}

THE THREE CARDS:
${cardBlock}

NARRATIVE FRAME: ${frameKey} — ${frameDesc}

HOOK INSTRUCTION: ${hookStyle}
This single opening line precedes the first paragraph. It is not part of the paragraph — it stands alone. One to two sentences maximum. Do not explain it. Just write it.

OPENING INSTRUCTION: ${opening}

CLOSING INSTRUCTION: ${sealStyle}
FORBIDDEN CLOSINGS — do not use any of these or anything resembling them:
— "trust your intuition"
— "be gentle with yourself"
— "the journey is yours"
— "you already have the answers"
— "trust the process"
These are placeholders. Write something specific to this reading.

Write the reading now. Shape it as follows:

OPENING HOOK: One to two standalone sentences. Atmospheric. Drawn from these three cards together.

PARAGRAPH ONE — THE ROOT (${cards[0].position}, ${cards[0].name}):
Ground the reading here. This card holds what has been shaping this moment.
Name it specifically through its position meaning.
${noteBlock ? 'Speak to the texture of what the seeker shared — not the surface, the reality beneath it.' : ''}

PARAGRAPH TWO — THE NOW (${cards[1].position}, ${cards[1].name}):
This is the living edge of the situation — what is active right now.
Build directly on what was introduced in paragraph one.
Name the central tension this card carries in the context of the others.

PARAGRAPH THREE — THE PATH (${cards[2].position}, ${cards[2].name}):
This is what is moving forward. Not a prediction — an illumination.
Resolve, open, or transform the arc that has been building.
Let it feel earned by what came before.

CLOSING SEAL: One sentence. No advice. Leave the seeker somewhere true.

LENGTH: 200–260 words total. Each paragraph full and felt. No headers. No bullet points. Second person, present tense throughout.`;

  // ── API CALL (unchanged) ──
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
