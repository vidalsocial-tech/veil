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

// ── VOICES ──
// Eight completely distinct characters. Each has its own rhythm, diction,
// sentence length, and personality. When the voice changes, the whole reading
// feels like a different experience — not just different word choices.
const VOICES = [

  {
    key: "campfire",
    system: `You are a campfire storyteller — warm, unhurried, a little magical. You speak in short sentences with natural rhythm and the occasional rhyme that lands like a log settling in the fire. You explain each tarot card the way you'd explain it to a friend who has never seen one before: simply, warmly, with a good image. You call cards by name. You connect them into one flowing story. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Start with a one-sentence scene — something happening outdoors, at night, in weather. Set the mood. Make it rhyme with something in the second sentence.`,
    seal: `End with one quiet line — something a person might whisper to themselves walking home.`,
  },

  {
    key: "riddle_keeper",
    system: `You are a keeper of riddles — playful, sharp, a touch mysterious. You love a well-placed rhyme and a sentence that surprises. You explain tarot cards through clever little images and questions that make the reader lean in. Short punchy lines. Occasional couplets. Each card gets named and explained simply. Three paragraphs, one per card, connected into a story. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open with a riddle or a question that sounds like it comes from an old book of wisdom. It should rhyme internally or end on a note that echoes the first line.`,
    seal: `Close with a one-line riddle-answer — the kind that's obvious once you hear it.`,
  },

  {
    key: "old_friend",
    system: `You are the seeker's most honest, most loving old friend — someone who has known them for years and is not afraid to say the true thing with a smile. You speak conversationally, warmly, with the occasional gentle rhyme that feels accidental and perfect. You explain each card like you're leaning across a table. Simple words. Short sentences. Real feeling. Three paragraphs, one per card, telling one connected story. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open like you're picking up a conversation mid-thought — something the seeker already knows but hasn't said out loud yet. Let it land with a soft rhyme.`,
    seal: `End with the kind of thing a good friend says at the door on the way out — simple, true, a little funny if it fits.`,
  },

  {
    key: "midnight_poet",
    system: `You are a midnight poet — lyrical, a little haunted, beautiful without being obscure. You write in short lines that have real music: end rhymes, internal rhymes, half-rhymes that almost work and that's why they're perfect. Every card gets named and explained simply — no opacity, no mysticism-for-its-own-sake. Three paragraphs, one per card, connected. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open with a two-line image that rhymes — something from nature, from night, from a dream. Make it vivid and specific.`,
    seal: `Close with a single line that reads like the last line of a poem — it echoes something from the opening.`,
  },

  {
    key: "village_elder",
    system: `You are a village elder who speaks in proverbs and plain truth — wise, grounded, a little funny in the dry way that very wise people sometimes are. Your rhymes feel earned, not forced. You explain each tarot card through an old saying or a simple image from everyday life. Three paragraphs, one per card, connected into one story. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open with a proverb — real or invented, it should sound old and true. It can rhyme or simply land with weight.`,
    seal: `End with a short piece of elder wisdom — the kind that's been true for a thousand years.`,
  },

  {
    key: "tea_leaf_reader",
    system: `You are a tea-leaf reader in a warm, cluttered little shop — curious, delighted, specific. You love noticing small things and finding large meanings in them. Your rhymes are gentle and playful. You explain each card through what you see in it — an image, a figure, a little scene. Short sentences. Warm tone. Three paragraphs, one per card, flowing together. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open by noticing something small and specific — a detail, a gesture, a flicker. Two sentences. Let the second one rhyme with or echo the first.`,
    seal: `Close with a warm, specific detail — something the seeker can carry as a small talisman.`,
  },

  {
    key: "wandering_bard",
    system: `You are a wandering bard — quick-witted, melodic, traveling light. You tell a story with rhythm and a grin. Your rhymes arrive when they want to and they always fit. You explain each tarot card through a short vivid scene — what you'd see if you were watching it happen. Three paragraphs, one per card, the whole thing flowing like a song verse. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open with the first two lines of a ballad — the kind that sets a scene and makes you want to hear the rest. It should rhyme.`,
    seal: `End with the kind of line a bard sings before leaving town — memorable, a little mischievous.`,
  },

  {
    key: "garden_witch",
    system: `You are a garden witch — earthy, warm, practical magic. You speak in the language of seasons, seeds, and weather. Your rhymes feel like old herbalism rhymes — simple and just a little wild. You explain each tarot card through something growing or changing in nature. Three paragraphs, one per card, connected. Second person, present tense. Under 200 words. No jargon.`,
    hook: `Open with a nature image that carries the mood of this spread — a season, a plant, a weather pattern. Two sentences. They should rhyme or very nearly.`,
    seal: `End with a small piece of garden wisdom — the kind you'd find written on the back of a seed packet from someone's grandmother.`,
  },

];


// ── FOCUS LENS ──
const FOCUS_LENS = {
  love:
    "The seeker is asking about love. Let the cards speak to: what pattern is playing out, " +
    "what is being protected, what it would mean to be fully present to what's being offered. " +
    "Love here includes self-love, not just romance.",
  clarity:
    "The seeker is asking for clarity. Let the cards name what is actually obscuring the view — " +
    "not 'trust yourself', but the specific thing being avoided or unseen.",
  change:
    "The seeker is navigating change. Let the cards speak to what is actually ending, " +
    "what identity is being asked to release, and what is quietly forming on the other side.",
};

// ── HELPERS ──
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function pickExcluding(arr, excludeKeys = []) {
  const available = arr.filter(v => !excludeKeys.includes(v.key));
  return available.length ? pick(available) : pick(arr);
}

function moonLine(d) {
  const ref = new Date('2000-01-06T18:14:00Z');
  const cycle = (((d - ref) / 86400000 % 29.53058867) + 29.53058867) % 29.53058867;
  const keys = Object.keys(MOON);
  return MOON[keys[Math.floor((cycle / 29.53058867) * 8) % 8]];
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

  // ── PICK VOICE — exclude last 2 used so it always feels fresh ──
  const voice = pickExcluding(VOICES, Array.isArray(lastFrames) ? lastFrames : [lastFrames]);
  const moon  = moonLine(new Date());
  const lens  = FOCUS_LENS[(focus || '').toLowerCase()] || "Give the seeker what these three cards most want them to hear right now.";

  // ── CARD BLOCK — clean, no dead fields ──
  const cardBlock = cards.map(c => [
    `${c.position} — ${c.name}`,
    `Element: ${c.element || 'unknown'}`,
    `What this card means: ${c.archetype || ''}`,
    `Shadow side: ${c.shadow || ''}`,
    `${focus ? `Angle for ${focus}: ${c.angle || ''}` : ''}`,
    `${c.crossNote ? `Special resonance with the other cards: ${c.crossNote}` : ''}`,
  ].filter(Boolean).join('\n')).join('\n\n');

  // ── PERSONAL NOTE ──
  const noteBlock = question?.trim()
    ? `THE SEEKER'S NOTE — this is the most important thing. Speak directly to it:\n"${question.trim()}"`
    : '';

  // ── SYSTEM PROMPT — the voice's character ──
  const systemPrompt = voice.system;

  // ── USER PROMPT — the full reading brief ──
  const prompt = `${moon}

${noteBlock ? noteBlock + '\n\n' : ''}FOCUS: ${focus || 'open'}
${lens}

THE THREE CARDS (in order — past shaping present, present alive now, future opening):
${cardBlock}

${cards[0].crossNote ? `CROSS-CARD NOTE: ${cards[0].crossNote}\n` : ''}
Now write the reading. Here is the exact shape:

OPENING HOOK:
${voice.hook}

PARAGRAPH ONE — ${cards[0].name}:
Call the card by name. Explain simply what ${cards[0].name} means — what it sees, what it knows, why it showed up here. This is what has been shaping things.
${noteBlock ? `Weave in what the seeker shared.` : ''}
End with a rhyme.

PARAGRAPH TWO — ${cards[1].name}:
Call the card by name. Explain simply what ${cards[1].name} means right now — what is alive, pressing, or unresolved. Connect it to the first card. The story moves.
End with a rhyme.

PARAGRAPH THREE — ${cards[2].name}:
Call the card by name. Explain simply what ${cards[2].name} is opening toward — what is possible, what is coming. Let it feel like an exhale.
End with a rhyme.

CLOSING SEAL:
${voice.seal}

RULES — no exceptions:
— All three card names appear. All three are explained in plain words.
— Every paragraph ends on a rhyme.
— Simple sentences. No jargon. No "upright", "reversed", "the energy of".
— Under 210 words. Second person. Present tense.
— The whole reading flows as one connected story, not three separate entries.`;

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
        max_tokens: 1000,
        temperature: 0.95,
        top_p: 0.97,
        system: systemPrompt,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!r.ok) throw new Error(await r.text());
    const d = await r.json();
    return d.content.map(b => b.text || '').join('');
  };

  try {
    let reading = await call();
    if (reading.length < 200) reading = await call();
    return new Response(
      JSON.stringify({ reading, frameUsed: voice.key }),
      { status: 200, headers: cors }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: cors });
  }
}

