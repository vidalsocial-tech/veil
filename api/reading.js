export const config = { runtime: 'edge' };

// ─────────────────────────────────────────────
//  DEEP CARD DATA — 22 Major Arcana
// ─────────────────────────────────────────────
const CARD_DATA = {
  "The Fool": {
    archetype: "The Innocent / The Beginner",
    element: "Air",
    shadow: "recklessness, avoidance of consequence, refusing to grow up",
    essence: "pure potential before the story begins — courage wearing casual clothes, the willingness to move before you're ready",
    love: "Something new is asking to be let in — don't audit it to death before it has a chance to breathe. The Fool in love means first steps, open hands, the willingness to look a little ridiculous for something real.",
    clarity: "The answer you're circling isn't in the analysis — it's in the leap. Stop rehearsing and begin. The Fool says the first move is never wasted, even when it's wrong.",
    change: "You are standing at the very start of something. Don't try to see the whole road. The Fool's gift is momentum — the willingness to move before you're ready."
  },
  "The Magician": {
    archetype: "The Alchemist / The Craftsman",
    element: "Air / Mercury",
    shadow: "manipulation, using power to control others, all skill and no soul",
    essence: "mastery over mystery — what exists inside you is sufficient for what is required outside you; nothing was ever absent",
    love: "You have more to offer than you are currently offering. The Magician in love calls for full presence — bring all of yourself, not just the polished parts.",
    clarity: "Everything you need to move forward is already in your hands. Stop waiting for better conditions. The Magician says: the tools are here, the moment is now, the only missing ingredient is action.",
    change: "You are more capable of shaping this situation than you believe. The Magician is the card of agency — step into yours without apology."
  },
  "The High Priestess": {
    archetype: "The Oracle / The Keeper of Secrets",
    element: "Water / Moon",
    shadow: "secrets kept to maintain power, withdrawal as avoidance, coldness mistaken for wisdom",
    essence: "the space between words, the pause before the answer — wisdom deposited quietly in the body, in dreams, in the moments just before sleep",
    love: "Something in this relationship is asking to be felt rather than figured out. Trust what your body knows before your reasoning catches up. The High Priestess sees clearly when you stop trying to see.",
    clarity: "The answer you want is not in more information — it is in stillness. Sit with the question. Don't force the conclusion. What surfaces without effort is what is true.",
    change: "Not all movement is visible. Something is shifting underneath the surface of this situation — trust the process even when you cannot see the progress."
  },
  "The Empress": {
    archetype: "The Mother / The Creative Force",
    element: "Earth / Venus",
    shadow: "smothering, over-giving until empty, mistaking abundance for love",
    essence: "abundance as a state of being, not a reward — sensual, generous, completely at home in the body; stop earning your ease and simply inhabit it",
    love: "Love here is ripe and ready. The Empress in love means nourishment — give it freely, receive it without deflecting, and trust that care doesn't run out when it comes from a full place.",
    clarity: "This situation calls for patience and tending, not forcing. The Empress says: water the thing you want to grow and then step back. Some answers ripen in their own time.",
    change: "You are in a fertile season. What you plant now has unusual growing power. The Empress is not a card of waiting — she is a card of active, loving cultivation."
  },
  "The Emperor": {
    archetype: "The Father / The Architect",
    element: "Fire / Aries",
    shadow: "rigidity, control masquerading as protection, love expressed only through authority",
    essence: "power earned through showing up and living with consequences — not dominance, but reliability; the structure that lets others move freely within it",
    love: "This relationship may need more structure, not more feeling. The Emperor in love asks: what are the agreements here? What is stable and what is vague? Clarity is a form of care.",
    clarity: "A decision is waiting to be made — stop deliberating and commit. The Emperor says that half-choices are more exhausting than wrong ones. Choose, and adjust from there.",
    change: "Build the foundation before building the house. The Emperor is here to remind you that lasting change requires architecture — what are the rules, the rhythms, the non-negotiables?"
  },
  "The Hierophant": {
    archetype: "The Teacher / The Tradition-Keeper",
    element: "Earth / Taurus",
    shadow: "dogma, following rules out of fear, teaching what you don't believe",
    essence: "the long memory of what has been learned — the difference between inherited belief and chosen belief; what do you actually know to be true?",
    love: "Look at the patterns that were handed to you — the models of love you grew up watching. Are they serving you or running you? The Hierophant in love asks you to examine what you were taught about connection.",
    clarity: "There is wisdom in the tried path. Before you innovate your way out of this, check whether the conventional answer might simply be correct. Sometimes the tradition is tradition because it works.",
    change: "Ask whose rules you are following and whether you chose them. The Hierophant calls for a review of your operating beliefs — keep what is genuinely yours, release what was handed to you unexamined."
  },
  "The Lovers": {
    archetype: "The Union / The Choice",
    element: "Air / Gemini",
    shadow: "choosing based on fear, giving yourself up to keep the peace, mistaking chemistry for compatibility",
    essence: "a crossroads between versions of yourself — every real choice asks which self this path calls forward, and whether that is the one you want to be",
    love: "This is either a deepening or a decision — possibly both. The Lovers asks whether you are in full alignment with what this connection is asking of you. Choose with your whole self, not just your longing.",
    clarity: "There are two clear paths here. They are not equally good or equally bad — they lead to different lives. The Lovers says: stop stalling and choose the one whose consequences you can live with honestly.",
    change: "A significant choice is the engine of this change. The Lovers reminds you that no one can make this decision for you — and that choosing is itself a form of freedom."
  },
  "The Chariot": {
    archetype: "The Victor / The Willful One",
    element: "Water / Cancer",
    shadow: "forcing outcomes, confusing momentum with direction, winning the wrong thing",
    essence: "directed force — holding opposing tensions long enough to drive them forward together; victory is not the absence of conflict but its intelligent use",
    love: "Don't let inertia run this relationship. The Chariot in love calls for direction — what are you building toward? Moving forward together requires that both people know where forward is.",
    clarity: "You have more power here than you are using. Stop waiting for the situation to resolve itself and drive it. The Chariot says: take the wheel.",
    change: "The momentum is available — you just have to commit to a direction and go. Half-hearted movement won't work here. The Chariot asks for full forward motion."
  },
  "Strength": {
    archetype: "The Gentle Brave / The Tamer",
    element: "Fire / Leo",
    shadow: "repression disguised as strength, enduring what should be refused, losing yourself to keep others comfortable",
    essence: "befriending the lion, not subduing it — the quiet, consistent refusal to be ruled by fear or rage; power that doesn't grip, it holds",
    love: "There is a tenderness here that should not be mistaken for softness. Strength in love means staying present when presence is hard, and drawing boundaries not in anger but in deep self-knowledge.",
    clarity: "The thing you think is your weakness might be your greatest power in disguise. Strength asks you to look again at what you've been trying to fix or hide — is it actually the very thing that makes you whole?",
    change: "This change doesn't require force. It requires constancy. Show up for it the same way, day after day, with steady hands and an open heart. That is what strength looks like in motion."
  },
  "The Hermit": {
    archetype: "The Seeker / The Lantern-Bearer",
    element: "Earth / Virgo",
    shadow: "isolation as avoidance, wisdom hoarded rather than shared, mistaking withdrawal for enlightenment",
    essence: "a lantern that lights only a few steps ahead — internal reckoning, the deep solitude that is not loneliness but discernment",
    love: "Some of what you are seeking from another person can only be found within yourself first. The Hermit in love asks: what do you need to understand about yourself before you can be fully present for someone else?",
    clarity: "The answer won't come from more input — it will come from less. Quiet the advisors, close the tabs, and sit with what you already know. The Hermit's light is small but it is honest.",
    change: "This is a season for inward movement. Before you rebuild externally, the Hermit asks you to do the internal work — what beliefs, what wounds, what old stories need to be looked at honestly before you can move freely?"
  },
  "Wheel of Fortune": {
    archetype: "The Turning / The Cyclic Truth",
    element: "Fire / Jupiter",
    shadow: "fatalism, abdicating responsibility by calling everything fate, refusing to act because 'it's all up to the universe'",
    essence: "you are not stuck — you are in motion; fate is real, but so is the stance you take toward it",
    love: "Something is shifting in the dynamic of this connection — a cycle is completing or beginning. Ride the change with open hands rather than gripping what was.",
    clarity: "Timing is everything right now. The Wheel says: something is coming into alignment that was out of alignment before. Be ready to move when the moment opens.",
    change: "You are already in motion — the change has begun whether you have named it yet or not. The Wheel of Fortune asks you to stop resisting the turn and start working with it."
  },
  "Justice": {
    archetype: "The Adjudicator / The Honest Mirror",
    element: "Air / Libra",
    shadow: "harsh judgment without mercy, using fairness as a weapon, holding others to standards you won't hold yourself",
    essence: "seeing clearly, not cruelly — the scales are there to calibrate, not condemn; the truth, when you let it land, is usually less terrible than the effort of avoiding it",
    love: "There is something in this relationship that needs to be named honestly rather than managed carefully. Justice in love asks for full transparency — with yourself first, and then with the other person.",
    clarity: "Look at the facts without the story you've layered on top of them. Justice asks you to separate what is true from what you fear is true. They are not the same thing.",
    change: "A reckoning is available here — not a punishment, but a recalibration. Justice asks: what needs to be honestly acknowledged before real change can begin?"
  },
  "The Hanged Man": {
    archetype: "The Willing Sacrifice / The Perspective Shifter",
    element: "Water / Neptune",
    shadow: "martyrdom, suffering that has become an identity, refusing to act because waiting feels like wisdom",
    essence: "hanging by choice — the pause that is not passivity but the most active kind of stillness; the world rearranges into a shape only visible from upside down",
    love: "This is a moment to stop and feel before you decide or explain or fix. The Hanged Man in love asks you to let the situation teach you something before you respond to it.",
    clarity: "The perspective shift you need won't come from thinking harder in the same direction. Let yourself be upside-down for a moment. The answer you've been missing is visible from a different angle.",
    change: "This is not the time for action. It is the time for integration. The Hanged Man asks you to wait — not out of fear, but out of the earned patience of someone who knows that rushing will cost more than waiting."
  },
  "Death": {
    archetype: "The Transformer / The Threshold",
    element: "Water / Scorpio",
    shadow: "refusing necessary endings, clinging to what is already gone, mistaking the ending for the loss",
    essence: "the courage to let something end completely so something new can begin completely — not a villain but a liberator; underneath the grief is spaciousness",
    love: "Something in this dynamic is ending or needs to end — a pattern, a version of the relationship, possibly the relationship itself. Death in love is not easy, but it is honest. What needs to be released so that what remains can be real?",
    clarity: "Stop trying to keep alive what is ready to be released. The clarity you're seeking is on the other side of the ending you've been postponing.",
    change: "This change is not cosmetic — it is structural. Death asks you to let go of the old form completely and trust that what grows in the cleared ground will be worth it."
  },
  "Temperance": {
    archetype: "The Alchemist / The Integration",
    element: "Fire / Sagittarius",
    shadow: "endless moderation as avoidance of real commitment, blending everything until nothing has flavor",
    essence: "perfectly calibrated, not merely tame — blending opposites into something neither container could hold alone; flow more freely between two states that have been kept separate",
    love: "The balance here is not about keeping score — it's about allowing two different people to genuinely meet in the middle. Temperance in love asks for patience, flexibility, and the willingness to be changed by the mixing.",
    clarity: "Don't choose between the two things pulling at you — find the synthesis. Temperance says the answer isn't on either side of the tension; it's in the space between them.",
    change: "Slow is the right speed here. Don't rush the integration. Temperance asks you to let the change happen at the pace it needs, trusting that the gradual blend is making something that the quick fix never could."
  },
  "The Devil": {
    archetype: "The Shadow / The Enchainer",
    element: "Earth / Capricorn",
    shadow: "addiction, self-deception, the chain that could be slipped but hasn't been because the comfort is familiar",
    essence: "the chains hang loosely — the comfortable prison, the habit that offers relief while it takes; not shame but honesty: is the transaction actually worth it?",
    love: "Look honestly at the dynamic here — is this a connection that frees you or one that constrains you? The Devil in love asks you to name, without judgment, what you are getting from this that you are afraid to live without.",
    clarity: "There is a belief operating in the background that is limiting your options more than your circumstances are. The Devil asks: what story are you telling yourself that is keeping you smaller than you need to be?",
    change: "The first step is naming what has you. The Devil doesn't ask for dramatic escape — just the honest acknowledgment of the chain, and the small act of reaching up to remove it."
  },
  "The Tower": {
    archetype: "The Liberator / The Necessary Collapse",
    element: "Fire / Mars",
    shadow: "chaos for its own sake, destruction without the willingness to rebuild, the ego that falls but refuses to learn",
    essence: "built on a false foundation — the lightning comes to clarify, not destroy; you cannot build what you actually want on this ground; let it fall, build from here",
    love: "Something has been revealed — in the relationship or in yourself — that changes the shape of things. The Tower in love means honesty has arrived, invited or not. What is true now that was hidden before?",
    clarity: "The framework you've been using to understand this situation has just been shown to be wrong. The Tower asks you not to rebuild the old structure in the rubble — look at what the collapse reveals instead.",
    change: "This change is not what you planned, but it is what is. The Tower asks for the courage to stop protecting what's already fallen and to turn your attention to what might be built in its place."
  },
  "The Star": {
    archetype: "The Healer / The Renewed",
    element: "Air / Aquarius",
    shadow: "false hope, spiritual bypassing, using optimism to avoid the hard work of recovery",
    essence: "pouring without calculating after the storm has passed — genuine hope that exists on the other side of pain, not in spite of it; something in the deep self has remembered it is fundamentally okay",
    love: "This is a tender, healing moment — in yourself or between you and another person. The Star in love says: let yourself hope again. The vulnerability of hope is not the same as naivety.",
    clarity: "After a period of difficulty or confusion, something is opening. The Star offers a quiet, clear knowing — not all the answers, but the right direction. Follow the light, even if it's small.",
    change: "You are entering a period of renewal. The Star asks you to receive it — rest, restore, let your faith come back at its own pace. The change that's coming will require a replenished version of you."
  },
  "The Moon": {
    archetype: "The Dreamer / The Illusionist",
    element: "Water / Pisces",
    shadow: "confusion mistaken for depth, fear that pretends to be intuition, the subconscious running the show unexamined",
    essence: "illuminates without explaining — dream logic that knows more than it can say; not everything that is true can be proven, not every fear is a warning",
    love: "Something is not fully visible in this connection — either within yourself or in the dynamic between you. The Moon in love asks you not to rush to conclusions, but to let the unclear thing surface without forcing it.",
    clarity: "The confusion you're experiencing is not a problem to be solved — it is information to be listened to. The Moon says: sit with the uncertainty. What is it trying to show you?",
    change: "Not everything about this change is visible yet. Trust the process even when you can't see the shape of it. The Moon asks for faith in the unseen, and patience with the in-between."
  },
  "The Sun": {
    archetype: "The Child / The Radiant",
    element: "Fire / Sun",
    shadow: "performance of joy, the need for constant validation, brightness that refuses to acknowledge shadow",
    essence: "does not ask permission to shine — pure joy that doesn't come from circumstances being perfect but from the self being fully expressed; being seen clearly and warmly",
    love: "This is a radiant moment — let yourself enjoy it without looking for what could go wrong. The Sun in love asks you to be fully present for the warmth that is actually here.",
    clarity: "The answer here is simpler and brighter than you've been making it. The Sun cuts through the complexity. What is joyfully, obviously true? Start there.",
    change: "Something that has been growing in the dark is about to come into the light. The Sun says: let it. This change carries real joy in it — don't intellectualize the happiness away."
  },
  "Judgement": {
    archetype: "The Awakening / The Call",
    element: "Fire / Pluto",
    shadow: "guilt that won't release, holding others to an accounting that serves resentment more than justice",
    essence: "being called, not judged — rising not because of a sentence but because the summons has finally been heard; the old story releases its grip",
    love: "There is a moment of reckoning in this relationship — not blame, but clarity. Judgement in love asks you to see the connection honestly and to call forth the version of yourself (and possibly the other person) that is capable of something truer.",
    clarity: "You are being called to a new understanding of yourself. Judgement asks: what would you do if you truly believed you were capable of what you're being called toward?",
    change: "This is not a small change — it is a resurrection. Judgement marks a fundamental shift in how you see yourself and what you understand yourself to be capable of. Answer the call."
  },
  "The World": {
    archetype: "The Integrator / The Complete",
    element: "Earth / Saturn",
    shadow: "resting on past achievement instead of continuing, confusing completion with arrival",
    essence: "the end of the journey and the beginning of a new spiral — earned lightness, not naive lightness; whole, capable, free within the circle that used to be a cage",
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
//  POEM SYSTEM PROMPT
// ─────────────────────────────────────────────
const POEM_SYSTEM_PROMPT = 'You are Veil — the voice of a mystical tarot reading experience. You write readings as genuine poems: lyrical, whimsical, warm, rhythmic, and full of wonder. You speak directly to the seeker in second person. You never explain — you evoke.\n\n'
  + 'The three cards in this reading have no positions, no sequence, no assigned roles. They are not past, present, future. They are not root, now, path. They are three presences — figures glimpsed together in the same dream, their relationship to each other mysterious and unspoken. Let them haunt the poem rather than anchor it.\n\n'
  + '════════════════════════════════════════\n'
  + 'EXAMPLE READINGS — match this voice exactly\n'
  + '════════════════════════════════════════\n\n'
  + 'EXAMPLE 1 — Cards: The Hermit, The Moon, The Hierophant / Focus: clarity\n\n'
  + 'Something in you has been walking a long time,\n'
  + 'lantern in hand, through country with no name —\n'
  + 'The Hermit knows the mountain is the climb,\n'
  + 'that the quiet and the cold are not the same.\n\n'
  + 'Then The Moon arrived and muddied what was clear,\n'
  + 'turned the certain path to water, stone to dream —\n'
  + 'not every shape that moves out there is fear,\n'
  + 'not every fear is warning what it seems.\n\n'
  + 'The Hierophant waits patient at the edge,\n'
  + 'not offering doctrine — offering a door.\n'
  + 'He asks what you would carve into the ledge\n'
  + 'if no one else was watching anymore.\n\n'
  + 'The lantern was always yours to carry home.\n'
  + 'What truth, of all you\'ve found, is worth the keeping?\n\n'
  + '---\n\n'
  + 'EXAMPLE 2 — Cards: The Lovers, The Tower, The Star / Focus: love\n\n'
  + 'You built the whole cathedral out of wanting,\n'
  + 'and love will do that — make a church of air.\n'
  + 'The Lovers asked a choice worth haunting,\n'
  + 'the kind that asks which version of you dares.\n\n'
  + 'Then The Tower came the way that lightning does —\n'
  + 'not cruel, just honest, burning through the frame.\n'
  + 'What fell was what could never hold, because\n'
  + 'the ground beneath the promise wasn\'t sound.\n\n'
  + 'But here is The Star, still pouring in the dark,\n'
  + 'still giving without counting what she spends.\n'
  + 'She\'s seen the wreckage — she is pouring anyway,\n'
  + 'and hope that comes through ruin never ends.\n\n'
  + 'The sky has more room in it now than before.\n'
  + 'Is there something you\'ve been afraid to want?\n\n'
  + '---\n\n'
  + 'EXAMPLE 3 — Cards: The Fool, Strength, The World / Focus: change\n\n'
  + 'There\'s a door at the edge of everything you know,\n'
  + 'and you\'ve been standing at it — coat on, bags half-packed.\n'
  + 'The Fool doesn\'t wait for the road to show —\n'
  + 'the leap itself is what the leap attracts.\n\n'
  + 'Strength walked beside you, quiet all this time,\n'
  + 'not forcing, not performing — holding ground.\n'
  + 'She tamed the lion not with rage but rhyme,\n'
  + 'the steady love that circles back around.\n\n'
  + 'The World arrives and she is dancing, free,\n'
  + 'inside the wreath of all she\'s moved through whole.\n'
  + 'Not finished — just complete, the way a sea\n'
  + 'is every wave it ever was, in full.\n\n'
  + 'You are not at the beginning anymore.\n'
  + 'What does it feel like to have actually arrived?\n\n'
  + '---\n\n'
  + 'EXAMPLE 4 — Cards: The Tower, Death, The Star / Focus: change\n\n'
  + 'You thought the walls were holding you up.\n'
  + 'You did not know they were also holding you in —\n'
  + 'The Tower fell the way the body finally exhales\n'
  + 'after holding a breath it never meant to keep.\n\n'
  + 'And Death came not with violence but with patience,\n'
  + 'the way winter arrives: thorough, and done.\n'
  + 'What you carried is lighter now. What you loved\n'
  + 'that was real is still here. What was performance — gone.\n\n'
  + 'The Star doesn\'t ask what happened.\n'
  + 'She pours. She was always going to pour.\n'
  + 'Something in you that you thought you had lost\n'
  + 'has been waiting just past the smoke, on the other side of the door.\n\n'
  + 'A window left open through the whole storm.\n\n'
  + '---\n\n'
  + 'EXAMPLE 5 — Cards: The High Priestess, The Empress, The Lovers / Focus: love\n\n'
  + 'There is a knowing in you that arrived before the question did,\n'
  + 'quiet and certain as water finding its level —\n'
  + 'The High Priestess has been sitting at the edge of you,\n'
  + 'waiting for the noise to finally thin.\n\n'
  + 'The Empress leans into the garden of this.\n'
  + 'She is not interested in earning or explaining love —\n'
  + 'she wants to know if you can receive it without deflecting,\n'
  + 'if you can let something ripe stay ripe without reaching for a reason to drop it.\n\n'
  + 'The Lovers is not asking whether you love them.\n'
  + 'It is asking whether you love the version of yourself this calls forward —\n'
  + 'whether the you inside this choice is someone you\'d want to be.\n\n'
  + 'A door that opens from the inside.\n\n'
  + '════════════════════════════════════════\n\n'
  + 'YOUR POEM RULES:\n'
  + '- 4 stanzas, 3-5 lines each, max 190 words total\n'
  + '- The poem finds its own shape — no required structure per stanza. Let the story decide everything.\n'
  + '- Card names appear at most once each, dropped in like a proper noun in a story — not announced, not introduced, just suddenly there. Cards are presences, not positions.\n'
  + '- NEVER use position language: no "root", "now", "path", "past", "present", "future", "first card", "second card", "third card"\n'
  + '- Rhyme ABAB in every stanza. If a line truly cannot rhyme without breaking the image, use slant rhyme — but rhyme is not optional.\n'
  + '- The final stanza ends with a single, concrete physical image — small and real, stated plainly, no explanation attached. Not advice. Just the image.\n'
  + '- If there is a personal note, the seeker must recognize their specific situation in the poem — not generic themes, their actual words reflected back in image and feeling.\n'
  + '- No headers. No labels. No card numbers.\n'
  + '- FORBIDDEN closing lines: "trust yourself", "keep going", "you\'ve got this", "be gentle with yourself", "the journey is yours", "honor your feelings"';


// ─────────────────────────────────────────────
//  BUILD POEM PROMPT
// ─────────────────────────────────────────────
function buildPoemPrompt(cards, cardData, focus, note, moon) {
  const cardSummaries = cards.map(name => {
    const d = cardData[name];
    if (!d) return name + ': use traditional tarot meaning';
    const angle = focus === 'love' ? d.love : focus === 'change' ? d.change : d.clarity;
    return name + '\n'
      + '  Archetype: ' + d.archetype + '\n'
      + '  Shadow: ' + d.shadow + '\n'
      + '  Essence: ' + d.essence + '\n'
      + '  For ' + (focus || 'clarity') + ': ' + angle;
  }).join('\n\n');

  return 'Three cards have been drawn. They have no positions — they are simply present together, their meaning arising from their relationship to each other, not from any sequence.\n\n'
    + 'THE CARDS:\n'
    + cardSummaries + '\n\n'
    + 'FOCUS: ' + (focus || 'clarity') + '\n'
    + 'MOON TONIGHT: ' + moon.tone + '\n'
    + (note ? 'THE SEEKER SHARED: "' + note + '" — their specific situation must be recognizable in the poem. Not the theme — their actual words, reflected back in image and feeling.\n\n' : '\n')
    + 'Now write the reading as a poem in the exact voice of the 5 examples above. 4 stanzas. Lyrical, whimsical, warm, and specific. Let card names surface at most once each, like echoes. Rhyme ABAB. End with a single, concrete image — no advice, no explanation. Just the image.';
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

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 900,
        temperature: 0.92,
        top_p: 0.95,
        system: POEM_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildPoemPrompt(cards, CARD_DATA, focus, note, moon) }]
      })
    });

    if (!res.ok) throw new Error('API error ' + res.status + ': ' + await res.text());

    const data = await res.json();
    let reading = data.content?.[0]?.text || '';

    // Retry once if too short
    if (reading.trim().length < 120) {
      const retry = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 900,
          temperature: 0.92,
          top_p: 0.95,
          system: POEM_SYSTEM_PROMPT,
          messages: [{ role: 'user', content: buildPoemPrompt(cards, CARD_DATA, focus, note, moon) }]
        })
      });
      if (retry.ok) {
        const retryData = await retry.json();
        reading = retryData.content?.[0]?.text || reading;
      }
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
