export const config = { runtime: 'edge' };

// ─────────────────────────────────────────────
//  DEEP CARD DATA — 22 Major Arcana
// ─────────────────────────────────────────────
const CARD_DATA = {
  "The Fool": {
    archetype: "The Innocent / The Beginner",
    element: "Air",
    shadow: "recklessness, avoidance of consequence, refusing to grow up",
    deepMeaning: "The Fool stands at the edge before the edge knows it is an edge. Pure potential — the moment before the story begins, when anything is still possible because nothing has been chosen yet. The lightness here is not naivety — it is courage wearing casual clothes. The Fool asks you to step forward without a map, trusting that the ground will rise to meet your foot.",
    love: "Something new is asking to be let in. Don't audit it to death before it has a chance to breathe. The Fool in love means first steps, open hands, the willingness to look a little ridiculous for something real.",
    clarity: "The answer you're circling isn't in the analysis — it's in the leap. Stop rehearsing and begin. The first move is never wasted, even when it's wrong.",
    change: "You are standing at the very start of something. Don't try to see the whole road. The Fool's gift is momentum — the willingness to move before you're ready."
  },
  "The Magician": {
    archetype: "The Alchemist / The Craftsman",
    element: "Air / Mercury",
    shadow: "manipulation, using power to control others, all skill and no soul",
    deepMeaning: "The Magician has every tool on the table and knows exactly what each one is for. Not magic as mystery — magic as mastery. What exists inside you is sufficient for what is required outside you. The real trick isn't making something appear from nothing — it's recognizing that nothing was ever absent.",
    love: "You have more to offer than you are currently offering. Full presence is the gift — bring all of yourself, not just the polished parts.",
    clarity: "Everything you need to move forward is already in your hands. Stop waiting for better conditions. The tools are here, the moment is now.",
    change: "You are more capable of shaping this situation than you believe. Step into your agency without apology."
  },
  "The High Priestess": {
    archetype: "The Oracle / The Keeper of Secrets",
    element: "Water / Moon",
    shadow: "secrets kept to maintain power, withdrawal as avoidance, coldness mistaken for wisdom",
    deepMeaning: "The High Priestess knows what she knows by sitting still long enough for it to surface. She is the space between words, the pause before the answer, the part of you that understands before the mind has finished its argument. Her wisdom does not shout. It is deposited quietly in the body, in dreams, in the moments just before sleep.",
    love: "Something in this relationship is asking to be felt rather than figured out. Trust what your body knows before your reasoning catches up.",
    clarity: "The answer you want is not in more information — it is in stillness. Sit with the question. What surfaces without effort is what is true.",
    change: "Not all movement is visible. Something is shifting underneath the surface — trust the process even when you cannot see the progress."
  },
  "The Empress": {
    archetype: "The Mother / The Creative Force",
    element: "Earth / Venus",
    shadow: "smothering, over-giving until empty, mistaking abundance for love",
    deepMeaning: "The Empress grows things without trying hard — gardens, children, ideas, warmth — because she is made of the same stuff as earth. She is sensual, generous, completely at home in her body. Abundance is not a reward; it is a state of being. She invites you to stop earning your ease and simply inhabit it.",
    love: "Love here is ripe and ready. Give it freely, receive it without deflecting. Care doesn't run out when it comes from a full place.",
    clarity: "This situation calls for patience and tending, not forcing. Water the thing you want to grow and step back. Some answers ripen in their own time.",
    change: "You are in a fertile season. What you plant now has unusual growing power. This is a card of active, loving cultivation."
  },
  "The Emperor": {
    archetype: "The Father / The Architect",
    element: "Fire / Aries",
    shadow: "rigidity, control masquerading as protection, love expressed only through authority",
    deepMeaning: "The Emperor built something real. His power is earned through showing up, making decisions, and living with their consequences. He holds the structure so others can move freely within it. His gift is not dominance — it is reliability, the kind that lets others breathe.",
    love: "This relationship may need more structure, not more feeling. What are the agreements here? Clarity is a form of care.",
    clarity: "A decision is waiting to be made. Stop deliberating and commit. Half-choices are more exhausting than wrong ones.",
    change: "Build the foundation before building the house. Lasting change requires architecture — what are the rules, the rhythms, the non-negotiables?"
  },
  "The Hierophant": {
    archetype: "The Teacher / The Tradition-Keeper",
    element: "Earth / Taurus",
    shadow: "dogma, following rules out of fear, teaching what you don't believe",
    deepMeaning: "The Hierophant holds the long memory of what has been learned by those who came before. He asks whether the tradition you've been handed is yours or someone else's. The deepest lesson is the difference between inherited belief and chosen belief. What do you actually think? What do you actually know to be true?",
    love: "Look at the patterns handed to you — the models of love you grew up watching. Are they serving you or running you?",
    clarity: "There is wisdom in the tried path. Before you innovate your way out of this, check whether the conventional answer might simply be correct.",
    change: "Ask whose rules you are following and whether you chose them. Keep what is genuinely yours. Release what was handed to you unexamined."
  },
  "The Lovers": {
    archetype: "The Union / The Choice",
    element: "Air / Gemini",
    shadow: "choosing based on fear, giving yourself up to keep the peace, mistaking chemistry for compatibility",
    deepMeaning: "The Lovers is a card of alignment — not just between two people, but between who you are and who you want to become. It appears when you must choose not just between options but between versions of yourself. Every real choice carries this weight. Which version of yourself does this path call forward?",
    love: "This is either a deepening or a decision — possibly both. Choose with your whole self, not just your longing.",
    clarity: "Two clear paths are here. They are not equally good or bad — they lead to different lives. Stop stalling and choose the one whose consequences you can live with honestly.",
    change: "A significant choice is the engine of this change. No one can make this decision for you — and choosing is itself a form of freedom."
  },
  "The Chariot": {
    archetype: "The Victor / The Willful One",
    element: "Water / Cancer",
    shadow: "forcing outcomes, confusing momentum with direction, winning the wrong thing",
    deepMeaning: "The Chariot moves not because the road is clear but because the will inside it is stronger than the resistance in front of it. This is directed force — holding two opposing forces in tension long enough to drive them forward together. Victory is not the absence of conflict. It is the intelligent, disciplined use of it.",
    love: "Don't let inertia run this relationship. What are you building toward? Moving forward together requires that both people know where forward is.",
    clarity: "You have more power here than you are using. Stop waiting for the situation to resolve itself and drive it. Take the wheel.",
    change: "The momentum is available — you just have to commit to a direction and go. Half-hearted movement won't work here."
  },
  "Strength": {
    archetype: "The Gentle Brave / The Tamer",
    element: "Fire / Leo",
    shadow: "repression disguised as strength, enduring what should be refused, losing yourself to keep others comfortable",
    deepMeaning: "Strength does not subdue the lion — she befriends it. The quiet, consistent refusal to be ruled by fear, by rage, by the desperate need for approval. It is the power of someone who has met their own darkness and chosen to work with it. Strength is patient. It does not grip — it holds.",
    love: "There is a tenderness here that should not be mistaken for softness. Staying present when presence is hard, and drawing boundaries not in anger but in deep self-knowledge.",
    clarity: "The thing you think is your weakness might be your greatest power in disguise. What you've been trying to fix or hide — is it actually the very thing that makes you whole?",
    change: "This change doesn't require force. It requires constancy. Show up for it the same way, day after day, with steady hands and an open heart."
  },
  "The Hermit": {
    archetype: "The Seeker / The Lantern-Bearer",
    element: "Earth / Virgo",
    shadow: "isolation as avoidance, wisdom hoarded rather than shared, mistaking withdrawal for enlightenment",
    deepMeaning: "The Hermit has walked a long way to find out what is actually true, as opposed to what he was told was true. His lantern illuminates only a few steps ahead — just enough to take the next step with honesty. Stop consulting the crowd and go inside instead. Not forever. Just long enough to hear what your own voice has been trying to say.",
    love: "Some of what you are seeking from another person can only be found within yourself first. What do you need to understand about yourself before you can be fully present for someone else?",
    clarity: "The answer won't come from more input — it will come from less. Quiet the advisors, close the tabs, and sit with what you already know.",
    change: "This is a season for inward movement. Before rebuilding externally, do the internal work — what old stories need to be looked at honestly before you can move freely?"
  },
  "Wheel of Fortune": {
    archetype: "The Turning / The Cyclic Truth",
    element: "Fire / Jupiter",
    shadow: "fatalism, abdicating responsibility by calling everything fate",
    deepMeaning: "The Wheel is always turning. What looks like an ending is a rotation. What looks like a loss of control is the natural rhythm of a life that is actually alive. The Wheel does not promise the spin will go your way; it promises a spin is coming. Fate is real, but so is the stance you take toward it.",
    love: "Something is shifting in the dynamic of this connection — a cycle is completing or beginning. Ride the change with open hands rather than gripping what was.",
    clarity: "Timing is everything right now. Something is coming into alignment that was out of alignment before. Be ready to move when the moment opens.",
    change: "You are already in motion — the change has begun whether you have named it yet or not. Stop resisting the turn and start working with it."
  },
  "Justice": {
    archetype: "The Adjudicator / The Honest Mirror",
    element: "Air / Libra",
    shadow: "harsh judgment without mercy, holding others to standards you won't hold yourself",
    deepMeaning: "Justice sees clearly. Not cruelly — clearly. The scales she holds are not there to condemn — they are there to calibrate. Justice is cause and consequence, honest accounting, the relief that comes when you stop pretending and simply see. The truth, when you let it land, is usually less terrible than the effort of avoiding it.",
    love: "Something in this relationship needs to be named honestly rather than managed carefully. Full transparency — with yourself first, then the other person.",
    clarity: "Look at the facts without the story you've layered on top of them. Separate what is true from what you fear is true. They are not the same thing.",
    change: "A reckoning is available — not a punishment, but a recalibration. What needs to be honestly acknowledged before real change can begin?"
  },
  "The Hanged Man": {
    archetype: "The Willing Sacrifice / The Perspective Shifter",
    element: "Water / Neptune",
    shadow: "martyrdom, suffering that has become an identity, refusing to act because waiting feels like wisdom",
    deepMeaning: "The Hanged Man hangs by choice. The pause that is not passivity but the most active kind of stillness — the willingness to stay suspended long enough for a different view to become available. He has let go of the normal orientation, and in doing so, the world has rearranged itself into a shape he couldn't have seen before.",
    love: "Stop and feel before you decide or explain or fix. Let the situation teach you something before you respond to it.",
    clarity: "The perspective shift you need won't come from thinking harder in the same direction. Let yourself be upside-down for a moment. The answer you've been missing is visible from a different angle.",
    change: "This is not the time for action. It is the time for integration. Wait — not out of fear, but out of the earned patience of someone who knows that rushing will cost more than waiting."
  },
  "Death": {
    archetype: "The Transformer / The Threshold",
    element: "Water / Scorpio",
    shadow: "refusing necessary endings, clinging to what is already gone, mistaking the ending for the loss",
    deepMeaning: "Death in tarot is never about dying — it is about the courage to let something end completely so something new can begin completely. The skeleton on the horse is not a villain; he is a liberator. What he comes to take has usually been ready to go for some time. Underneath the grief is spaciousness. All profound transformation requires a real goodbye.",
    love: "Something in this dynamic is ending or needs to end — a pattern, a version of the relationship, possibly the relationship itself. What needs to be released so that what remains can be real?",
    clarity: "Stop trying to keep alive what is ready to be released. The clarity you're seeking is on the other side of the ending you've been postponing.",
    change: "This change is not cosmetic — it is structural. Let go of the old form completely and trust that what grows in the cleared ground will be worth it."
  },
  "Temperance": {
    archetype: "The Alchemist / The Integration",
    element: "Fire / Sagittarius",
    shadow: "endless moderation as avoidance, blending everything until nothing has flavor",
    deepMeaning: "Temperance stands at the edge of two worlds, pouring liquid from one vessel to another, watching for the moment the mixture becomes something neither container could hold alone. This is the card of integration — blending the opposites within you rather than choosing between them. The angel is not tame; she is perfectly calibrated.",
    love: "The balance here is not about keeping score — it's about allowing two different people to genuinely meet in the middle. Patience, flexibility, the willingness to be changed by the mixing.",
    clarity: "Don't choose between the two things pulling at you — find the synthesis. The answer isn't on either side of the tension; it's in the space between them.",
    change: "Slow is the right speed here. Let the change happen at the pace it needs. The gradual blend makes something that the quick fix never could."
  },
  "The Devil": {
    archetype: "The Shadow / The Enchainer",
    element: "Earth / Capricorn",
    shadow: "addiction, self-deception, the chain that could be slipped but hasn't been because the comfort is familiar",
    deepMeaning: "The Devil holds no real power that has not been handed to him. The chains in this card hang loosely — they could be removed at any moment, and yet they remain. The comfortable prison: the habit you know is hurting you, the story that keeps you small. His invitation is not to shame but to honesty: what have you given your power to, and is the transaction worth it?",
    love: "Is this connection freeing you or constraining you? Name, without judgment, what you are getting from this that you are afraid to live without.",
    clarity: "There is a belief operating in the background that is limiting your options more than your circumstances are. What story are you telling yourself that keeps you smaller than you need to be?",
    change: "The first step is naming what has you. Not dramatic escape — just the honest acknowledgment of the chain, and the small act of reaching up to remove it."
  },
  "The Tower": {
    archetype: "The Liberator / The Necessary Collapse",
    element: "Fire / Mars",
    shadow: "chaos for its own sake, destruction without the willingness to rebuild",
    deepMeaning: "The Tower falls because it was built on a false foundation. The lightning doesn't come to destroy; it comes to clarify. What looks like devastation is often the most efficient path to the truth. The Tower is not a punishment. It is the universe's way of saying: you cannot build what you actually want on this ground. Let it fall. Build from here.",
    love: "Something has been revealed that changes the shape of things. Honesty has arrived, invited or not. What is true now that was hidden before?",
    clarity: "The framework you've been using to understand this situation has been shown to be wrong. Don't rebuild the old structure in the rubble — look at what the collapse reveals instead.",
    change: "This change is not what you planned, but it is what is. Stop protecting what's already fallen and turn your attention to what might be built in its place."
  },
  "The Star": {
    archetype: "The Healer / The Renewed",
    element: "Air / Aquarius",
    shadow: "false hope, spiritual bypassing, using optimism to avoid the hard work of recovery",
    deepMeaning: "The Star arrives after the storm and pours herself out freely, giving without calculating, trusting that the source replenishes. She is genuine hope — not the kind that denies pain, but the kind that exists on the other side of it. The Star has seen the Tower fall. She is pouring anyway. Something in the deep self has remembered that it is fundamentally okay.",
    love: "This is a tender, healing moment. Let yourself hope again. The vulnerability of hope is not the same as naivety.",
    clarity: "After difficulty or confusion, something is opening. A quiet, clear knowing — not all the answers, but the right direction. Follow the light, even if it's small.",
    change: "You are entering a period of renewal. Receive it — rest, restore, let your faith come back at its own pace."
  },
  "The Moon": {
    archetype: "The Dreamer / The Illusionist",
    element: "Water / Pisces",
    shadow: "confusion mistaken for depth, fear pretending to be intuition, the subconscious running the show unexamined",
    deepMeaning: "The Moon illuminates without explaining. She shows the shape of things in a light that makes everything look a little uncertain — and that uncertainty is the point. Not every fear is a warning. Not everything that is true can be proven. The Moon asks: what do you know that you haven't let yourself know yet?",
    love: "Something is not fully visible in this connection. Don't rush to conclusions — let the unclear thing surface without forcing it.",
    clarity: "The confusion you're experiencing is not a problem to be solved — it is information to be listened to. What is the uncertainty trying to show you?",
    change: "Not everything about this change is visible yet. Trust the process even when you can't see the shape of it. Patience with the in-between."
  },
  "The Sun": {
    archetype: "The Child / The Radiant",
    element: "Fire / Sun",
    shadow: "performance of joy, the need for constant validation, brightness that refuses to acknowledge shadow",
    deepMeaning: "The Sun does not ask permission to shine. This is pure, uncomplicated joy — not from circumstances being perfect, but from the self being fully expressed. The Sun is vitality, success that feels good from the inside, the moment you stop performing happiness and simply have it. It is also the card of visibility: of being seen, clearly and warmly, without managing what the seeing might mean.",
    love: "This is a radiant moment — let yourself enjoy it without looking for what could go wrong. Be fully present for the warmth that is actually here.",
    clarity: "The answer here is simpler and brighter than you've been making it. What is joyfully, obviously true? Start there.",
    change: "Something that has been growing in the dark is about to come into the light. This change carries real joy in it — don't intellectualize the happiness away."
  },
  "Judgement": {
    archetype: "The Awakening / The Call",
    element: "Fire / Pluto",
    shadow: "guilt that won't release, holding others to an accounting that serves resentment more than justice",
    deepMeaning: "Judgement is the card of being called — not judged in the punishing sense, but called in the awakening sense. The figures rise not because they have been sentenced but because they have finally heard the summons that has been sounding all along. What version of yourself has been lying dormant under the weight of who you thought you had to be? This marks a profound shift — a moment when the old story releases its grip.",
    love: "A moment of reckoning in this relationship — not blame, but clarity. See the connection honestly and call forth the version of yourself capable of something truer.",
    clarity: "You are being called to a new understanding of yourself. What would you do if you truly believed you were capable of what you're being called toward?",
    change: "This is not a small change — it is a resurrection. A fundamental shift in how you see yourself and what you understand yourself to be capable of. Answer the call."
  },
  "The World": {
    archetype: "The Integrator / The Complete",
    element: "Earth / Saturn",
    shadow: "resting on past achievement instead of continuing, confusing completion with arrival",
    deepMeaning: "The World is the end of the journey — and the beginning of a new spiral. The figure at the center has moved through everything and arrived here: whole, capable, free within the circle that used to be a cage. This is the earned lightness of someone who has genuinely integrated what they have been through. Mastery, wholeness, and the quiet thrill of being ready for the next level.",
    love: "Something in this connection has reached its full expression. A completion — whether a relationship coming into its fullest form or a chapter of love that has genuinely run its course.",
    clarity: "Stop searching for the missing piece — it isn't missing. You are already whole. Act from that wholeness.",
    change: "A major cycle is completing. Honor what this chapter has made of you before you rush into the next one. Integration is part of the change."
  }
};

// ─────────────────────────────────────────────
//  MOON PHASE — atmospheric only
// ─────────────────────────────────────────────
function getMoonPhase() {
  const base = new Date('2000-01-06T18:14:00Z').getTime();
  const cycle = 29.53058867 * 24 * 3600 * 1000;
  const pct = (((Date.now() - base) % cycle) + cycle) % cycle / cycle;
  if (pct < 0.0625 || pct >= 0.9375) return { name: 'new moon', tone: 'a night of beginnings with no names yet, where the dark holds seeds' };
  if (pct < 0.1875) return { name: 'waxing crescent', tone: 'a sliver of light on its way to fullness, tender and becoming' };
  if (pct < 0.3125) return { name: 'first quarter', tone: 'the moon half-lit and moving, caught between decision and doubt' };
  if (pct < 0.4375) return { name: 'waxing gibbous', tone: 'a gathering energy, patient and accumulating toward something bright' };
  if (pct < 0.5625) return { name: 'full moon', tone: 'full illumination — everything visible tonight, even the things that preferred the dark' };
  if (pct < 0.6875) return { name: 'waning gibbous', tone: 'the slow release of what was luminous, learning to let go of the light' };
  if (pct < 0.8125) return { name: 'last quarter', tone: 'half in shadow, half in light, deciding what is worth carrying forward' };
  return { name: 'waning crescent', tone: 'the last breath of the old cycle, thinning to make room for what is next' };
}

// ─────────────────────────────────────────────
//  PASS 1 — ARC INTERPRETER
//  Silent. Returns structured JSON.
//  Identifies the emotional story before any
//  poetry is written.
// ─────────────────────────────────────────────
const ARC_SYSTEM_PROMPT = `You are a master tarot interpreter. Your job is to read three tarot cards together and identify the deeper story they tell as a unit — not three separate meanings, but one emotional arc.

You will receive card data and return ONLY valid JSON — no preamble, no explanation, no markdown fences.`;

function buildArcPrompt(cards, cardBlocks, focus, note, moon) {
  return `The seeker is asking about: ${focus || 'clarity'}.
${note ? `They shared this: "${note}"` : 'They shared no personal note.'}
The moon tonight: ${moon.tone}

THE THREE CARDS (in order: Root → Now → Path):
${cardBlocks.join('\n\n')}

Analyze these three cards together. Return ONLY this JSON structure:

{
  "arc": "One sentence naming the emotional journey these three cards make together — the through-line that connects them",
  "tension": "The central tension or conflict between the cards — what pulls against what",
  "root_insight": "What the first card (Root) is truly saying to this specific person given their focus and note",
  "now_insight": "What the second card (Now) is truly saying — and how it builds on or complicates the Root",
  "path_insight": "What the third card (Path) reveals — the landing, the invitation, the direction",
  "closing_image": "A single small, concrete, beautiful image or object that holds the whole reading — something the seeker can carry with them (NOT advice, NOT a motivational phrase — a pure image like 'a key left in an unlocked door' or 'a window just beginning to let in light')",
  "tone": "One word: tender / fierce / wistful / luminous / grounded / electric / mysterious / gentle"
}`;
}

// ─────────────────────────────────────────────
//  PASS 2 — POEM WRITER
//  Takes the arc JSON and writes a genuine
//  whimsical, lyrical poem as the reading.
// ─────────────────────────────────────────────
const POEM_SYSTEM_PROMPT = `You are Veil — the voice of a mystical, whimsical tarot reading experience. You write readings as genuine poems: lyrical, warm, rhythmic, and full of wonder.

YOUR VOICE:
- Warm, intimate, and playful — like a wise and witty friend who happens to see things others miss
- Musical — let the lines have rhythm, let rhyme arrive naturally when it wants to (ABAB, AABB, loose couplets — whatever the poem calls for)
- Whimsical but not silly — think Mary Oliver meeting a fortune-teller, or Rumi with a sense of humor
- Second person ("you," "your") — always speaking directly to the seeker
- Specific and concrete — never vague or generic

YOUR POEM:
- 4 stanzas, each 3–5 lines
- Stanza 1: Opening — set the atmosphere, name the feeling of the whole reading without introducing cards yet
- Stanza 2: The Root card (use its actual name) — what it's seeing in this person's situation
- Stanza 3: The Now card and Path card woven together — show how they speak to each other
- Stanza 4: Closing seal — end with the closing image, or a gentle question, or a permission. NEVER advice. NEVER a pep talk. NEVER "trust yourself" or "keep going" or "you've got this."

RULES:
- Use each card's actual name at least once (e.g. "The Lovers," "The Hermit") — weave it in naturally, never as a label
- Rhyme when it feels right — at least two rhyming pairs per poem
- Each line should be able to stand alone as a beautiful sentence
- If there is a personal note, the seeker should recognize themselves in the poem — speak to their specific situation
- No more than 180 words total
- No headers, no labels, no card numbers, no position names`;

function buildPoemPrompt(arc, cards, note, moon) {
  return `Here is the interpreted arc for this reading:

Arc: ${arc.arc}
Tension: ${arc.tension}
Moon tonight: ${moon.tone}

What the Root card (${cards[0]}) is saying: ${arc.root_insight}
What the Now card (${cards[1]}) is saying: ${arc.now_insight}
What the Path card (${cards[2]}) is saying: ${arc.path_insight}
Closing image to weave in: ${arc.closing_image}
Emotional tone: ${arc.tone}

${note ? `The seeker shared: "${note}" — make sure they recognize themselves in this poem.` : ''}

Now write the reading as a poem. 4 stanzas. Lyrical, whimsical, warm. Use the card names naturally. Let it rhyme where rhyme is beautiful. End with the closing image or a question — never advice.`;
}

// ─────────────────────────────────────────────
//  EDGE HANDLER
// ─────────────────────────────────────────────
export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { cards, focus, note } = body;

    if (!cards || !Array.isArray(cards) || cards.length !== 3) {
      return new Response(JSON.stringify({ error: 'Three cards required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const moon = getMoonPhase();

    // Build card data blocks for both passes
    const cardBlocks = cards.map((cardName, i) => {
      const data = CARD_DATA[cardName];
      const posLabels = ['Root (foundation / origin)', 'Now (present moment / challenge)', 'Path (direction / invitation)'];
      if (!data) return `${posLabels[i]}: ${cardName}\nMeaning: traditional tarot meaning applies`;
      const angle = focus === 'love' ? data.love : focus === 'change' ? data.change : data.clarity;
      return `${posLabels[i]}: ${cardName}
  Archetype: ${data.archetype}
  Element: ${data.element}
  Core meaning: ${data.deepMeaning}
  Shadow: ${data.shadow}
  Angle for "${focus || 'clarity'}": ${angle}`;
    });

    const apiCall = async (system, userMsg, maxTokens = 600) => {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: maxTokens,
          temperature: 0.85,
          top_p: 0.95,
          system,
          messages: [{ role: 'user', content: userMsg }]
        })
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`API error ${res.status}: ${err}`);
      }
      const data = await res.json();
      return data.content?.[0]?.text || '';
    };

    // ── PASS 1: Interpret the arc ──
    const arcRaw = await apiCall(
      ARC_SYSTEM_PROMPT,
      buildArcPrompt(cards, cardBlocks, focus, note, moon),
      500
    );

    let arc;
    try {
      const cleaned = arcRaw.replace(/```json|```/g, '').trim();
      arc = JSON.parse(cleaned);
    } catch {
      // If JSON parse fails, create a fallback arc and continue to pass 2
      arc = {
        arc: `A journey through ${cards[0]}, ${cards[1]}, and ${cards[2]}`,
        tension: "the pull between what was and what is becoming",
        root_insight: `${cards[0]} speaks to the foundation of this moment`,
        now_insight: `${cards[1]} reveals what is alive and moving right now`,
        path_insight: `${cards[2]} points toward what is possible`,
        closing_image: "a door left slightly open in a quiet room",
        tone: "tender"
      };
    }

    // ── PASS 2: Write the poem ──
    let poem = await apiCall(
      POEM_SYSTEM_PROMPT,
      buildPoemPrompt(arc, cards, note, moon),
      900
    );

    // Retry if poem is too short
    if (poem.trim().length < 150) {
      poem = await apiCall(
        POEM_SYSTEM_PROMPT,
        buildPoemPrompt(arc, cards, note, moon),
        900
      );
    }

    return new Response(JSON.stringify({ reading: poem, moon: moon.name }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    });

  } catch (err) {
    console.error('Veil reading error:', err);
    return new Response(JSON.stringify({ error: 'The cards are quiet right now. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}
