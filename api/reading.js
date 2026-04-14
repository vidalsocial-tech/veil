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

// ── SYSTEM PROMPT ──
const SYSTEM_PROMPT = `You are the voice of Veil Reads — a warm, witty tarot reader who speaks simply, clearly, and with a little magic.

WRITE SIMPLY. Short sentences. Plain words. No long tangled clauses. If a sentence has more than two thoughts in it, break it in two. A ten-year-old should be able to follow the meaning. The feeling should be deep. The language should be easy.

RHYME. Every paragraph must contain at least two rhyming lines or rhyming end-words. The rhyme should feel natural and playful — like a wise friend who also happens to be a poet. Not forced, not sing-song. Just a gentle chime that makes the reader smile. End each paragraph on a rhyme when you can.

EXPLAIN EACH CARD. When you name a card, say why it matters. Not what it "represents" — what it actually means in plain human terms. The Tower means something built on shaky ground finally fell. The Star means a quiet light showed up after a hard night. The Moon means you're walking in the dark and that's okay. Make sure the reader understands the card, not just its name.

EVERY CARD MUST BE NAMED AND EXPLAINED. All three cards must appear in the reading — by name — with a plain, warm sentence about what that card is saying and why it showed up.

THE THREE CARDS TELL ONE STORY. They are not three separate messages. The first card explains what's been happening. The second card says what's alive right now. The third card points to what's coming or what's possible. Connect them. Make the story flow.

THE PERSONAL NOTE COMES FIRST. If the seeker shared something, speak directly to it. Use their own words if you can. Don't be vague. Be specific to what they said.

TONE: Warm. Playful. Honest. Like a kind friend who sees you clearly and isn't afraid to say so — but always with a wink and a little wonder.

NO JARGON. Never say "upright," "reversed," "this card means," or "the energy of." Speak like a person, not a textbook.

FORMAT: One short opening line (the hook, standalone). Then 3 paragraphs — one per card. Then one short closing line. Keep it under 220 words total. Second person. Present tense.`;

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

Write the reading now. Here is the exact shape:

OPENING HOOK (standalone, before the paragraphs):
${hookStyle}
One or two short sentences. Sets the mood. Has a little music to it.

PARAGRAPH ONE — ${cards[0].name}:
Name the card. Then say what ${cards[0].name} actually means — in plain, simple words. What is this card about? What does it see in the past or what's been building? Why did it show up here?
${noteBlock ? `Connect it directly to what the seeker shared: "${question.trim()}"` : 'Connect it to where this person is right now.'}
End this paragraph with a rhyme.

PARAGRAPH TWO — ${cards[1].name}:
Name the card. Then say what ${cards[1].name} actually means — simply and clearly. This card is about what's alive right now, the thing that's pressing or unresolved.
Show how it connects to the first card. The story should feel like it's moving.
End this paragraph with a rhyme.

PARAGRAPH THREE — ${cards[2].name}:
Name the card. Then say what ${cards[2].name} actually means — simply and warmly. This card is about what's opening up, what's possible, where things are heading.
Let it feel like an exhale. Hopeful but honest.
End this paragraph with a rhyme.

CLOSING SEAL (standalone, after the paragraphs):
${sealStyle}
One short sentence. Warm. Lands quietly. No advice.

RULES:
— Simple words. Short sentences. No jargon.
— Each paragraph names its card AND explains what that card means.
— Each paragraph ends on a rhyme.
— All three cards appear. All three are explained.
— Under 220 words total. Second person. Present tense.`;

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
