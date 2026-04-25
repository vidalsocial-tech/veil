export const config = { runtime: 'edge' };

// ─────────────────────────────────────────────
//  DEEP CARD DATA — 22 Major Arcana
//  Each card carries: archetype, element, shadow,
//  deepMeaning, and three intention-specific angles.
// ─────────────────────────────────────────────
const CARD_DATA = {
  "The Fool": {
    archetype: "The Innocent / The Beginner",
    element: "Air",
    shadow: "recklessness, avoidance of consequence, refusing to grow up",
    deepMeaning: "The Fool stands at the edge before the edge knows it is an edge. This is the card of pure potential — the moment before the story begins, when anything is still possible because nothing has been chosen yet. It carries the lightness of someone who has not yet learned to be afraid, and that lightness is not naivety — it is courage wearing casual clothes. The Fool asks you to step forward without a map, trusting that the ground will rise to meet your foot.",
    love: "Something new is asking to be let in — don't audit it to death before it has a chance to breathe. The Fool in love means first steps, open hands, the willingness to look a little ridiculous for something real.",
    clarity: "The answer you're circling isn't in the analysis — it's in the leap. Stop rehearsing and begin. The Fool says the first move is never wasted, even when it's wrong.",
    change: "You are standing at the very start of something. Don't try to see the whole road. The Fool's gift is momentum — the willingness to move before you're ready."
  },
  "The Magician": {
    archetype: "The Alchemist / The Craftsman",
    element: "Air / Mercury",
    shadow: "manipulation, using power to control others, all skill and no soul",
    deepMeaning: "The Magician has every tool on the table and knows exactly what each one is for. This is not magic as mystery — it is magic as mastery: the deep knowledge that what exists inside you is sufficient for what is required outside you. The Magician doesn't wait for resources; they look at what they already hold and begin transmuting. The real trick isn't making something appear from nothing — it's recognizing that nothing was ever absent.",
    love: "You have more to offer than you are currently offering. The Magician in love calls for full presence — bring all of yourself, not just the polished parts.",
    clarity: "Everything you need to move forward is already in your hands. Stop waiting for better conditions. The Magician says: the tools are here, the moment is now, the only missing ingredient is action.",
    change: "You are more capable of shaping this situation than you believe. The Magician is the card of agency — step into yours without apology."
  },
  "The High Priestess": {
    archetype: "The Oracle / The Keeper of Secrets",
    element: "Water / Moon",
    shadow: "secrets kept to maintain power, withdrawal as avoidance, coldness mistaken for wisdom",
    deepMeaning: "The High Priestess knows what she knows by sitting still long enough for it to surface. She is the space between words, the pause before the answer, the part of you that already understands before the mind has finished its argument. She holds contradiction without collapsing it — she can love something and let it go, want something and wait for it. Her wisdom does not shout. It is deposited quietly in the body, in dreams, in the moments just before sleep.",
    love: "Something in this relationship is asking to be felt rather than figured out. Trust what your body knows before your reasoning catches up. The High Priestess sees clearly when you stop trying to see.",
    clarity: "The answer you want is not in more information — it is in stillness. Sit with the question. Don't force the conclusion. What surfaces without effort is what is true.",
    change: "Not all movement is visible. Something is shifting underneath the surface of this situation — trust the process even when you cannot see the progress."
  },
  "The Empress": {
    archetype: "The Mother / The Creative Force",
    element: "Earth / Venus",
    shadow: "smothering, over-giving until empty, mistaking abundance for love",
    deepMeaning: "The Empress is the living proof that creation is the most natural thing in the world. She grows things without trying hard — gardens, children, ideas, warmth — because she is made of the same stuff as the earth that makes anything possible. She is sensual, generous, and completely at home in her body. The Empress teaches that abundance is not a reward; it is a state of being. She invites you to stop earning your ease and simply inhabit it.",
    love: "Love here is ripe and ready. The Empress in love means nourishment — give it freely, receive it without deflecting, and trust that care doesn't run out when it comes from a full place.",
    clarity: "This situation calls for patience and tending, not forcing. The Empress says: water the thing you want to grow and then step back. Some answers ripen in their own time.",
    change: "You are in a fertile season. What you plant now has unusual growing power. The Empress is not a card of waiting — she is a card of active, loving cultivation."
  },
  "The Emperor": {
    archetype: "The Father / The Architect",
    element: "Fire / Aries",
    shadow: "rigidity, control masquerading as protection, love expressed only through authority",
    deepMeaning: "The Emperor built something real. His power is not inherited or performed — it is earned through showing up, making decisions, and living with their consequences. He is the one who holds the structure so others can move freely within it. The Emperor asks where in your life you are called to be the stable one, the decided one, the person who can say 'this is how it will be' with enough steadiness that others can breathe. His gift is not dominance. It is reliability.",
    love: "This relationship may need more structure, not more feeling. The Emperor in love asks: what are the agreements here? What is stable and what is vague? Clarity is a form of care.",
    clarity: "A decision is waiting to be made — stop deliberating and commit. The Emperor says that half-choices are more exhausting than wrong ones. Choose, and adjust from there.",
    change: "Build the foundation before building the house. The Emperor is here to remind you that lasting change requires architecture — what are the rules, the rhythms, the non-negotiables?"
  },
  "The Hierophant": {
    archetype: "The Teacher / The Tradition-Keeper",
    element: "Earth / Taurus",
    shadow: "dogma, following rules out of fear, teaching what you don't believe",
    deepMeaning: "The Hierophant holds the long memory of what has been learned by those who came before. He is not asking you to obey — he is asking you to consider whether the tradition has something in it worth keeping before you throw it out. Equally, he asks whether the tradition you've been handed is yours or someone else's. The Hierophant's deepest lesson is about the difference between inherited belief and chosen belief. What do you actually think? What do you actually know to be true?",
    love: "Look at the patterns that were handed to you — the models of love you grew up watching. Are they serving you or running you? The Hierophant in love asks you to examine what you were taught about connection.",
    clarity: "There is wisdom in the tried path. Before you innovate your way out of this, check whether the conventional answer might simply be correct. Sometimes the tradition is tradition because it works.",
    change: "Ask whose rules you are following and whether you chose them. The Hierophant calls for a review of your operating beliefs — keep what is genuinely yours, release what was handed to you unexamined."
  },
  "The Lovers": {
    archetype: "The Union / The Choice",
    element: "Air / Gemini",
    shadow: "choosing based on fear, giving yourself up to keep the peace, mistaking chemistry for compatibility",
    deepMeaning: "The Lovers is not simply a love card — it is a card of alignment. It appears when you are standing at a crossroads that requires you to choose not just between options but between versions of yourself. The relationship in this card is the most revealing one possible: the relationship between who you are and who you want to become. Every real choice carries this weight. The Lovers asks: which version of yourself does this path call forward, and is that the one you want to be?",
    love: "This is either a deepening or a decision — possibly both. The Lovers asks whether you are in full alignment with what this connection is asking of you. Choose with your whole self, not just your longing.",
    clarity: "There are two clear paths here. They are not equally good or equally bad — they lead to different lives. The Lovers says: stop stalling and choose the one whose consequences you can live with honestly.",
    change: "A significant choice is the engine of this change. The Lovers reminds you that no one can make this decision for you — and that choosing is itself a form of freedom."
  },
  "The Chariot": {
    archetype: "The Victor / The Willful One",
    element: "Water / Cancer",
    shadow: "forcing outcomes, confusing momentum with direction, winning the wrong thing",
    deepMeaning: "The Chariot moves. Not because the road is clear, not because the conditions are perfect, but because the will inside it is stronger than the resistance in front of it. This is the card of directed force — the kind that doesn't come from ignoring obstacles but from holding two opposing forces (the light and the dark, the yes and the no) in tension long enough to drive them forward together. The Chariot teaches that victory is not the absence of conflict. It is the intelligent, disciplined use of it.",
    love: "Don't let inertia run this relationship. The Chariot in love calls for direction — what are you building toward? Moving forward together requires that both people know where forward is.",
    clarity: "You have more power here than you are using. Stop waiting for the situation to resolve itself and drive it. The Chariot says: take the wheel.",
    change: "The momentum is available — you just have to commit to a direction and go. Half-hearted movement won't work here. The Chariot asks for full forward motion."
  },
  "Strength": {
    archetype: "The Gentle Brave / The Tamer",
    element: "Fire / Leo",
    shadow: "repression disguised as strength, enduring what should be refused, losing yourself to keep others comfortable",
    deepMeaning: "Strength does not subdue the lion — she befriends it. This card shows a kind of courage that doesn't look like courage from the outside: the quiet, consistent refusal to be ruled by fear, by rage, by the desperate need for approval. It is the power of someone who has met their own darkness and chosen to work with it rather than wrestle it into submission. Strength is patient. It is generous. It does not grip — it holds.",
    love: "There is a tenderness here that should not be mistaken for softness. Strength in love means staying present when presence is hard, and drawing boundaries not in anger but in deep self-knowledge.",
    clarity: "The thing you think is your weakness might be your greatest power in disguise. Strength asks you to look again at what you've been trying to fix or hide — is it actually the very thing that makes you whole?",
    change: "This change doesn't require force. It requires constancy. Show up for it the same way, day after day, with steady hands and an open heart. That is what strength looks like in motion."
  },
  "The Hermit": {
    archetype: "The Seeker / The Lantern-Bearer",
    element: "Earth / Virgo",
    shadow: "isolation as avoidance, wisdom hoarded rather than shared, mistaking withdrawal for enlightenment",
    deepMeaning: "The Hermit has walked a long way to find out what is actually true, as opposed to what he was told was true. His lantern only illuminates a few steps ahead — not the whole road, just enough to take the next step with honesty. He is the card of internal reckoning: the deep solitude that is not loneliness but discernment. The Hermit asks you to stop consulting the crowd and to go inside instead. Not forever. Just long enough to hear what your own voice has been trying to say.",
    love: "Some of what you are seeking from another person can only be found within yourself first. The Hermit in love asks: what do you need to understand about yourself before you can be fully present for someone else?",
    clarity: "The answer won't come from more input — it will come from less. Quiet the advisors, close the tabs, and sit with what you already know. The Hermit's light is small but it is honest.",
    change: "This is a season for inward movement. Before you rebuild externally, the Hermit asks you to do the internal work — what beliefs, what wounds, what old stories need to be looked at honestly before you can move freely?"
  },
  "Wheel of Fortune": {
    archetype: "The Turning / The Cyclic Truth",
    element: "Fire / Jupiter",
    shadow: "fatalism, abdicating responsibility by calling everything fate, refusing to act because 'it's all up to the universe'",
    deepMeaning: "The Wheel is always turning, and the revelation of this card is that you are not stuck — you are in motion. What looks like an ending is a rotation. What looks like a loss of control is the natural rhythm of a life that is actually alive. The Wheel of Fortune does not promise that the spin will go your way; it promises that a spin is coming. The question is whether you ride it consciously or get spun. Fate is real, but so is the stance you take toward it.",
    love: "Something is shifting in the dynamic of this connection — a cycle is completing or beginning. Ride the change with open hands rather than gripping what was.",
    clarity: "Timing is everything right now. The Wheel says: something is coming into alignment that was out of alignment before. Be ready to move when the moment opens.",
    change: "You are already in motion — the change has begun whether you have named it yet or not. The Wheel of Fortune asks you to stop resisting the turn and start working with it."
  },
  "Justice": {
    archetype: "The Adjudicator / The Honest Mirror",
    element: "Air / Libra",
    shadow: "harsh judgment without mercy, using fairness as a weapon, holding others to standards you won't hold yourself",
    deepMeaning: "Justice sees clearly. Not cruelly — clearly. She is not asking you to punish yourself or anyone else; she is asking you to look without flinching at what is actually true about this situation. The scales she holds are not there to condemn — they are there to calibrate. Justice is the card of cause and consequence, of honest accounting, of the relief that comes when you stop pretending and simply see. The truth, when you let it land, is usually less terrible than the effort of avoiding it.",
    love: "There is something in this relationship that needs to be named honestly rather than managed carefully. Justice in love asks for full transparency — with yourself first, and then with the other person.",
    clarity: "Look at the facts without the story you've layered on top of them. Justice asks you to separate what is true from what you fear is true. They are not the same thing.",
    change: "A reckoning is available here — not a punishment, but a recalibration. Justice asks: what needs to be honestly acknowledged before real change can begin?"
  },
  "The Hanged Man": {
    archetype: "The Willing Sacrifice / The Perspective Shifter",
    element: "Water / Neptune",
    shadow: "martyrdom, suffering that has become an identity, refusing to act because waiting feels like wisdom",
    deepMeaning: "The Hanged Man hangs by choice. This is the strange, uncomfortable gift of this card: the pause that is not passivity but the most active kind of stillness — the willingness to stay suspended long enough for a different view to become available. He has let go of the normal orientation, and in doing so, the world has rearranged itself into a shape he couldn't have seen from where he was standing before. The Hanged Man asks: what would become possible if you stopped insisting on the old frame?",
    love: "This is a moment to stop and feel before you decide or explain or fix. The Hanged Man in love asks you to let the situation teach you something before you respond to it.",
    clarity: "The perspective shift you need won't come from thinking harder in the same direction. Let yourself be upside-down for a moment. The answer you've been missing is visible from a different angle.",
    change: "This is not the time for action. It is the time for integration. The Hanged Man asks you to wait — not out of fear, but out of the earned patience of someone who knows that rushing will cost more than waiting."
  },
  "Death": {
    archetype: "The Transformer / The Threshold",
    element: "Water / Scorpio",
    shadow: "refusing necessary endings, clinging to what is already gone, mistaking the ending for the loss",
    deepMeaning: "Death in tarot is never about dying — it is about the courage to let something end completely so something new can begin completely. Not a half-ending, not a partial release, but the full and honest acknowledgment that this chapter is over. The skeleton on the horse is not a villain; he is a liberator. What he comes to take has usually been ready to go for some time — the grief is real, but underneath it is spaciousness. Death is the card of profound transformation, and all profound transformation requires a real goodbye.",
    love: "Something in this dynamic is ending or needs to end — a pattern, a version of the relationship, possibly the relationship itself. Death in love is not easy, but it is honest. What needs to be released so that what remains can be real?",
    clarity: "Stop trying to keep alive what is ready to be released. The clarity you're seeking is on the other side of the ending you've been postponing.",
    change: "This change is not cosmetic — it is structural. Death asks you to let go of the old form completely and trust that what grows in the cleared ground will be worth it."
  },
  "Temperance": {
    archetype: "The Alchemist / The Integration",
    element: "Fire / Sagittarius",
    shadow: "endless moderation as avoidance of real commitment, blending everything until nothing has flavor",
    deepMeaning: "Temperance stands at the edge of two worlds, pouring liquid from one vessel to another, watching for the precise moment when the mixture becomes something neither container could hold alone. This is the card of integration — of blending the opposites within you rather than choosing between them. The angel is not temperate in the sense of tame; she is temperate in the sense of perfectly calibrated. Temperance asks: what in your life is being asked to flow more freely between two states that have been kept separate?",
    love: "The balance here is not about keeping score — it's about allowing two different people to genuinely meet in the middle. Temperance in love asks for patience, flexibility, and the willingness to be changed by the mixing.",
    clarity: "Don't choose between the two things pulling at you — find the synthesis. Temperance says the answer isn't on either side of the tension; it's in the space between them.",
    change: "Slow is the right speed here. Don't rush the integration. Temperance asks you to let the change happen at the pace it needs, trusting that the gradual blend is making something that the quick fix never could."
  },
  "The Devil": {
    archetype: "The Shadow / The Enchainer",
    element: "Earth / Capricorn",
    shadow: "addiction, self-deception, the chain that could be slipped but hasn't been because the comfort is familiar",
    deepMeaning: "The Devil holds no real power that has not been handed to him. The chains in this card hang loosely around the figures' necks — they could be removed at any moment, and yet they remain. The Devil is the card of the comfortable prison: the habit you know is hurting you, the story you keep telling that keeps you small, the relationship or substance or pattern that offers relief while it takes from you. His invitation is not to shame but to honesty: what have you given your power to, and is the transaction actually worth it?",
    love: "Look honestly at the dynamic here — is this a connection that frees you or one that constrains you? The Devil in love asks you to name, without judgment, what you are getting from this that you are afraid to live without.",
    clarity: "There is a belief operating in the background that is limiting your options more than your circumstances are. The Devil asks: what story are you telling yourself that is keeping you smaller than you need to be?",
    change: "The first step is naming what has you. The Devil doesn't ask for dramatic escape — just the honest acknowledgment of the chain, and the small act of reaching up to remove it."
  },
  "The Tower": {
    archetype: "The Liberator / The Necessary Collapse",
    element: "Fire / Mars",
    shadow: "chaos for its own sake, destruction without the willingness to rebuild, the ego that falls but refuses to learn",
    deepMeaning: "The Tower falls because it was built on a false foundation. This is the card of the sudden revelation — the moment when the structure that has been holding you in a particular shape can no longer sustain the lie it was built on. The lightning doesn't come to destroy; it comes to clarify. What looks like devastation is often the most efficient path to the truth. The Tower is not a punishment. It is the universe's way of saying: you cannot build what you actually want on this ground. Let it fall. Build from here.",
    love: "Something has been revealed — in the relationship or in yourself — that changes the shape of things. The Tower in love means honesty has arrived, invited or not. What is true now that was hidden before?",
    clarity: "The framework you've been using to understand this situation has just been shown to be wrong. The Tower asks you not to rebuild the old structure in the rubble — look at what the collapse reveals instead.",
    change: "This change is not what you planned, but it is what is. The Tower asks for the courage to stop protecting what's already fallen and to turn your attention to what might be built in its place."
  },
  "The Star": {
    archetype: "The Healer / The Renewed",
    element: "Air / Aquarius",
    shadow: "false hope, spiritual bypassing, using optimism to avoid the hard work of recovery",
    deepMeaning: "The Star arrives after the storm has passed and pours herself out freely, giving without calculating, trusting that the source replenishes. She is the card of genuine hope — not the kind that denies pain, but the kind that exists on the other side of it. The Star has seen the Tower fall. She is pouring anyway. This card marks a return of faith, not because everything is fixed but because something in the deep self has remembered that it is fundamentally okay. Rest in that. Let yourself be renewed.",
    love: "This is a tender, healing moment — in yourself or between you and another person. The Star in love says: let yourself hope again. The vulnerability of hope is not the same as naivety.",
    clarity: "After a period of difficulty or confusion, something is opening. The Star offers a quiet, clear knowing — not all the answers, but the right direction. Follow the light, even if it's small.",
    change: "You are entering a period of renewal. The Star asks you to receive it — rest, restore, let your faith come back at its own pace. The change that's coming will require a replenished version of you."
  },
  "The Moon": {
    archetype: "The Dreamer / The Illusionist",
    element: "Water / Pisces",
    shadow: "confusion mistaken for depth, fear that pretends to be intuition, the subconscious running the show unexamined",
    deepMeaning: "The Moon illuminates without explaining. She shows you the shape of things in a light that makes everything look a little uncertain — and that uncertainty is the point. The Moon is the card of the unconscious mind, of the fear that walks at night, of the dream logic that knows more than it can say. She asks you to move through the unclear landscape without demanding that it become clear too quickly. Not everything that is true can be proven. Not every fear is a warning. The Moon asks: what do you know that you haven't let yourself know yet?",
    love: "Something is not fully visible in this connection — either within yourself or in the dynamic between you. The Moon in love asks you not to rush to conclusions, but to let the unclear thing surface without forcing it.",
    clarity: "The confusion you're experiencing is not a problem to be solved — it is information to be listened to. The Moon says: sit with the uncertainty. What is it trying to show you?",
    change: "Not everything about this change is visible yet. Trust the process even when you can't see the shape of it. The Moon asks for faith in the unseen, and patience with the in-between."
  },
  "The Sun": {
    archetype: "The Child / The Radiant",
    element: "Fire / Sun",
    shadow: "performance of joy, the need for constant validation, brightness that refuses to acknowledge shadow",
    deepMeaning: "The Sun does not ask permission to shine. It simply does. This card carries the energy of pure, uncomplicated joy — the kind that doesn't come from circumstances being perfect, but from the self being fully expressed. The Sun is the card of vitality, of success that feels good from the inside, of the moment when you stop performing happiness and simply have it. It is also the card of visibility: of being seen, clearly and warmly, without having to manage what the seeing might mean.",
    love: "This is a radiant moment — let yourself enjoy it without looking for what could go wrong. The Sun in love asks you to be fully present for the warmth that is actually here.",
    clarity: "The answer here is simpler and brighter than you've been making it. The Sun cuts through the complexity. What is joyfully, obviously true? Start there.",
    change: "Something that has been growing in the dark is about to come into the light. The Sun says: let it. This change carries real joy in it — don't intellectualize the happiness away."
  },
  "Judgement": {
    archetype: "The Awakening / The Call",
    element: "Fire / Pluto",
    shadow: "guilt that won't release, holding others to an accounting that serves resentment more than justice",
    deepMeaning: "Judgement is the card of being called — not judged in the punishing sense, but called in the awakening sense. The figures in this card rise from their graves not because they have been sentenced but because they have finally heard the summons that has been sounding all along. Judgement asks: what have you been waiting to become? What version of yourself has been lying dormant under the weight of who you thought you had to be? This card marks a profound shift in self-understanding — a moment when the old story releases its grip.",
    love: "There is a moment of reckoning in this relationship — not blame, but clarity. Judgement in love asks you to see the connection honestly and to call forth the version of yourself (and possibly the other person) that is capable of something truer.",
    clarity: "You are being called to a new understanding of yourself. Judgement asks: what would you do if you truly believed you were capable of what you're being called toward?",
    change: "This is not a small change — it is a resurrection. Judgement marks a fundamental shift in how you see yourself and what you understand yourself to be capable of. Answer the call."
  },
  "The World": {
    archetype: "The Integrator / The Complete",
    element: "Earth / Saturn",
    shadow: "resting on past achievement instead of continuing, confusing completion with arrival",
    deepMeaning: "The World is the end of the journey — and the beginning of a new spiral. The figure at the center has moved through everything: the innocence of the Fool, the trials and revelations of all the archetypes between, and arrived here — whole, capable, free within the circle that used to be a cage. The World is the card of completion that carries wisdom. Not the naive lightness of the Fool but the earned lightness of someone who has genuinely integrated what they have been through. This is mastery, wholeness, and the quiet thrill of being ready for the next level.",
    love: "Something in this connection has reached its full expression. The World in love marks a completion — whether that is a relationship coming into its fullest form or a chapter of love that has genuinely run its course.",
    clarity: "You have more than enough to work with. The World says: stop searching for the missing piece — it isn't missing. You are already whole. Act from that wholeness.",
    change: "A major cycle is completing. The World asks you to honor what this chapter has made of you before you rush into the next one. Integration is part of the change."
  }
};


// ─────────────────────────────────────────────
//  MOON PHASE — atmospheric texture only
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
const ARC_SYSTEM_PROMPT = `You are a master tarot poet and reader. Your job is to read three tarot cards together and find the single emotional story they tell — not three meanings, but one living arc.

Write your insights in POETIC LANGUAGE — short, imagistic phrases and sentences, not summaries. Think in metaphors. Write the way a wise, warm poet would speak, not the way a reference book would explain.

Return ONLY valid JSON. No preamble, no explanation, no markdown fences.`;

function buildArcPrompt(cards, cardBlocks, focus, note, moon) {
  const c0 = cards[0], c1 = cards[1], c2 = cards[2];
  const arcJSON = `{
  "arc": "One lyrical sentence naming the emotional journey — write like a poet, e.g. 'a long solitude cracking open into the question of what to believe' not 'a journey of self-discovery'",
  "tension": "The living friction between the cards as a poetic image — e.g. 'the lantern that lights only one step, and the doctrine that promises the whole road'",
  "root_insight": "2-3 poetic sentences spoken directly to the seeker about what ${c0} is showing them. Use a metaphor. Do not summarize — make it feel personal and alive.",
  "now_insight": "2-3 poetic sentences spoken directly to the seeker about what ${c1} is bringing right now — how it stirs or unsettles what came before. Specific to their situation.",
  "path_insight": "2-3 poetic sentences spoken directly to the seeker about what ${c2} is opening — the direction, the invitation, the thing they can lean toward.",
  "closing_image": "One single physical image — utterly concrete, no explanation. Small and real. RIGHT register: 'a match struck in a windowless room', 'a tide that turned without asking permission', 'a key still warm from someone else hand'. NEVER advice. Just the image itself.",
  "tone": "Exactly one word: tender / fierce / wistful / luminous / grounded / electric / mysterious / gentle"
}`;

  return `The seeker is asking about: ${focus || 'clarity'}.
${note ? `They shared this: "${note}"` : 'They shared no personal note.'}
The moon tonight: ${moon.tone}

THE THREE CARDS (in order: Root to Now to Path):
${cardBlocks.join('\n\n')}

Read these three cards as one living story. Write every field in poetic, imagistic language — not analytical summaries. Speak directly to the seeker in second person, present tense.

Return ONLY valid JSON matching this shape exactly (fill in the values, not these descriptions):
${arcJSON}`;
}

// ─────────────────────────────────────────────
//  PASS 2 — POEM WRITER
//  Takes the arc JSON and writes a genuine
//  whimsical, lyrical poem as the reading.
// ─────────────────────────────────────────────
const POEM_SYSTEM_PROMPT = [
  "You are Veil — the voice of a mystical tarot reading experience. You write readings as genuine poems: lyrical, warm, rhythmic, and full of wonder. You speak directly to the seeker in second person. You never explain — you evoke.",
  "",
  "---",
  "EXAMPLE READINGS — match this voice exactly",
  "---",
  "",
  "EXAMPLE 1 — Cards: The Hermit, The Moon, The Hierophant / Focus: clarity",
  "",
  "Something in you has been walking a long time,",
  "lantern in hand, through country with no name —",
  "The Hermit knows the mountain is the climb,",
  "that the quiet and the cold are not the same.",
  "",
  "Then The Moon arrived and muddied what was clear,",
  "turned the certain path to water, stone to dream —",
  "not every shape that moves out there is fear,",
  "not every fear is warning what it seems.",
  "",
  "The Hierophant waits patient at the edge,",
  "not offering doctrine — offering a door.",
  "He asks what you would carve into the ledge",
  "if no one else was watching anymore.",
  "",
  "The lantern was always yours to carry home.",
  "What truth, of all you've found, is worth the keeping?",
  "",
  "---",
  "",
  "EXAMPLE 2 — Cards: The Lovers, The Tower, The Star / Focus: love",
  "",
  "You built the whole cathedral out of wanting,",
  "and love will do that — make a church of air.",
  "The Lovers asked a choice worth haunting,",
  "the kind that asks which version of you dares.",
  "",
  "Then The Tower came the way that lightning does —",
  "not cruel, just honest, burning through the frame.",
  "What fell was what could never hold, because",
  "the ground beneath the promise wasn't sound.",
  "",
  "But here is The Star, still pouring in the dark,",
  "still giving without counting what she spends.",
  "She's seen the wreckage — she is pouring anyway,",
  "and hope that comes through ruin never ends.",
  "",
  "The sky has more room in it now than before.",
  "Is there something you've been afraid to want?",
  "",
  "---",
  "",
  "EXAMPLE 3 — Cards: The Fool, Strength, The World / Focus: change",
  "",
  "There's a door at the edge of everything you know,",
  "and you've been standing at it — coat on, bags half-packed.",
  "The Fool doesn't wait for the road to show —",
  "the leap itself is what the leap attracts.",
  "",
  "Strength walked beside you, quiet all this time,",
  "not forcing, not performing — holding ground.",
  "She tamed the lion not with rage but rhyme,",
  "the steady love that circles back around.",
  "",
  "The World arrives and she is dancing, free,",
  "inside the wreath of all she's moved through whole.",
  "Not finished — just complete, the way a sea",
  "is every wave it ever was, in full.",
  "",
  "You are not at the beginning anymore.",
  "What does it feel like to have actually arrived?",
  "",
  "",
  "---",
  "",
  "EXAMPLE 4 — Cards: The Tower, Death, The Star / Focus: change",
  "",
  "You thought the walls were holding you up.",
  "You did not know they were also holding you in —",
  "The Tower fell the way the body finally exhales",
  "after holding a breath it never meant to keep.",
  "",
  "And Death came not with violence but with patience,",
  "the way winter arrives: thorough, and done.",
  "What you carried is lighter now. What you loved",
  "that was real is still here. What was performance — gone.",
  "",
  "The Star doesn't ask what happened.",
  "She pours. She was always going to pour.",
  "Something in you that you thought you had lost",
  "has been waiting just past the smoke, on the other side of the door.",
  "",
  "A window left open through the whole storm.",
  "",
  "---",
  "",
  "EXAMPLE 5 — Cards: The High Priestess, The Empress, The Lovers / Focus: love",
  "",
  "There is a knowing in you that arrived before the question did,",
  "quiet and certain as water finding its level —",
  "The High Priestess has been sitting at the edge of you,",
  "waiting for the noise to finally thin.",
  "",
  "The Empress leans into the garden of this.",
  "She is not interested in earning or explaining love —",
  "she wants to know if you can receive it without deflecting,",
  "if you can let something ripe stay ripe without reaching for a reason to drop it.",
  "",
  "The Lovers is not asking whether you love them.",
  "It is asking whether you love the version of yourself this calls forward —",
  "whether the you inside this choice is someone you'd want to be.",
  "",
  "A door that opens from the inside.",
  "",
  "---",
  "",
  "YOUR POEM RULES:",
  "- 4 stanzas, 3-5 lines each, max 190 words total",
  "- Stanza 1: Open with atmosphere — name the emotional weather of the whole spread before any card is named",
  "- Stanzas 2 and 3: Weave all three cards through these two stanzas in whatever order feels most natural and alive — do NOT assign one card mechanically to each stanza. Let the story decide where each card appears.",
  "- Stanza 4: The closing seal. End the last line with the CLOSING IMAGE from the arc — use it almost word for word. Never soften it into advice. Never replace it with a pep talk.",
  "- Use each card's actual name at least once, woven in naturally — never as a position label",
  "- Rhyme when it's beautiful — aim for at least two rhyming pairs, but never force a rhyme that kills the meaning",
  "- If there is a personal note, the seeker must recognize their specific situation in the poem — not generic themes, their actual words reflected back",
  "- No headers. No labels. No card numbers. No \"the first card\" or \"the third card\"",
  "- FORBIDDEN closing lines: \"trust yourself\", \"keep going\", \"you've got this\", \"be gentle with yourself\", \"the journey is yours\", \"honor your feelings\""
].join("\n");

function buildPoemPrompt(arc, cards, note, moon) {
  return `Here is the interpreted arc for this reading. Use this material as the soul of the poem — not as a script to follow line by line.

Arc: ${arc.arc}
Tension: ${arc.tension}
Moon tonight: ${moon.tone}

${cards[0]}: ${arc.root_insight}
${cards[1]}: ${arc.now_insight}
${cards[2]}: ${arc.path_insight}

CLOSING IMAGE — end your final stanza with this, almost word for word:
"${arc.closing_image}"

Emotional tone: ${arc.tone}

${note ? `The seeker shared: "${note}" — their specific situation must be recognizable in the poem. Not the theme — their actual words, reflected back in image and feeling.` : ''}

Now write the reading as a poem in the exact voice of the 5 examples above. 4 stanzas. Lyrical, whimsical, warm, and specific. Use each card's name woven in naturally. Let it rhyme where rhyme is beautiful. The last line of the poem must be (or very closely echo) the closing image above — stated plainly, with no explanation attached.`;
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

    // Build deep card blocks for Pass 1
    const cardBlocks = cards.map((cardName, i) => {
      const data = CARD_DATA[cardName];
      const posLabels = ['Root (foundation / origin)', 'Now (present moment / challenge)', 'Path (direction / invitation)'];
      if (!data) return `${posLabels[i]}: ${cardName}\nMeaning: use traditional tarot meaning`;
      const angle = focus === 'love' ? data.love : focus === 'change' ? data.change : data.clarity;
      return `${posLabels[i]}: ${cardName}
  Archetype: ${data.archetype}
  Element: ${data.element}
  Core meaning: ${data.deepMeaning}
  Shadow: ${data.shadow}
  Angle for "${focus || 'clarity'}": ${angle}`;
    });

    const apiCall = async (system, userMsg, maxTokens) => {
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
          temperature: 0.88,
          top_p: 0.95,
          system,
          messages: [{ role: 'user', content: userMsg }]
        })
      });
      if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
      const data = await res.json();
      return data.content?.[0]?.text || '';
    };

    // ── PASS 1: Silently interpret the arc ──
    const arcRaw = await apiCall(
      ARC_SYSTEM_PROMPT,
      buildArcPrompt(cards, cardBlocks, focus, note, moon),
      500
    );

    let arc;
    try {
      arc = JSON.parse(arcRaw.replace(/```json|```/g, '').trim());
    } catch {
      arc = {
        arc: `A journey through ${cards[0]}, ${cards[1]}, and ${cards[2]}`,
        tension: 'the pull between what was and what is becoming',
        root_insight: `${cards[0]} speaks to the foundation of this moment`,
        now_insight: `${cards[1]} reveals what is alive and moving right now`,
        path_insight: `${cards[2]} points toward what is possible`,
        closing_image: 'a door left slightly open in a quiet room',
        tone: 'tender'
      };
    }

    // ── PASS 2: Write the poem ──
    let reading = await apiCall(
      POEM_SYSTEM_PROMPT,
      buildPoemPrompt(arc, cards, note, moon),
      900
    );

    // Retry if too short
    if (reading.trim().length < 120) {
      reading = await apiCall(
        POEM_SYSTEM_PROMPT,
        buildPoemPrompt(arc, cards, note, moon),
        900
      );
    }

    return new Response(JSON.stringify({ reading, moon: moon.name }), {
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
