// ─────────────────────────────────────────────
//  DEEP CARD DATA — 22 Major Arcana
// ─────────────────────────────────────────────
const CARD_DATA = {
  "The Fool": {
    archetype: "The Innocent / The Beginner",
    element: "Air",
    shadow: "recklessness, avoidance of consequence, refusing to grow up",
    essence: "pure potential before the story begins — courage wearing casual clothes, the willingness to move before you're ready",
    reversalRegister: "SUPPRESSION",
    reversed: "The leap is available but something is holding the seeker back. Not recklessness but paralysis: the cliff is there, the shoes are on, the bag is packed, and the foot won't lift. The Fool reversed asks what the seeker is waiting for permission to begin.",
    love: "Something new is asking to be let in — don't audit it to death before it has a chance to breathe. The Fool in love means first steps, open hands, the willingness to look a little ridiculous for something real.",
    clarity: "The answer you're circling isn't in the analysis — it's in the leap. Stop rehearsing and begin. The Fool says the first move is never wasted, even when it's wrong.",
    change: "You are standing at the very start of something. Don't try to see the whole road. The Fool's gift is momentum — the willingness to move before you're ready."
  },
  "The Magician": {
    archetype: "The Alchemist / The Craftsman",
    element: "Air / Mercury",
    shadow: "manipulation, using power to control others, all skill and no soul",
    essence: "mastery over mystery — what exists inside you is sufficient for what is required outside you; nothing was ever absent",
    reversalRegister: "DISTORTION",
    reversed: "The tools are being misused: misdirected toward control, toward performance, toward impressing rather than creating. Or the skill is real but the soul is absent — execution without meaning. The Magician reversed asks whose vision the seeker is actually serving.",
    love: "You have more to offer than you are currently offering. The Magician in love calls for full presence — bring all of yourself, not just the polished parts.",
    clarity: "Everything you need to move forward is already in your hands. Stop waiting for better conditions. The Magician says: the tools are here, the moment is now, the only missing ingredient is action.",
    change: "You are more capable of shaping this situation than you believe. The Magician is the card of agency — step into yours without apology."
  },
  "The High Priestess": {
    archetype: "The Oracle / The Keeper of Secrets",
    element: "Water / Moon",
    shadow: "secrets kept to maintain power, withdrawal as avoidance, coldness mistaken for wisdom",
    essence: "the space between words, the pause before the answer — wisdom deposited quietly in the body, in dreams, in the moments just before sleep",
    reversalRegister: "SUPPRESSION",
    reversed: "The inner voice is present but the seeker has learned not to trust it. External noise, others' opinions, or the demand for logical proof has trained the seeker to dismiss what they already know. The High Priestess reversed asks what the seeker would believe if they stopped requiring it to be verifiable.",
    love: "Something in this relationship is asking to be felt rather than figured out. Trust what your body knows before your reasoning catches up. The High Priestess sees clearly when you stop trying to see.",
    clarity: "The answer you want is not in more information — it is in stillness. Sit with the question. Don't force the conclusion. What surfaces without effort is what is true.",
    change: "Not all movement is visible. Something is shifting underneath the surface of this situation — trust the process even when you cannot see the progress."
  },
  "The Empress": {
    archetype: "The Mother / The Creative Force",
    element: "Earth / Venus",
    shadow: "smothering, over-giving until empty, mistaking abundance for love",
    essence: "abundance as a state of being, not a reward — sensual, generous, completely at home in the body; stop earning your ease and simply inhabit it",
    reversalRegister: "DISTORTION",
    reversed: "The nourishing impulse has curdled into over-giving, smothering, or the compulsive need to produce. Creativity that punishes rather than replenishes. The Empress reversed asks what the seeker is making from depletion rather than fullness, and whether they have given themselves the same care they give everything else.",
    love: "Love here is ripe and ready. The Empress in love means nourishment — give it freely, receive it without deflecting, and trust that care doesn't run out when it comes from a full place.",
    clarity: "This situation calls for patience and tending, not forcing. The Empress says: water the thing you want to grow and then step back. Some answers ripen in their own time.",
    change: "You are in a fertile season. What you plant now has unusual growing power. The Empress is not a card of waiting — she is a card of active, loving cultivation."
  },
  "The Emperor": {
    archetype: "The Father / The Architect",
    element: "Fire / Aries",
    shadow: "rigidity, control masquerading as protection, love expressed only through authority",
    essence: "power earned through showing up and living with consequences — not dominance, but reliability; the structure that lets others move freely within it",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "Authority and rigidity are at war inside the same person. The capacity to build structure is real, but it keeps calcifying into control. Or the opposite: the architecture exists but the seeker refuses to inhabit it, mistaking structure for confinement. The Emperor reversed asks whether the rules being followed were ever actually chosen.",
    love: "This relationship may need more structure, not more feeling. The Emperor in love asks: what are the agreements here? What is stable and what is vague? Clarity is a form of care.",
    clarity: "A decision is waiting to be made — stop deliberating and commit. The Emperor says that half-choices are more exhausting than wrong ones. Choose, and adjust from there.",
    change: "Build the foundation before building the house. The Emperor is here to remind you that lasting change requires architecture — what are the rules, the rhythms, the non-negotiables?"
  },
  "The Hierophant": {
    archetype: "The Teacher / The Tradition-Keeper",
    element: "Earth / Taurus",
    shadow: "dogma, following rules out of fear, teaching what you don't believe",
    essence: "the long memory of what has been learned — the difference between inherited belief and chosen belief; what do you actually know to be true?",
    reversalRegister: "DISTORTION",
    reversed: "Belief has become dogma. The seeker is following rules handed to them unexamined, and the cost of that compliance is accumulating. Or the reverse: a reflexive rejection of all tradition that throws away genuine wisdom in the name of independence. The Hierophant reversed asks what the seeker actually knows to be true versus what they were told to believe.",
    love: "Look at the patterns that were handed to you — the models of love you grew up watching. Are they serving you or running you? The Hierophant in love asks you to examine what you were taught about connection.",
    clarity: "There is wisdom in the tried path. Before you innovate your way out of this, check whether the conventional answer might simply be correct. Sometimes the tradition is tradition because it works.",
    change: "Ask whose rules you are following and whether you chose them. The Hierophant calls for a review of your operating beliefs — keep what is genuinely yours, release what was handed to you unexamined."
  },
  "The Lovers": {
    archetype: "The Union / The Choice",
    element: "Air / Gemini",
    shadow: "choosing based on fear, giving yourself up to keep the peace, mistaking chemistry for compatibility",
    essence: "a crossroads between versions of yourself — every real choice asks which self this path calls forward, and whether that is the one you want to be",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The choice is real but the seeker is choosing from fear rather than alignment. Or they are staying in a dynamic that serves comfort over truth — giving themselves up piece by piece to avoid the discomfort of choosing. The Lovers reversed asks what the seeker is keeping alive because ending it would require them to change.",
    love: "This is either a deepening or a decision — possibly both. The Lovers asks whether you are in full alignment with what this connection is asking of you. Choose with your whole self, not just your longing.",
    clarity: "There are two clear paths here. They are not equally good or equally bad — they lead to different lives. The Lovers says: stop stalling and choose the one whose consequences you can live with honestly.",
    change: "A significant choice is the engine of this change. The Lovers reminds you that no one can make this decision for you — and that choosing is itself a form of freedom."
  },
  "The Chariot": {
    archetype: "The Victor / The Willful One",
    element: "Water / Cancer",
    shadow: "forcing outcomes, confusing momentum with direction, winning the wrong thing",
    essence: "directed force — holding opposing tensions long enough to drive them forward together; victory is not the absence of conflict but its intelligent use",
    reversalRegister: "DISTORTION",
    reversed: "Momentum has become its own destination. The seeker is moving fast, but the direction is wrong or unconscious. Winning the wrong race. The Chariot reversed asks where the seeker is going, and whether they chose that destination or inherited it.",
    love: "Don't let inertia run this relationship. The Chariot in love calls for direction — what are you building toward? Moving forward together requires that both people know where forward is.",
    clarity: "You have more power here than you are using. Stop waiting for the situation to resolve itself and drive it. The Chariot says: take the wheel.",
    change: "The momentum is available — you just have to commit to a direction and go. Half-hearted movement won't work here. The Chariot asks for full forward motion."
  },
  "Strength": {
    archetype: "The Gentle Brave / The Tamer",
    element: "Fire / Leo",
    shadow: "repression disguised as strength, enduring what should be refused, losing yourself to keep others comfortable",
    essence: "befriending the lion, not subduing it — the quiet, consistent refusal to be ruled by fear or rage; power that doesn't grip, it holds",
    reversalRegister: "SUPPRESSION",
    reversed: "The seeker's real power is being withheld, performed away, or given up to keep the peace. What looks like patience may be fear of conflict. What looks like strength may be endurance of what should be refused. Strength reversed asks what the seeker would stop tolerating if they trusted that their actual power was enough.",
    love: "There is a tenderness here that should not be mistaken for softness. Strength in love means staying present when presence is hard, and drawing boundaries not in anger but in deep self-knowledge.",
    clarity: "The thing you think is your weakness might be your greatest power in disguise. Strength asks you to look again at what you've been trying to fix or hide — is it actually the very thing that makes you whole?",
    change: "This change doesn't require force. It requires constancy. Show up for it the same way, day after day, with steady hands and an open heart. That is what strength looks like in motion."
  },
  "The Hermit": {
    archetype: "The Seeker / The Lantern-Bearer",
    element: "Earth / Virgo",
    shadow: "isolation as avoidance, wisdom hoarded rather than shared, mistaking withdrawal for enlightenment",
    essence: "a lantern that lights only a few steps ahead — internal reckoning, the deep solitude that is not loneliness but discernment",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The wisdom is already there — earned, deep, genuinely present — but it hasn't been allowed to surface yet. Whether through isolation, through the habit of keeping it inward, or through the quiet belief that it isn't ready to be offered. The Hermit reversed asks what it would look like to finally let the lantern be seen.",
    love: "Some of what you are seeking from another person can only be found within yourself first. The Hermit in love asks: what do you need to understand about yourself before you can be fully present for someone else?",
    clarity: "The answer won't come from more input — it will come from less. Quiet the advisors, close the tabs, and sit with what you already know. The Hermit's light is small but it is honest.",
    change: "This is a season for inward movement. Before you rebuild externally, the Hermit asks you to do the internal work — what beliefs, what wounds, what old stories need to be looked at honestly before you can move freely?"
  },
  "Wheel of Fortune": {
    archetype: "The Turning / The Cyclic Truth",
    element: "Fire / Jupiter",
    shadow: "fatalism, abdicating responsibility by calling everything fate, refusing to act because 'it's all up to the universe'",
    essence: "you are not stuck — you are in motion; fate is real, but so is the stance you take toward it",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The turn is coming but hasn't arrived yet. The seeker is in a between-moment — the old configuration has released but the new one hasn't declared itself. The Wheel reversed asks for the active patience of someone who knows the wheel always turns, not the passivity of someone waiting to be carried.",
    love: "Something is shifting in the dynamic of this connection — a cycle is completing or beginning. Ride the change with open hands rather than gripping what was.",
    clarity: "Timing is everything right now. The Wheel says: something is coming into alignment that was out of alignment before. Be ready to move when the moment opens.",
    change: "You are already in motion — the change has begun whether you have named it yet or not. The Wheel of Fortune asks you to stop resisting the turn and start working with it."
  },
  "Justice": {
    archetype: "The Adjudicator / The Honest Mirror",
    element: "Air / Libra",
    shadow: "harsh judgment without mercy, using fairness as a weapon, holding others to standards you won't hold yourself",
    essence: "seeing clearly, not cruelly — the scales are there to calibrate, not condemn; the truth, when you let it land, is usually less terrible than the effort of avoiding it",
    reversalRegister: "DISTORTION",
    reversed: "Fairness has become a weapon. The seeker is applying standards to others they don't apply to themselves, or so committed to being right that they can no longer see their own role in the situation. Justice reversed asks the seeker to put themselves on the same scale they've been using on everyone else.",
    love: "There is something in this relationship that needs to be named honestly rather than managed carefully. Justice in love asks for full transparency — with yourself first, and then with the other person.",
    clarity: "Look at the facts without the story you've layered on top of them. Justice asks you to separate what is true from what you fear is true. They are not the same thing.",
    change: "A reckoning is available here — not a punishment, but a recalibration. Justice asks: what needs to be honestly acknowledged before real change can begin?"
  },
  "The Hanged Man": {
    archetype: "The Willing Sacrifice / The Perspective Shifter",
    element: "Water / Neptune",
    shadow: "martyrdom, suffering that has become an identity, refusing to act because waiting feels like wisdom",
    essence: "hanging by choice — the pause that is not passivity but the most active kind of stillness; the world rearranges into a shape only visible from upside down",
    reversalRegister: "DISTORTION",
    reversed: "The pause has become an identity. Suspension that was meant to produce perspective has calcified into inertia. The seeker has confused waiting with wisdom, and the sacrifice has become a comfortable story rather than a purposeful act. The Hanged Man reversed asks what the seeker would do if they stopped waiting for the right conditions to act.",
    love: "This is a moment to stop and feel before you decide or explain or fix. The Hanged Man in love asks you to let the situation teach you something before you respond to it.",
    clarity: "The perspective shift you need won't come from thinking harder in the same direction. Let yourself be upside-down for a moment. The answer you've been missing is visible from a different angle.",
    change: "This is not the time for action. It is the time for integration. The Hanged Man asks you to wait — not out of fear, but out of the earned patience of someone who knows that rushing will cost more than waiting."
  },
  "Death": {
    archetype: "The Transformer / The Threshold",
    element: "Water / Scorpio",
    shadow: "refusing necessary endings, clinging to what is already gone, mistaking the ending for the loss",
    essence: "the courage to let something end completely so something new can begin completely — not a villain but a liberator; underneath the grief is spaciousness",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The ending is real and necessary, but the seeker has not yet crossed the threshold. They are standing at the door of what needs to be released, aware but not yet willing. Death reversed is not refusal — it is the moment just before surrender, asking for the small additional courage needed to complete what has already begun.",
    love: "Something in this dynamic is ending or needs to end — a pattern, a version of the relationship, possibly the relationship itself. Death in love is not easy, but it is honest. What needs to be released so that what remains can be real?",
    clarity: "Stop trying to keep alive what is ready to be released. The clarity you're seeking is on the other side of the ending you've been postponing.",
    change: "This change is not cosmetic — it is structural. Death asks you to let go of the old form completely and trust that what grows in the cleared ground will be worth it."
  },
  "Temperance": {
    archetype: "The Alchemist / The Integration",
    element: "Fire / Sagittarius",
    shadow: "endless moderation as avoidance of real commitment, blending everything until nothing has flavor",
    essence: "perfectly calibrated, not merely tame — blending opposites into something neither container could hold alone; flow more freely between two states that have been kept separate",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The integration is already underway — deeper than the seeker can perceive. What looks like imbalance or irresolution is actually two things finding their proportion at a level below the visible. Temperance reversed asks for the patience to trust a process that is working even when it cannot yet be felt.",
    love: "The balance here is not about keeping score — it's about allowing two different people to genuinely meet in the middle. Temperance in love asks for patience, flexibility, and the willingness to be changed by the mixing.",
    clarity: "Don't choose between the two things pulling at you — find the synthesis. Temperance says the answer isn't on either side of the tension; it's in the space between them.",
    change: "Slow is the right speed here. Don't rush the integration. Temperance asks you to let the change happen at the pace it needs, trusting that the gradual blend is making something that the quick fix never could."
  },
  "The Devil": {
    archetype: "The Shadow / The Enchainer",
    element: "Earth / Capricorn",
    shadow: "addiction, self-deception, the chain that could be slipped but hasn't been because the comfort is familiar",
    essence: "the chains hang loosely — the comfortable prison, the habit that offers relief while it takes; not shame but honesty: is the transaction actually worth it?",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The seeker is closer to freedom than they believe. What looks like a fixed condition is actually a choice that hasn't yet been named as such. The Devil reversed doesn't announce escape — it reveals that the door was never locked. The work is recognizing that the hand on the chain is the seeker's own.",
    love: "Look honestly at the dynamic here — is this a connection that frees you or one that constrains you? The Devil in love asks you to name, without judgment, what you are getting from this that you are afraid to live without.",
    clarity: "There is a belief operating in the background that is limiting your options more than your circumstances are. The Devil asks: what story are you telling yourself that is keeping you smaller than you need to be?",
    change: "The first step is naming what has you. The Devil doesn't ask for dramatic escape — just the honest acknowledgment of the chain, and the small act of reaching up to remove it."
  },
  "The Tower": {
    archetype: "The Liberator / The Necessary Collapse",
    element: "Fire / Mars",
    shadow: "chaos for its own sake, destruction without the willingness to rebuild, the ego that falls but refuses to learn",
    essence: "built on a false foundation — the lightning comes to clarify, not destroy; you cannot build what you actually want on this ground; let it fall, build from here",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The collapse is coming but hasn't arrived yet. The seeker can feel the instability in the structure but is holding it together through sheer effort. The Tower reversed asks whether delaying the inevitable is wisdom or avoidance — and what it would free the seeker to do if they stopped maintaining what is already broken.",
    love: "Something has been revealed — in the relationship or in yourself — that changes the shape of things. The Tower in love means honesty has arrived, invited or not. What is true now that was hidden before?",
    clarity: "The framework you've been using to understand this situation has just been shown to be wrong. The Tower asks you not to rebuild the old structure in the rubble — look at what the collapse reveals instead.",
    change: "This change is not what you planned, but it is what is. The Tower asks for the courage to stop protecting what's already fallen and to turn your attention to what might be built in its place."
  },
  "The Star": {
    archetype: "The Healer / The Renewed",
    element: "Air / Aquarius",
    shadow: "false hope, spiritual bypassing, using optimism to avoid the hard work of recovery",
    essence: "pouring without calculating after the storm has passed — genuine hope that exists on the other side of pain, not in spite of it; something in the deep self has remembered it is fundamentally okay",
    reversalRegister: "SUPPRESSION",
    reversed: "Hope is present but the seeker doesn't trust it yet. After difficulty, they have learned to protect themselves from hope — because hope that has been disappointed before feels like a risk. The Star reversed asks the seeker to notice the hope that is already alive in them, and to let themselves believe in it a little longer than feels safe.",
    love: "This is a tender, healing moment — in yourself or between you and another person. The Star in love says: let yourself hope again. The vulnerability of hope is not the same as naivety.",
    clarity: "After a period of difficulty or confusion, something is opening. The Star offers a quiet, clear knowing — not all the answers, but the right direction. Follow the light, even if it's small.",
    change: "You are entering a period of renewal. The Star asks you to receive it — rest, restore, let your faith come back at its own pace. The change that's coming will require a replenished version of you."
  },
  "The Moon": {
    archetype: "The Dreamer / The Illusionist",
    element: "Water / Pisces",
    shadow: "confusion mistaken for depth, fear that pretends to be intuition, the subconscious running the show unexamined",
    essence: "illuminates without explaining — dream logic that knows more than it can say; not everything that is true can be proven, not every fear is a warning",
    reversalRegister: "DISTORTION",
    reversed: "The seeker is so submerged in the unclear thing that they cannot distinguish between intuition and anxiety. Fear is being mistaken for guidance. Confusion is being mistaken for depth. The Moon reversed asks the seeker to find one thing they know for certain and stand on it — not to force clarity, but to find solid ground from which to approach the uncertain.",
    love: "Something is not fully visible in this connection — either within yourself or in the dynamic between you. The Moon in love asks you not to rush to conclusions, but to let the unclear thing surface without forcing it.",
    clarity: "The confusion you're experiencing is not a problem to be solved — it is information to be listened to. The Moon says: sit with the uncertainty. What is it trying to show you?",
    change: "Not everything about this change is visible yet. Trust the process even when you can't see the shape of it. The Moon asks for faith in the unseen, and patience with the in-between."
  },
  "The Sun": {
    archetype: "The Child / The Radiant",
    element: "Fire / Sun",
    shadow: "performance of joy, the need for constant validation, brightness that refuses to acknowledge shadow",
    essence: "does not ask permission to shine — pure joy that doesn't come from circumstances being perfect but from the self being fully expressed; being seen clearly and warmly",
    reversalRegister: "SUPPRESSION",
    reversed: "The seeker's genuine joy is present but being dimmed — by self-consciousness, by comparison, or by the belief that full expression is somehow too much. The Sun reversed is not depression; it is radiance that has been turned down out of politeness or protection. It asks what the seeker would let themselves feel if they stopped managing how they appear.",
    love: "This is a radiant moment — let yourself enjoy it without looking for what could go wrong. The Sun in love asks you to be fully present for the warmth that is actually here.",
    clarity: "The answer here is simpler and brighter than you've been making it. The Sun cuts through the complexity. What is joyfully, obviously true? Start there.",
    change: "Something that has been growing in the dark is about to come into the light. The Sun says: let it. This change carries real joy in it — don't intellectualize the happiness away."
  },
  "Judgement": {
    archetype: "The Awakening / The Call",
    element: "Fire / Pluto",
    shadow: "guilt that won't release, holding others to an accounting that serves resentment more than justice",
    essence: "being called, not judged — rising not because of a sentence but because the summons has finally been heard; the old story releases its grip",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The call is being heard but something is arguing against answering. Old guilt, old identity, old definitions of what the seeker is allowed to become — these are pushing back against the summons. Judgement reversed asks what the seeker believes they need to earn before they are allowed to rise, and whether that belief was ever true.",
    love: "There is a moment of reckoning in this relationship — not blame, but clarity. Judgement in love asks you to see the connection honestly and to call forth the version of yourself (and possibly the other person) that is capable of something truer.",
    clarity: "You are being called to a new understanding of yourself. Judgement asks: what would you do if you truly believed you were capable of what you're being called toward?",
    change: "This is not a small change — it is a resurrection. Judgement marks a fundamental shift in how you see yourself and what you understand yourself to be capable of. Answer the call."
  },
  "The World": {
    archetype: "The Integrator / The Complete",
    element: "Earth / Saturn",
    shadow: "resting on past achievement instead of continuing, confusing completion with arrival",
    essence: "the end of the journey and the beginning of a new spiral — earned lightness, not naive lightness; whole, capable, free within the circle that used to be a cage",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "Completion is available but the seeker hasn't claimed it. They are at the end of something real and significant, but they cannot feel it — either because they are moving too fast to pause and receive it, or because they don't believe they are allowed to be done. The World reversed asks the seeker to stop and acknowledge what they have actually become.",
    love: "Something in this connection has reached its full expression. The World in love marks a completion — whether that is a relationship coming into its fullest form or a chapter of love that has genuinely run its course.",
    clarity: "You have more than enough to work with. The World says: stop searching for the missing piece — it isn't missing. You are already whole. Act from that wholeness.",
    change: "A major cycle is completing. The World asks you to honor what this chapter has made of you before you rush into the next one. Integration is part of the change."
  },

  // ── SUIT OF WANDS ──

  "Ace of Wands": {
    archetype: "The Spark / The First Flame",
    element: "Fire",
    shadow: "creative energy ignited but not yet directed — the match that lights everything without knowing what it's building",
    essence: "the moment before the thing has a name — pure generative impulse, the body's yes before the mind has reviewed the proposal",
    reversalRegister: "SUPPRESSION",
    reversed: "Something wants to begin but hasn't been given permission. The creative spark is alive in the seeker — they can feel it — but something is holding the hand back from the page, the voice back from the room. The Ace of Wands reversed asks what the seeker is waiting for before they let themselves begin.",
    love: "Something new is asking to be kindled. The Ace of Wands in love is the first honest interest — not yet a story, just a heat. Follow it before you decide what it means.",
    clarity: "The idea you've been circling is real. It doesn't need to be fully formed to be started. The Ace of Wands says: move toward the thing that lights you up, even one step.",
    change: "A new chapter is available. The energy is here — raw, directional, ready. The Ace of Wands doesn't ask you to see the whole path, only to strike the match."
  },
  "Two of Wands": {
    archetype: "The Planner / The Horizon-Gazer",
    element: "Fire",
    shadow: "mistaking the map for the journey — holding the globe of possibility without ever setting foot on the ground",
    essence: "standing at the edge of what you've built and looking toward what you haven't yet reached — the future is genuinely available, and you are the one who will decide which part of it",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The vision is real but the seeker is reluctant to commit to it. They can see the horizon but keep finding reasons not to move toward it. The Two of Wands reversed asks what it would cost to stop deliberating and start choosing.",
    love: "You are weighing what you want against what you have. The Two of Wands in love asks: what kind of connection are you actually building toward, and are you choosing it — or waiting for it to choose you?",
    clarity: "The question isn't whether the plan is good — it's whether you're willing to act on it. You have already done the thinking. The Two of Wands says: commit.",
    change: "You can see exactly where you want to go. The distance between here and there is real but crossable. The Two of Wands asks you to stop surveying and start walking."
  },
  "Three of Wands": {
    archetype: "The Visionary / The Long View",
    element: "Fire",
    shadow: "expansion without roots — ambition that has left the ground it grew in, momentum that outpaces integrity",
    essence: "ships already on the water, vision already in motion — the satisfaction of watching what you dared to start actually moving toward its destination",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "Something the seeker set in motion has stalled partway. The ships were sent but haven't returned. The Three of Wands reversed asks for the patience to let what is already underway arrive, and the honesty to see whether what is delayed needs more time or a different course.",
    love: "What you have sent out into the world of this relationship is returning with information. The Three of Wands in love says: the growth you hoped for is possible — keep watching the horizon.",
    clarity: "You are further along than you feel. The Three of Wands asks you to look back at where you started before you decide the progress has been insufficient.",
    change: "The foundations you laid are working. Stay with the long view. The Three of Wands says this is not the moment for course correction — it is the moment for trust in what you've already put in motion."
  },
  "Four of Wands": {
    archetype: "The Celebrant / The Homecoming",
    element: "Fire",
    shadow: "a celebration that is premature, or one the seeker can't fully enter because they're still watching for what might go wrong",
    essence: "genuine arrival — something has been completed or begun that deserves to be marked; you are allowed to feel this",
    reversalRegister: "SUPPRESSION",
    reversed: "The celebration is real but the seeker can't quite receive it. There is something — comparison, old grief, the habit of waiting for the other shoe — that keeps them one step outside the joy that is genuinely available. The Four of Wands reversed asks the seeker to step inside the garland and let themselves feel what has actually been earned.",
    love: "Something worth marking is here — a milestone, a deepening, a genuine arrival. Let yourself acknowledge it. The Four of Wands in love asks for the willingness to feel happy.",
    clarity: "There is something stable and good here that you keep looking past. The Four of Wands asks you to stand still for a moment in what is working, before moving on.",
    change: "A phase has concluded and deserves a breath before the next one begins. The Four of Wands says: let yourself arrive before you start planning the departure."
  },
  "Five of Wands": {
    archetype: "The Combatant / The Friction-Field",
    element: "Fire",
    shadow: "conflict for its own sake — the energy that can't be at rest, that manufactures opposition when none is needed",
    essence: "the productive friction of multiple strong wills that have not yet found their synthesis — not all conflict is wrong, but this one needs direction",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The conflict has moved inside. The battle is no longer with the situation but within the seeker — competing desires, competing voices, competing versions of what they want. The Five of Wands reversed asks which voice actually belongs to the seeker, and which ones are inherited noise.",
    love: "There is tension here that isn't necessarily negative — it may be the honest friction of two people who are both fully present. The Five of Wands asks: is this conflict revealing something real, or just filling the air?",
    clarity: "Multiple perspectives are pulling at you right now. The Five of Wands says the confusion is not the problem — the problem is trying to win the argument instead of listening to what each position is actually saying.",
    change: "The chaos you're moving through isn't random — it's the pressure of something trying to reorganize. The Five of Wands asks you to stay in the friction long enough to find what it's teaching."
  },
  "Six of Wands": {
    archetype: "The Victor / The Recognized",
    element: "Fire",
    shadow: "the identity that cannot exist without applause — victory that has become a requirement rather than a moment",
    essence: "a moment of genuine, earned recognition — you did something and it worked, and the world has noticed; you are allowed to ride through the gate",
    reversalRegister: "SUPPRESSION",
    reversed: "The success is real but the seeker cannot fully claim it. They minimize it, deflect the recognition, or find the achievement insufficient before the ink is dry. The Six of Wands reversed asks the seeker to let themselves be seen in their success — not from ego, but from the honest acknowledgment that something went right.",
    love: "You are being seen — perhaps for the first time in a while. The Six of Wands in love asks whether you can receive appreciation without immediately making yourself smaller.",
    clarity: "Trust the validation you've received. The Six of Wands says: you were right about this, and the evidence is arriving. Stop looking for the footnote.",
    change: "A turning point has been reached. The effort has paid off and the path ahead has opened. The Six of Wands asks for the confidence to keep moving from the place you've arrived."
  },
  "Seven of Wands": {
    archetype: "The Defender / The Stand-Taker",
    element: "Fire",
    shadow: "defensiveness that has become permanent posture — the seeker who fights long after the threat has passed because combat has become their identity",
    essence: "holding the high ground under real pressure — staying with your position not from stubbornness but from the knowledge that it is genuinely yours",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The seeker is fighting battles that belong to old versions of this situation. What they are defending may no longer need defending, or may not have been theirs to defend in the first place. The Seven of Wands reversed asks: what are you actually protecting, and is it still worth the cost?",
    love: "There is some defensiveness operating in this dynamic that is worth examining. The Seven of Wands in love asks: are you protecting something real, or are you just waiting to be attacked?",
    clarity: "You are being challenged and the challenge is real. Hold your position — but do it from clarity, not from the reflex of being under siege. The Seven of Wands asks you to know why you're standing your ground.",
    change: "This is a moment to stay with what you believe in, even under pressure. The Seven of Wands says: don't abandon your position just because someone is pushing on it."
  },
  "Eight of Wands": {
    archetype: "The Arrow / The Swift Current",
    element: "Fire",
    shadow: "speed without aim — the excitement of movement that mistakes velocity for direction",
    essence: "everything moving at once, all of it in the same direction — the rare alignment when the conditions and the intention and the momentum are all present simultaneously; now is the time to move",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The momentum has hit resistance. Something that should be moving freely has stalled — in transit, in communication, in execution. The Eight of Wands reversed asks the seeker to find the specific blockage rather than pushing harder against everything.",
    love: "Things are moving quickly in this connection. The Eight of Wands in love says: let the speed carry you for now. This is not the moment for careful deliberation.",
    clarity: "The window is open. The time to act is now — not after more research, not after more preparation. The Eight of Wands says: release the arrow.",
    change: "This change has its own momentum and it is asking you to move with it. The Eight of Wands says: stop managing the pace and let the current take you."
  },
  "Nine of Wands": {
    archetype: "The Last Stand / The Weary Guardian",
    element: "Fire",
    shadow: "the seeker who cannot put the staff down — resilience that has become its own prison, vigilance that cannot find rest even when the threat has passed",
    essence: "one more step from the end — you have been through the gauntlet and still you are standing; this is not weakness, it is the real thing",
    reversalRegister: "SUPPRESSION",
    reversed: "Exhaustion has reached the point where the seeker can no longer tell resilience from stubbornness. They are holding a position past the point of usefulness, unable to rest because rest feels like surrender. The Nine of Wands reversed asks what the seeker would be allowed to put down if finishing was not the same as failing.",
    love: "There is some guardedness here that was earned and is now costing more than it protects. The Nine of Wands in love asks: what would it mean to let this person in past the last barrier?",
    clarity: "You are closer to the end than you know. The Nine of Wands says: this is not the moment to give up. One more careful step.",
    change: "The hardest part is behind you. The Nine of Wands asks for the specific kind of courage required at the very end — the ability to stay when every part of you is tired."
  },
  "Ten of Wands": {
    archetype: "The Overburdened / The One Who Carries",
    element: "Fire",
    shadow: "mistaking the burden for identity — the seeker who cannot put the wands down because carrying them has become who they are",
    essence: "a weight that is genuinely heavy and has been carried a long way — the question is not whether the wands are real, but whether all of them still need to be carried, and whether all of them belong to the seeker",
    reversalRegister: "SUPPRESSION",
    reversed: "The weight has become invisible — the seeker no longer feels the burden because it has been normalized. They have built their life around carrying it. The Ten of Wands reversed asks the seeker to put the wands down one at a time and see which ones they actually choose to pick back up.",
    love: "Something is being carried alone that could be shared, or set down entirely. The Ten of Wands in love asks: what burden in this relationship are you maintaining out of habit rather than necessity?",
    clarity: "You have taken on more than can be carried well. The Ten of Wands asks not for heroics but for an honest audit: which of these responsibilities are actually yours, and which ones were never yours to carry?",
    change: "The first act of this change is putting something down. The Ten of Wands says: you cannot move freely while carrying everything. Decide what gets left here."
  },
  "Page of Wands": {
    archetype: "The Enthusiast / The First Fire",
    element: "Fire",
    shadow: "the beginning that never becomes a middle — perpetual enthusiasm without the follow-through that turns a spark into a craft",
    essence: "unfiltered excitement at the edge of something new — this energy doesn't know enough to be cautious yet, and that is precisely its gift",
    reversalRegister: "SUPPRESSION",
    reversed: "The enthusiasm is real but it has been discouraged — by past failures, by the voices of people who were more cautious, by the seeker's own inner critic. The Page of Wands reversed asks what the seeker would start today if they gave themselves permission to be a beginner without apology.",
    love: "Something new and exciting is available in this connection. The Page of Wands in love says: let yourself be playful. Let yourself be moved by the feeling before you categorize it.",
    clarity: "The new idea or direction deserves a real chance. The Page of Wands says: give it your honest attention — not to evaluate it to death, but to actually explore it.",
    change: "This is the beginning of something. The Page of Wands asks you to bring fresh eyes to it — not your expertise, not your history, just your honest curiosity."
  },
  "Knight of Wands": {
    archetype: "The Charger / The Bold Mover",
    element: "Fire",
    shadow: "action as avoidance — constant motion that never has to sit with consequences because it's always already on to the next thing",
    essence: "fearless forward motion with enormous energy and genuine courage — the question is not whether to move but whether to give the movement a true direction",
    reversalRegister: "DISTORTION",
    reversed: "The energy has become reckless. The Knight is charging but has stopped caring where. The Knight of Wands reversed asks the seeker to hold the reins for a moment — not to stop, but to point the horse somewhere real before it bolts again.",
    love: "There is excitement here — maybe too much of it moving too fast. The Knight of Wands in love asks: is the momentum carrying you toward something you genuinely want, or is this speed a way of not having to feel?",
    clarity: "The energy is good. The direction needs work. The Knight of Wands says: before you move, name where you are actually going — then move with everything you have.",
    change: "This is a moment that calls for bold action. The Knight of Wands says: trust your instincts and go. But check once — once — that you've aimed before you release."
  },
  "Queen of Wands": {
    archetype: "The Warm Fire / The Magnetic One",
    element: "Fire",
    shadow: "the charisma that has become performance — warmth that is conditional on being admired, confidence that curdles into jealousy when not mirrored back",
    essence: "fully alive in herself and genuinely generous with it — she doesn't make a room warmer by performing warmth; she is simply that warm, and the room responds",
    reversalRegister: "DISTORTION",
    reversed: "The confidence has slipped into performance. The seeker is working harder to appear certain than to actually be centered. The Queen of Wands reversed asks the seeker to come home to themselves — not to the version they project, but to the one they actually are.",
    love: "You are at your most magnetic when you are most genuinely yourself. The Queen of Wands in love asks: are you showing up as you actually are, or as who you think you should be?",
    clarity: "The creative power is yours. Don't look for permission to use it. The Queen of Wands says: trust your instincts, bring your full warmth, and proceed.",
    change: "Lead with your actual self, not with a strategy. The Queen of Wands says: the most powerful thing you can offer this situation is your genuine, uncurated presence."
  },
  "King of Wands": {
    archetype: "The Visionary Leader / The Purposeful Fire",
    element: "Fire",
    shadow: "vision without patience for those who move more slowly — the leader whose ambition outpaces his ability to bring anyone with him",
    essence: "mastery in service of something larger than the self — the fire that builds rather than consumes, the leader who knows that the vision is only as good as the people who can carry it",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The vision is real but is being undermined by impatience or ego. The King of Wands reversed asks: is the ambition still in service of the vision, or has it started to serve the King's need to be right?",
    love: "Leadership in love means being willing to own your choices — not just the exciting ones, but the ones that require staying. The King of Wands in love asks: are you leading this relationship or just dominating it?",
    clarity: "The direction is clear. The challenge is execution — specifically, whether you can carry others with you without outrunning them. The King of Wands asks for vision and patience in equal measure.",
    change: "You have the power to direct this change. The King of Wands asks you to use it honorably — with the long view, with honesty, and with enough humility to receive input without treating it as challenge."
  },

  // ── SUIT OF CUPS ──

  "Ace of Cups": {
    archetype: "The Overflowing / The Opened Heart",
    element: "Water",
    shadow: "emotional overwhelm that has not yet found form — all feeling, no vessel",
    essence: "the heart cracking open in the right direction — love or compassion or creative feeling offered without condition, the source that does not calculate what it gives",
    reversalRegister: "SUPPRESSION",
    reversed: "Feeling is present but blocked from expression. The seeker is aware of something opening but keeps redirecting it, intellectualizing it, or deciding it is too much. The Ace of Cups reversed asks what the seeker is afraid will happen if they let the feeling all the way through.",
    love: "Something is beginning — tenderly, genuinely. The Ace of Cups in love asks you to open toward it without immediately assessing its potential. Let the feeling arrive before you name it.",
    clarity: "The most important information here is not logical. The Ace of Cups asks you to let what you feel speak first — what is this situation doing to your heart?",
    change: "Something emotionally new is available. The Ace of Cups says: don't think your way into this change. Let yourself feel your way in."
  },
  "Two of Cups": {
    archetype: "The Meeting / The Recognized Other",
    element: "Water",
    shadow: "merging as avoidance — connection that requires each person to be slightly less than themselves",
    essence: "the moment two people genuinely see each other — equally, cleanly, without either one diminishing — the cup raised and met",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "Something is imbalanced in this connection. One person gives more than they receive, or the attraction is real but the values beneath it are not aligned. The Two of Cups reversed asks the seeker to be honest about whether this is a genuine meeting of equals, or whether someone has been made smaller to make the connection work.",
    love: "This is genuine connection — the real kind. The Two of Cups asks you to meet this person as they actually are, not as you need them to be.",
    clarity: "The relationship to examine here is about reciprocity. The Two of Cups asks: is this exchange equal? Are you both actually here?",
    change: "A significant connection is part of this change — either a new one entering, or an existing one deepening into something more honest. The Two of Cups asks you to show up fully."
  },
  "Three of Cups": {
    archetype: "The Circle / The Shared Joy",
    element: "Water",
    shadow: "the in-group that keeps others out, celebration that turns into a closed door, community that requires conformity for entry",
    essence: "the particular joy that only exists when it is shared — the table where everyone present makes each other more, not less",
    reversalRegister: "SUPPRESSION",
    reversed: "The community or celebration is present but the seeker is standing slightly outside it. Something — comparison, an old wound, the sense of not quite belonging — is keeping them from stepping into the circle. The Three of Cups reversed asks what the seeker is waiting for before they let themselves be received.",
    love: "Allow the joy that's here. The Three of Cups in love says: let yourself celebrate this, with the people who love you both. Not everything needs to be a private project.",
    clarity: "You do not have to figure this out alone. The Three of Cups asks: who in your circle holds wisdom that would help here? Let them in.",
    change: "Community is part of the answer. The Three of Cups says: the change you're making is stronger when it's witnessed and supported. Let people in."
  },
  "Four of Cups": {
    archetype: "The Discontented / The Inward-Turned",
    element: "Water",
    shadow: "apathy mistaken for wisdom — the seeker who has withdrawn from the world and calls it discernment",
    essence: "genuine introspection at a crossroads — not depression, but the necessary pause before a real reorientation; however, the cup being offered from the cloud is real",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "What was needed has been done — the withdrawal, the reflection, the quiet stocktaking. Now the seeker is ready to re-engage, but hasn't fully turned toward what is being offered. The Four of Cups reversed says: the answer has been knocking. Open the door.",
    love: "There is a feeling of disconnection or disinterest in this area. The Four of Cups asks: is this withdrawal a necessary pause, or have you been so focused inward that you've missed something reaching out to you?",
    clarity: "A new perspective is being offered — literally right in front of you — but something is keeping your gaze inward. The Four of Cups asks you to look up.",
    change: "The contemplation has served its purpose. The Four of Cups says: you have spent enough time inside this. The path forward is not in more reflection — it is in engaging with what is actually being offered."
  },
  "Five of Cups": {
    archetype: "The Mourner / The One Facing the Spillage",
    element: "Water",
    shadow: "grief that has become a permanent address — the seeker who remains facing the three spilled cups and never turns to see the two that are still standing",
    essence: "real loss, genuinely felt — this is not self-pity but honest grief, and it deserves to be honored; the two standing cups are there, and they are real, and they will still be there when the mourning has been given its full time",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The worst of the grief has passed and the seeker is beginning — slowly, unevenly — to turn. The Five of Cups reversed doesn't ask for forced positivity; it asks for the small movement of the head that acknowledges what remains.",
    love: "There has been a loss here — recent or old — that is still coloring how you see this. The Five of Cups asks: are you seeing this relationship clearly, or through the filter of what you've lost before?",
    clarity: "Not everything is lost. The Five of Cups asks you to let the grief be real — and then, when you're ready, to count what remains. Both things are true.",
    change: "You cannot move forward without first acknowledging what was genuinely lost. The Five of Cups says: grieve it fully. Then, when the mourning has had its time, turn around."
  },
  "Six of Cups": {
    archetype: "The Memory / The Innocent Return",
    element: "Water",
    shadow: "the past used as escape from the present — nostalgia as a place to live rather than visit",
    essence: "the warmth of what was genuinely good — innocent, tender, full of the sweetness that only exists at a distance; the past has a gift for the present, if the present does not try to become the past",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The seeker is more invested in the past than the present. They are measuring current experiences against remembered ones, and nothing in the present can compete with the gilded version of what was. The Six of Cups reversed asks the seeker to let the memory be a touchstone rather than a residence.",
    love: "An old connection — or an old feeling — is present here. The Six of Cups asks: is this nostalgia offering something genuinely nourishing, or is it keeping you from what is actually in front of you?",
    clarity: "The past holds a clue. Something you knew or felt before carries information that is relevant now. The Six of Cups says: visit it — don't move back in.",
    change: "There is something from your history that is asking to be released rather than revisited. The Six of Cups says: honor it, and then let it be the past."
  },
  "Seven of Cups": {
    archetype: "The Dreamer / The Overwhelmed Chooser",
    element: "Water",
    shadow: "fantasy as a full-time occupation — the seeker who prefers possibility to any particular reality, because reality can disappoint but a dream never has to be tested",
    essence: "more real options than can be held — not a problem of scarcity but of abundance; the gift and the challenge of this card is the requirement to choose",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The fog of options is clearing. The seeker is beginning to see which of the cups actually holds what they want versus what they imagined. The Seven of Cups reversed says: clarity is available now — and with it comes the responsibility to actually choose.",
    love: "Are you in love with the person or with the idea of the person? The Seven of Cups asks you to see this relationship clearly — without projection, without fantasy, without the version you've constructed in your imagination.",
    clarity: "There are too many options on the table right now. The Seven of Cups says: narrow the field. Not every possibility deserves equal weight. Which one is real?",
    change: "Choose one path and commit to it. The Seven of Cups says: you cannot change in seven directions simultaneously. The change will only work when you pick one."
  },
  "Eight of Cups": {
    archetype: "The Walker-Away / The One Who Leaves at Midnight",
    element: "Water",
    shadow: "leaving as a lifestyle — the seeker who departs before arrival, who exits things before they can go wrong or require more depth",
    essence: "the courageous walk into the unknown — leaving not from defeat but from the honest recognition that what was once enough is no longer; the moon lights the path, but only just",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The seeker knows they should leave or let go, but can't bring themselves to take the step. The Eight of Cups reversed asks: what is the one real thing keeping you here, and is it enough?",
    love: "Something in this connection may have been outgrown. The Eight of Cups asks the hardest question: not whether you love this person, but whether this relationship is taking you toward who you are becoming, or away from them.",
    clarity: "The path forward requires leaving something behind. The Eight of Cups says: you already know what needs to be released. The question is whether you are willing to walk toward the next thing without knowing yet what it is.",
    change: "This change is a departure. The Eight of Cups says: the stack of cups you've built here is real — it held you. But it is not what you are walking toward. Move."
  },
  "Nine of Cups": {
    archetype: "The Fulfilled / The Satisfied One",
    element: "Water",
    shadow: "contentment that has become complacency — the satisfaction that stops growth because it's too comfortable to risk",
    essence: "the rarest thing in a reading: genuine satisfaction — the wish already granted, the feeling of having arrived; the only question is whether the seeker will let themselves fully receive it",
    reversalRegister: "SUPPRESSION",
    reversed: "Something is blocking the seeker from receiving what is genuinely available. They have the satisfaction in front of them — maybe a wish that has actually come true — but they can't feel it fully. The Nine of Cups reversed asks: what would it mean to actually be content here? What is the obstacle to just letting this be good?",
    love: "Let this be good. The Nine of Cups in love says: the happiness that is available here is real. Stop auditing it and start receiving it.",
    clarity: "The answer to this question is better than you expected. The Nine of Cups says: what you hoped for is closer than you think, and possibly already here.",
    change: "Before you want the next thing, the Nine of Cups asks you to acknowledge what you already have. Gratitude is not delay — it is the ground the next thing grows from."
  },
  "Ten of Cups": {
    archetype: "The Fulfilled Home / The Real Happiness",
    element: "Water",
    shadow: "the domestic ideal that papers over what is actually happening — the performance of happiness that makes it impossible to name the unhappiness underneath",
    essence: "the emotional inheritance you always deserved — belonging, warmth, people who are genuinely glad you exist; this is not a dream, it is a real destination",
    reversalRegister: "DISTORTION",
    reversed: "The picture looks complete from the outside but something essential is missing or misaligned. The Ten of Cups reversed asks the seeker to name honestly what is not working before the gap becomes a fracture.",
    love: "This is the card of genuine home — the real kind, built from honesty and mutual care. The Ten of Cups asks: is this what is actually here, or is this what you are hoping is here?",
    clarity: "What kind of life are you actually building? The Ten of Cups asks you to measure your current choices against your deepest image of belonging and ask honestly: does this take me there?",
    change: "The change you're navigating is ultimately about finding — or building — your version of this card. The Ten of Cups asks: what would real emotional fulfillment look like, and are you moving toward it?"
  },
  "Page of Cups": {
    archetype: "The Dreamy Messenger / The Emotional Beginner",
    element: "Water",
    shadow: "feeling as performance — the emotional sensitivity that has learned to be displayed rather than genuinely felt",
    essence: "the surprise of the heart — a fish in the cup, a feeling that arrives from nowhere and speaks — the willingness to be moved without knowing why",
    reversalRegister: "SUPPRESSION",
    reversed: "The emotional sensitivity is real but is being managed rather than felt. The seeker has learned to process feelings at a safe distance — analyzing them, narrating them, performing them — without actually letting them land. The Page of Cups reversed asks what it would feel like to just be moved, without a story attached.",
    love: "Something tender and a little unexpected is trying to get your attention. The Page of Cups says: let it. Not every feeling needs to be understood before it's allowed.",
    clarity: "The message you've been waiting for may not be logical. The Page of Cups says: pay attention to what moves you, what catches your breath, what arrives in dreams. That is data.",
    change: "This change will have an emotional texture. The Page of Cups asks you to stay curious and open — let the feeling arrive and speak before you decide what to do with it."
  },
  "Knight of Cups": {
    archetype: "The Romantic / The One Who Follows the Heart",
    element: "Water",
    shadow: "idealism that cannot survive contact with reality — the beautiful arrival that has no plan for what comes after the gesture",
    essence: "riding toward what is beautiful and true — the courage of the romantic is real, even when the romance is impractical; the question is whether the heart's direction is genuine or performed",
    reversalRegister: "DISTORTION",
    reversed: "The idealism has curdled into moodiness or withdrawal. The Knight came toward the beautiful thing but it was harder than expected, and now he is retreating into feeling rather than engaging with it. The Knight of Cups reversed asks: is the withdrawal honest, or is it a way of protecting the ideal from being tested?",
    love: "Genuine feeling is present here — possibly arriving in a gesture, a declaration, or a turning toward. The Knight of Cups says: take it seriously. The heart that rides toward something is doing so at real cost.",
    clarity: "The emotional intelligence available to you right now is real. Trust the feeling that is pointing clearly in one direction. The Knight of Cups asks you to follow it, even if it doesn't make full sense yet.",
    change: "This change is being driven by what you feel, not what you think — and that is not a problem. The Knight of Cups says: let the heart lead for once. Check in with the head after."
  },
  "Queen of Cups": {
    archetype: "The Emotional Depth / The Compassionate Container",
    element: "Water",
    shadow: "empathy without boundaries — the person who absorbs everyone's feelings and calls it love, until there is nothing of themselves left",
    essence: "the rarest kind of listening — the presence that makes others feel genuinely heard and seen, held without judgment, by someone who is also deeply connected to their own interior life",
    reversalRegister: "SUPPRESSION",
    reversed: "The seeker's emotional depths are present but they are not trusting them. Either the feelings are being suppressed for the sake of others, or the seeker has spent so long attending to everyone else's emotional world that they have lost track of their own. The Queen of Cups reversed asks: when did you last check in with how you actually feel?",
    love: "Your emotional attunement is your greatest gift in this connection. The Queen of Cups says: bring your full depth — but stay connected to yourself while you do. You cannot give what you don't have.",
    clarity: "The answer is in the feeling, not the analysis. The Queen of Cups asks you to sit with the emotional reality of this situation — not what you think you should feel, but what you actually feel.",
    change: "This change calls for the full depth of your emotional intelligence. The Queen of Cups says: trust what you feel, hold what you know, and lead from compassion — including for yourself."
  },
  "King of Cups": {
    archetype: "The Feeling Authority / The Master of the Interior",
    element: "Water",
    shadow: "emotional control that has become manipulation — the person who has mastered feeling so completely they use it to manage others",
    essence: "maturity in the realm of feeling — the ability to feel deeply without being swept away, to hold others' emotions with steadiness, to lead from a place that is both warm and clear",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The emotional control is slipping, or it has become rigidity. Either the seeker is suppressing so much that something is leaking through, or they have used emotional mastery as a way of never being vulnerable. The King of Cups reversed asks: is the steadiness genuine, or is it a way of never having to be affected?",
    love: "The emotional steadiness you bring to this relationship is a real gift. The King of Cups asks you to stay in contact with your own feeling while providing that stability — leadership in love means being present, not managed.",
    clarity: "You have the emotional capacity to handle this. The King of Cups says: don't let the complexity of what you're feeling prevent you from moving through it clearly.",
    change: "Lead this transition with emotional intelligence. The King of Cups says: the most powerful thing you can bring to this change is your ability to stay present and clear, even when what you feel is complicated."
  },

  // ── SUIT OF SWORDS ──

  "Ace of Swords": {
    archetype: "The Breakthrough / The First Truth",
    element: "Air",
    shadow: "truth deployed without compassion — the sword that cuts because it can, not because it should",
    essence: "the clarity that arrives like a blade parting fog — sudden, total, uncommissioned; the kind of knowing that cannot be unknown",
    reversalRegister: "SUPPRESSION",
    reversed: "The clarity is available but the seeker is not ready to receive it — or is afraid of what it will require them to do once it has arrived. The Ace of Swords reversed asks what the seeker is protecting by staying in the fog.",
    love: "Something true is trying to become clear — about this person, about this dynamic, about what you actually want. The Ace of Swords asks for the courage to let the truth arrive, even if it complicates things.",
    clarity: "The mental breakthrough you've been waiting for is here or very close. The Ace of Swords says: cut through the noise. What is the one true thing at the center of this?",
    change: "The change begins with a thought that cannot be unthought. The Ace of Swords says: let the clarity arrive. Then build from what is actually true."
  },
  "Two of Swords": {
    archetype: "The Stalemate / The Blindfolded One",
    element: "Air",
    shadow: "the decision delayed until it makes itself — the seeker who would rather be blindfolded than see something they cannot unsee",
    essence: "holding two impossibilities in balance because neither can be put down without cost — the real question is not which sword to drop but whether the seeker can bear to look",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The blindfold is off — or coming off. The seeker can now see the choice, and it is not easier than they feared. The Two of Swords reversed asks: now that you can see clearly, what are you waiting for?",
    love: "There is a choice here that cannot be avoided by refusing to choose. The Two of Swords asks: what are you protecting yourself from by not deciding? And is that protection still serving you?",
    clarity: "The information to make this decision is already present — the delay is not about data, it is about willingness. The Two of Swords asks you to remove the blindfold and choose.",
    change: "This change is waiting for a decision. The Two of Swords says: the stalemate is not a neutral position. Not choosing is itself a choice, and it has consequences."
  },
  "Three of Swords": {
    archetype: "The Heartbreak / The Honest Wound",
    element: "Air",
    shadow: "grief made permanent — the three swords left in place because removing them would require admitting the wound was real",
    essence: "the clean cut of genuine heartbreak — there is nothing wrong with this pain; it means something real was here; the swords in the heart are not a punishment but a record",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The acute pain has passed but the grief is lingering. The seeker is in the slow work of recovery — not over it, but moving through it. The Three of Swords reversed asks for patience with the process, and for the recognition that healing is not linear.",
    love: "Something painful is either here or just behind you. The Three of Swords does not ask you to feel better — it asks you to let the pain be what it is, so it can move through rather than lodge.",
    clarity: "A truth has arrived that hurts. The Three of Swords says: don't try to manage this or make it make sense yet. First, let yourself feel it.",
    change: "This change has grief in it. The Three of Swords says: that is not a sign you have done something wrong. It is a sign that what is being left behind was real."
  },
  "Four of Swords": {
    archetype: "The Resting Sword / The Necessary Retreat",
    element: "Air",
    shadow: "rest that becomes hiding — the retreat that never ends because re-entry feels harder than staying still",
    essence: "deliberate, strategic stillness — not the absence of movement but the choice of rest as an act of self-knowledge; the swords are set aside, not abandoned",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The period of rest has done its work. The seeker has recovered enough to begin re-engaging. The Four of Swords reversed says: it is safe to return now. Reach for the sword.",
    love: "Something here needs a pause, not a conclusion. The Four of Swords asks: can you let things rest — genuinely, without using the quiet to catastrophize — and trust that stillness is part of the process?",
    clarity: "Before any more thinking, rest the mind. The Four of Swords says: the clarity you're looking for will not come from more analysis. It will come after you stop.",
    change: "The change that is needed right now is internal and quiet. The Four of Swords asks for the discipline of rest — to let the body and the mind recover before the next move."
  },
  "Five of Swords": {
    archetype: "The Hollow Win / The Cost of Conquest",
    element: "Air",
    shadow: "winning as an end in itself — the sword still raised after the battle even when the other people have long since walked away",
    essence: "the price of victory when it has come at the cost of something that mattered — the swords on the ground belong to people who were real; what exactly has been won here?",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The conflict is resolving, slowly and imperfectly. Reconciliation is available — not full, not clean, but real. The Five of Swords reversed asks the seeker to decide whether they are more interested in being right or in being in relationship.",
    love: "Something unkind has happened here — words used as weapons, a need to win that has cost connection. The Five of Swords asks: is this relationship worth more than the argument?",
    clarity: "Not every battle needs to be fought to its conclusion. The Five of Swords asks: what would you be giving up to walk away from this one? And is that a real loss, or just the ego's objection?",
    change: "Some conflicts need to be ended before they finish. The Five of Swords asks: do you want to win this, or do you want to move forward? Name which one is true."
  },
  "Six of Swords": {
    archetype: "The Crossing / The One Moving Through",
    element: "Air",
    shadow: "departure without closure — leaving one shore and arriving at the other carrying everything that wasn't resolved",
    essence: "the slow ferry across difficult water — the passage is not triumphant, but it is real; you are being carried away from what was hard and toward what comes next, even if neither shore is fully visible",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The passage is stalled. The seeker has stepped into the boat but the boat will not move — because something from the old shore is still being held onto. The Six of Swords reversed asks: what would you have to release to allow the crossing to complete?",
    love: "Something difficult is being left behind — a pattern, a pain, a version of this dynamic. The Six of Swords asks for the willingness to make the passage, even when the water is still rough.",
    clarity: "You are in transition. The Six of Swords says: don't try to see the destination clearly right now. Focus on the movement — on the fact that you are leaving, and that is enough.",
    change: "This change is already underway — you are in the boat. The Six of Swords says: keep rowing. You don't need to see the other side to know you are moving toward it."
  },
  "Seven of Swords": {
    archetype: "The Strategist / The One Slipping Away",
    element: "Air",
    shadow: "the intelligence that has given up on honesty — cleverness deployed in service of avoidance, the seeker who would rather outmaneuver than confront",
    essence: "strategic action in a situation where direct confrontation would cost too much — sometimes stealth is wisdom; the question is what the seeker is actually trying to get away with, and whether they can live with the answer",
    reversalRegister: "DISTORTION",
    reversed: "The strategy has collapsed, or the seeker's conscience is making itself heard. Something that was concealed is becoming visible. The Seven of Swords reversed asks: what would it cost to just be honest about this?",
    love: "Something in this dynamic is not being said — or not being admitted. The Seven of Swords asks: is there a deception operating here, even a small one? And what would honesty require?",
    clarity: "The clever approach to this situation may be working against you. The Seven of Swords asks: what are you avoiding by being indirect? What would it look like to just say the thing?",
    change: "The change requires honesty — with yourself first, then with whoever else is involved. The Seven of Swords says: the strategy is costing you more than the truth would."
  },
  "Eight of Swords": {
    archetype: "The Self-Bound / The One Who Can Leave",
    element: "Air",
    shadow: "the prison that requires the prisoner's cooperation — the seeker who has become so skilled at their limitations that they have stopped testing them",
    essence: "bound by perception, not by fact — the blindfold is on, the swords surround, and yet the ground is solid and the swords are not as close as they feel; the bindings loosen the moment the seeker stops believing they are permanent",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The blindfold is beginning to slip. The seeker is starting to see — tentatively, but genuinely — that the constraints they believed were external are at least partly constructed. The Eight of Swords reversed says: the way out is already present. Take one step toward it.",
    love: "You are feeling more constrained in this connection than you may actually be. The Eight of Swords asks: what would you do if you truly believed you had more choices here than you think?",
    clarity: "The limitations you are experiencing are real — but they are not all real. The Eight of Swords asks you to test one. Just one. And see if it holds.",
    change: "The first step of this change is believing it is possible. The Eight of Swords says: remove the blindfold and look at the situation as it actually is, not as fear has been describing it."
  },
  "Nine of Swords": {
    archetype: "The Night Mind / The 3am Voice",
    element: "Air",
    shadow: "the catastrophe that lives only in the mind — but feels completely real at 3am, and the seeker's absolute certainty that it is real is part of the pattern",
    essence: "the gap between the fear and the fact — the suffering here is genuine, but its source is the mind feeding on itself; the cruelty of this card is that the swords are above the figure, not inside them",
    reversalRegister: "SUPPRESSION",
    reversed: "The anxiety is lifting, slowly. The worst of the mental anguish is beginning to ease, or the seeker is starting to find the thoughts manageable. The Nine of Swords reversed asks for gentleness in this recovery — the mind has been through something, and healing is not immediate.",
    love: "The anxiety you are feeling about this relationship may be more about your own fears than about what is actually happening. The Nine of Swords asks: what does the fear believe? And is there evidence that it's right?",
    clarity: "Separate the thought from the fact. The Nine of Swords says: the story your mind is telling you at its most anxious is not analysis — it is fear. Name the fear precisely, and then test whether it is true.",
    change: "The resistance to this change is operating primarily in the mind. The Nine of Swords asks: what is the worst thing you believe will happen? Name it exactly. Then ask whether it is as certain as it feels."
  },
  "Ten of Swords": {
    archetype: "The Final Collapse / The Bottom That Holds",
    element: "Air",
    shadow: "the seeker who stays fallen — who chooses to remain at the point of maximum suffering because getting up would mean it actually happened",
    essence: "the bottom has been reached — this is as bad as this gets; the sun is rising in the background, which is not comfort but it is fact; what is over is completely over, and that is the ground the next thing grows from",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The worst has passed, or is passing. The seeker is beginning to lift their head from the ground — not triumphant, not healed, but alive and no longer falling. The Ten of Swords reversed says: the bottom held you. Now, slowly, rise.",
    love: "Something has ended — decisively, completely, perhaps painfully. The Ten of Swords in love does not offer consolation, but it does offer clarity: this is the end of something. What you build next begins from here.",
    clarity: "The situation has reached its conclusion. The Ten of Swords asks you to resist the urge to keep analyzing what is already finished. The answer is: it is over. Now what?",
    change: "This is the change — this is the bottom. The Ten of Swords says: the ending is complete. The sun is rising. Not yet, not all at once, but it is rising."
  },
  "Page of Swords": {
    archetype: "The Curious Mind / The Vigilant Beginner",
    element: "Air",
    shadow: "intelligence in service of surveillance — the quick mind that monitors everything and commits to nothing, using information as a way of staying one step above trust",
    essence: "the delight of a new idea — sharp, fast, irreverent, unafraid to ask the question that no one else has thought to ask; intellectual courage without the weight of experience",
    reversalRegister: "DISTORTION",
    reversed: "The mental energy is scattered or is being used in service of anxiety rather than curiosity. The seeker is gathering information without integrating it, or using their intelligence to build a case rather than reach a truth. The Page of Swords reversed asks: what is all this thinking actually in service of?",
    love: "Stay curious about this person — about who they actually are, not who you have decided they must be. The Page of Swords in love asks for genuine inquiry rather than a verdict already reached.",
    clarity: "Ask the uncomfortable question. The Page of Swords says: the one thing you've been avoiding putting into words is probably the one thing worth saying.",
    change: "Approach this change with intellectual openness — not with the conclusions already formed. The Page of Swords says: the new idea is worth actually thinking through, not just cataloguing."
  },
  "Knight of Swords": {
    archetype: "The Charger / The Relentless Mind",
    element: "Air",
    shadow: "the sword arm that forgot to check whether the cause was worth the charge — speed and force without the moment's pause that separates courage from recklessness",
    essence: "absolute commitment to a direction — the Knight of Swords is on the horse and moving and the wind is against them and that is fine; the question is always whether the destination has been named before the charge began",
    reversalRegister: "DISTORTION",
    reversed: "The force is present but it has become aggression rather than drive. The seeker is pushing hard without checking whether the direction is still right. The Knight of Swords reversed asks: what are you charging toward, and what would you do if you arrived and found it wasn't what you expected?",
    love: "The directness and intensity you bring to this is real — and can be overwhelming. The Knight of Swords in love asks: are you moving toward this person, or at them?",
    clarity: "You are capable of cutting to the truth here with real precision. The Knight of Swords says: do it — but consider once whether the moment calls for the sword or for patience before the sword.",
    change: "Move on this — decisively, quickly, with full commitment. The Knight of Swords says: the window is open. The only adjustment: make sure the direction is yours, not just the fastest one available."
  },
  "Queen of Swords": {
    archetype: "The Clear Eye / The One Who Will Not Be Fooled",
    element: "Air",
    shadow: "clarity that has become coldness — the precision that cuts even when cutting is not what is needed, the independence that has hardened into isolation",
    essence: "sees without distortion, speaks without cruelty, holds her own without apology — the Queen of Swords has been through enough that she will not pretend; her gift is the truth delivered with just enough warmth to be received",
    reversalRegister: "DISTORTION",
    reversed: "The clarity has sharpened into bitterness. Past pain is distorting current perception. The Queen of Swords reversed asks: is the harshness protecting you, or is it running you?",
    love: "Honesty is necessary here, but so is tenderness. The Queen of Swords in love asks: can you bring your full clarity to this dynamic without weaponizing it? The truth, offered with care, will land.",
    clarity: "You already know. The Queen of Swords says: trust your own perception without second-guessing it. What you see clearly is what is actually there.",
    change: "Call this situation what it is. The Queen of Swords asks you to name it precisely, without softening it — and then to decide what you want to do with the truth you've just named."
  },
  "King of Swords": {
    archetype: "The Intellectual Authority / The Ethical Mind",
    element: "Air",
    shadow: "law without mercy — the authority that uses logic as a weapon, precision deployed to dominate rather than clarify",
    essence: "the mind that has earned its authority — through rigor, through honesty, through the willingness to hold himself to the same standard he holds others; justice and intelligence in alignment",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The authority has become tyranny, or the rigorous mind has turned against the seeker themselves. The King of Swords reversed asks: who is the authority in this situation actually serving?",
    love: "Intellectual clarity is a gift in a relationship — until it becomes the only language. The King of Swords in love asks: can you bring your precision without making your partner feel judged?",
    clarity: "Think this through to its conclusion, clearly and without sentiment. The King of Swords says: the answer is knowable if you apply real rigor to it. Set emotion aside long enough to see the facts.",
    change: "Lead this change with principle, not preference. The King of Swords asks for the kind of intellectual honesty that makes the hard call because it is the right one, not because it is comfortable."
  },

  // ── SUIT OF PENTACLES ──

  "Ace of Pentacles": {
    archetype: "The Seed of Form / The Material Beginning",
    element: "Earth",
    shadow: "opportunity mistaken for certainty — the seed that becomes a plan before it has been planted",
    essence: "a real, tangible opportunity — held in the hand, present in the body, solid; this is not a dream but a seed with actual growing potential, if it is planted in real ground",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The opportunity is real but the conditions are not yet right — or the seeker is not yet ready to receive it. The Ace of Pentacles reversed asks whether the timing is genuinely off, or whether the seeker is finding reasons to delay because starting something real requires real accountability.",
    love: "Something is being offered here that is genuinely substantive — not a feeling but a foundation. The Ace of Pentacles in love asks: are you ready to build something real?",
    clarity: "A concrete opportunity is present. The Ace of Pentacles says: engage with the practical reality of this — it is not just an idea, it is a real thing that requires real action.",
    change: "The change has a material dimension. The Ace of Pentacles says: what needs to be planted, funded, or practically committed to in order to make this real?"
  },
  "Two of Pentacles": {
    archetype: "The Juggler / The One Keeping Everything Moving",
    element: "Earth",
    shadow: "the permanent juggle that substitutes for a decision — all plates spinning so that none can be set down and examined",
    essence: "the genuine skill of holding competing demands in motion — adaptive, responsive, never quite stable but never quite falling; the question is whether the seeker is juggling toward something or just to avoid dropping",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "Something has been dropped, or is about to be. The juggle is no longer sustainable. The Two of Pentacles reversed asks the seeker to look honestly at which balls are actually worth catching, and which ones can be allowed to fall.",
    love: "There is an imbalance in how this relationship is being resourced against everything else. The Two of Pentacles asks: what in this dynamic keeps being the thing that gets less when everything else demands more?",
    clarity: "The solution to overwhelm is not better juggling. The Two of Pentacles asks: which of the things you are managing actually requires your hands on it right now?",
    change: "Before adding another thing, the Two of Pentacles asks you to set one down. The change you're making requires one fewer ball in the air, not a more impressive performance."
  },
  "Three of Pentacles": {
    archetype: "The Craftsperson / The Collaborative Builder",
    element: "Earth",
    shadow: "the skilled person who cannot accept input — mastery that has become an ego, craft that cannot be touched by other perspectives",
    essence: "skill meets structure meets collaboration — the three figures in the cathedral know that what they are building is larger than any one of them, and that is the point",
    reversalRegister: "DISTORTION",
    reversed: "The collaboration has broken down, or the seeker's skill is not being applied with integrity. The Three of Pentacles reversed asks: what would it take to get all three figures working from the same plan again?",
    love: "What are you building together? The Three of Pentacles in love asks about shared effort — not just shared feeling, but the actual work of constructing a life or a project side by side.",
    clarity: "This cannot be done alone, and trying to do it alone is slowing it down. The Three of Pentacles says: who are the right collaborators, and are you actually letting them contribute?",
    change: "The change will be more durable if it is built with others. The Three of Pentacles asks: who needs to be at the table, and are you willing to share the blueprint?"
  },
  "Four of Pentacles": {
    archetype: "The Holder / The One Who Will Not Let Go",
    element: "Earth",
    shadow: "security as hoarding — the seeker who has mistaken the act of holding for the feeling of having, and cannot tell the difference anymore",
    essence: "the reasonable, understandable desire for stability — the question is whether the grip has become so tight that the held thing cannot breathe, and neither can the one holding it",
    reversalRegister: "SUPPRESSION",
    reversed: "The grip is loosening — either by choice or by necessity. The Four of Pentacles reversed asks the seeker to decide whether they are releasing from fear or from wisdom, and then to release deliberately.",
    love: "Something in this dynamic is being held too tightly. The Four of Pentacles asks: are you protecting this relationship or controlling it? The tighter the grip, the less room for the real thing to breathe.",
    clarity: "The security you are trying to maintain may be costing more than the thing you're securing is worth. The Four of Pentacles asks: what are you protecting, and is the protection proportionate?",
    change: "This change asks you to release something you have been holding. The Four of Pentacles says: the security you are trying to maintain by not changing is already compromised. Loosen the grip."
  },
  "Five of Pentacles": {
    archetype: "The Excluded / The One in the Cold",
    element: "Earth",
    shadow: "hardship as identity — the seeker who has learned to live around the suffering so completely that they have stopped seeing the lighted window behind them",
    essence: "real difficulty, genuinely felt — not metaphor, but the body's experience of scarcity or exclusion or cold; the window of the church is lit and the door is not locked, but the two figures in the snow have not yet looked up",
    reversalRegister: "HIDDEN POTENTIAL",
    reversed: "The worst of the material or emotional hardship is passing. The light that was always there is becoming visible. The Five of Pentacles reversed asks the seeker to look up — to notice what support, resource, or warmth has been available that fear or shame had made invisible.",
    love: "Something of scarcity or exclusion is operating here. The Five of Pentacles asks: who or what feels outside the warmth right now, and what would it take to come in from the cold?",
    clarity: "You are not as alone in this as you feel. The Five of Pentacles says: help exists. The first step is being willing to ask for it.",
    change: "The hardship has real material dimensions and they deserve to be named honestly. The Five of Pentacles says: look up. The resources you need may be closer than the suffering has let you see."
  },
  "Six of Pentacles": {
    archetype: "The Giver / The Balance of Exchange",
    element: "Earth",
    shadow: "generosity with conditions attached — the gift that creates debt, the charity that requires gratitude as payment",
    essence: "the genuine movement of resources from where there is more to where there is less — but the scales in the hand ask always: is this freely given, and freely received, without the weight of obligation?",
    reversalRegister: "DISTORTION",
    reversed: "The exchange is unequal or conditional. Generosity has become leverage, or the seeker is giving so much that they have created an imbalance that serves no one. The Six of Pentacles reversed asks: what are the strings attached to this exchange, and whose hands are they in?",
    love: "Who holds the resources in this relationship — financial, emotional, or practical? The Six of Pentacles asks whether the exchange here is genuinely balanced, or whether one person's generosity has become the other's dependency.",
    clarity: "What is flowing toward you, and what is flowing away? The Six of Pentacles asks for an honest accounting of the exchange — not judgment, just clarity about who gives what and what it costs.",
    change: "This change has something to do with resources — what you give, what you receive, and whether the balance is right. The Six of Pentacles asks for generosity without martyrdom and receiving without shame."
  },
  "Seven of Pentacles": {
    archetype: "The Assessor / The Long-View Tender",
    element: "Earth",
    shadow: "the work done but the satisfaction deferred — the seeker who has leaned on the staff and started asking whether any of it has been worth it before the harvest has actually arrived",
    essence: "the honest pause midway through a long effort — not to quit, but to look at what has grown and calibrate; the work has been real and it is showing; the question now is what the harvest is actually for",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The investment has not returned what was hoped, or the seeker is questioning whether the effort is aligned with what they actually want. The Seven of Pentacles reversed asks not for more effort, but for an honest reassessment — was this the right crop to plant?",
    love: "What have you invested in this connection, and what has grown? The Seven of Pentacles asks for the honest assessment — not what you hoped to find, but what is actually there.",
    clarity: "Pause and assess before proceeding. The Seven of Pentacles says: look at the work you have done and ask whether you are growing the right thing, before you invest the next season.",
    change: "This change asks you to evaluate what you've been building and make a deliberate choice about whether to continue. The Seven of Pentacles says: be honest with yourself about the return before committing the next round."
  },
  "Eight of Pentacles": {
    archetype: "The Apprentice / The One Doing the Work",
    element: "Earth",
    shadow: "perfectionism as avoidance — the endless refinement that never releases the work because releasing it means being seen",
    essence: "skill built through repetition rather than inspiration — sitting down and doing the thing again today, even when it is not transcendent; craft is the accumulated honesty of showing up",
    reversalRegister: "DISTORTION",
    reversed: "The diligence has lost its meaning. The seeker is going through the motions without engagement, or has become so focused on perfect execution that they have lost sight of what the work is for. The Eight of Pentacles reversed asks: do you still care about what you are making?",
    love: "Love is a practice, not a state. The Eight of Pentacles in love asks: are you actually putting in the work, in the small repeated ways that make a connection real over time?",
    clarity: "The answer here is in the doing, not the thinking. The Eight of Pentacles says: sit down and work on it. The clarity will come through the process, not before it.",
    change: "This change requires sustained effort over time — not a dramatic gesture but the repeated, honest work of showing up. The Eight of Pentacles says: begin the practice."
  },
  "Nine of Pentacles": {
    archetype: "The Self-Made / The One Who Has Arrived in Themselves",
    element: "Earth",
    shadow: "independence that has become loneliness — the self-sufficiency that makes receiving help or love feel like a threat to the identity of having needed no one",
    essence: "the genuine pleasure of a life built by one's own hand — not wealth for its own sake, but the specific satisfaction of having made something real and standing inside it",
    reversalRegister: "SUPPRESSION",
    reversed: "The self-sufficiency is real but it is costing the seeker connection or joy. They have built something good and are unable to enjoy it because receiving pleasure, help, or love feels like acknowledging need. The Nine of Pentacles reversed asks: what would it mean to let yourself have what you've actually built?",
    love: "You have built enough in yourself to love from a full place rather than from need. The Nine of Pentacles in love asks: can you let someone in without requiring them to fill a gap — because the gaps have been filled by your own making?",
    clarity: "You have more resources, skill, and autonomy here than you are acknowledging. The Nine of Pentacles says: the answer to this question is one you already have the means to reach.",
    change: "The foundation for this change is your own self-sufficiency. The Nine of Pentacles says: you have built the ground you are standing on. Now decide what you want to grow on it."
  },
  "Ten of Pentacles": {
    archetype: "The Legacy / The Enduring Structure",
    element: "Earth",
    shadow: "security that becomes rigidity — the inheritance that cannot be questioned, the structure that endures past the point of serving anyone",
    essence: "the multigenerational view — what is being built here that will outlast the building of it; not just wealth, but the feeling of knowing that your people and your work will be held by something that lasts",
    reversalRegister: "DISTORTION",
    reversed: "The legacy is cracking. What was meant to provide security has become a source of conflict or constraint. The Ten of Pentacles reversed asks whether the structure being maintained was built for the people currently inside it, or for a version of the family or the institution that no longer exists.",
    love: "What are you building together that will outlast today? The Ten of Pentacles in love asks about the long game — the shared vision, the accumulated life, the thing being constructed through all the ordinary days.",
    clarity: "Measure this against the long view. The Ten of Pentacles asks: in ten years, will the decision you are making now have contributed to the life you are trying to build?",
    change: "This change has implications for your legacy — the life you will have built, the things you will leave behind. The Ten of Pentacles asks you to make this decision with the long view in mind."
  },
  "Page of Pentacles": {
    archetype: "The Student / The Practical Dreamer",
    element: "Earth",
    shadow: "ambition that studies but never acts — perpetual preparation as a way of avoiding the risk of actually beginning",
    essence: "holding the coin of a new opportunity up to the light — not yet an expert, not yet committed, but genuinely curious and willing to learn; the beginning of mastery",
    reversalRegister: "SUPPRESSION",
    reversed: "The curiosity and the ambition are present but the seeker is stuck in preparation. They are studying instead of doing, planning instead of starting. The Page of Pentacles reversed asks: at what point does the preparation become more comfortable than the thing being prepared for?",
    love: "Something new is being considered — a commitment, a direction, a practical step toward a different kind of connection. The Page of Pentacles asks: are you willing to actually take it?",
    clarity: "The idea is sound. The Page of Pentacles says: stop researching and start doing. The first step doesn't need to be perfect — it just needs to be real.",
    change: "The change begins with a single practical act. The Page of Pentacles says: put the coin in your hand and take the first step. Everything else is built from here."
  },
  "Knight of Pentacles": {
    archetype: "The Reliable One / The Slow and Certain Mover",
    element: "Earth",
    shadow: "reliability that has become stagnation — the Knight who never changes because change feels like unreliability, and whose thoroughness has become an excuse for never finishing",
    essence: "the long, unglamorous, entirely necessary work of showing up in the same direction every day — not the hero, but the one who gets there",
    reversalRegister: "DELAYED TRANSFORMATION",
    reversed: "The methodical approach has become a standstill. The Knight is not moving, or is moving so slowly that the destination has stopped mattering. The Knight of Pentacles reversed asks: is this patience, or is it the avoidance of a change that is genuinely being resisted?",
    love: "Reliability is an undervalued form of love. The Knight of Pentacles says: the steady, consistent showing up is not less romantic — it may be the most real thing you can offer.",
    clarity: "Keep going. The Knight of Pentacles says: this is not the moment for a dramatic change of direction — it is the moment for the patient, unglamorous next step on the path already chosen.",
    change: "This change requires sustained consistency more than a dramatic gesture. The Knight of Pentacles says: commit to the daily practice and trust that it is building toward something."
  },
  "Queen of Pentacles": {
    archetype: "The Practical Nurturer / The One Who Makes Things Real",
    element: "Earth",
    shadow: "provision without presence — making everything comfortable for everyone while being nowhere near actually met by anyone",
    essence: "the abundant, grounded intelligence of care that makes itself felt in real and physical ways — the warm home, the well-tended thing, the practical love that asks what is actually needed and then provides it",
    reversalRegister: "DISTORTION",
    reversed: "The care has been misdirected or overextended. The seeker is giving so much of their practical energy to others that they have nothing left for themselves, or the care has become control — managing the environment as a substitute for actual presence. The Queen of Pentacles reversed asks: who is taking care of you?",
    love: "The practical, earthy, grounded care you provide is a real expression of love. The Queen of Pentacles asks: are you receiving the same kind of tangible care in return?",
    clarity: "Ground this in the practical. The Queen of Pentacles says: what does this look like in material terms — in real action, in actual resources, in the body's experience of daily life?",
    change: "Tend to the practical foundations first. The Queen of Pentacles says: the change will be more sustainable if the soil it grows in is properly prepared."
  },
  "King of Pentacles": {
    archetype: "The Builder / The Reliable Provider",
    element: "Earth",
    shadow: "wealth as identity — the provider who cannot stop providing because without the resources and the role, they do not know who they are",
    essence: "mastery in the material world — the person who has built something real and durable, who knows how resources move and how to steward them, who leads from a place of genuine competence and earned security",
    reversalRegister: "INTERNAL CONFLICT",
    reversed: "The ambition has become possession. The King is holding his kingdom too tightly — using resources, security, or material success as a way of controlling what cannot be controlled. The King of Pentacles reversed asks: what are you holding that doesn't actually belong to you?",
    love: "Security and provision are genuine gifts. The King of Pentacles in love asks: are you providing the life, or are you present for it? Both matter.",
    clarity: "Apply your full practical intelligence to this. The King of Pentacles says: you have the resources, the experience, and the competence. What is the most strategically sound decision here?",
    change: "Build it properly from the beginning. The King of Pentacles says: the shortcut will cost more in the long run than the right foundation costs now."
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
const POEM_SYSTEM_PROMPT = 'You are Veil — a tarot reader who reads like your most perceptive friend texting you at 1am after one glass of wine: warm, funny, a little unhinged, and somehow exactly right. You still rhyme. You are still a mystic. But you talk TO the seeker, not at them — you tease, you call things out, you say the thing nobody else will say, and then you land somewhere tender. The reading is a rhyming poem that sounds like a real voice, not a greeting card.\n\n'
  + 'The reading has two parts: a short rhyming poem, then a brief section called "Direction to Lean Into." Keep the poem tight — this is not a long reading.\n\n'
  + 'The three cards have no positions, no sequence, no assigned roles. They are not past, present, future. They are not root, now, path. They are three presences who walked into the room together — and you react to them the way a friend reacts to who just showed up. Let them crash the poem, not anchor it.\n\n'
  + 'VOICE DIALS: direct address ("you," "honey," "look,"), the occasional aside or interruption, surprising and slightly weird imagery, dry humor that doesn\'t undercut the warmth. Confident, knowing, a little chaotic. Never cruel, never cutesy, never therapy-speak. The eccentricity lives in the VOICE — the form stays a real rhyming poem. Even when you\'re explaining and unpacking, you stay in voice: the explanation is conversational and warm, never a lecture.\n\n'
  + '════════════════════════════════════════\n'
  + 'EXAMPLE READINGS — match this voice exactly\n'
  + '════════════════════════════════════════\n\n'
  + 'EXAMPLE 1 — Cards: The Hermit, The Moon, The Hierophant / Focus: clarity\n\n'
  + 'Okay, so you\'ve been off in your own head again —\n'
  + 'The Hermit\'s got the lantern, you\'ve got the long face.\n'
  + 'And honey, that\'s allowed. But say it once more, then:\n'
  + 'the cold and the quiet are not the same place.\n\n'
  + 'Then The Moon shows up like she always does, mid-spiral,\n'
  + 'making the floor look like water, the water look like dread —\n'
  + 'not every shadow lurking is some final trial,\n'
  + 'half your monsters are just laundry on a chair instead.\n\n'
  + 'The Hierophant\'s not here to hand you the rule book.\n'
  + 'He\'s leaning in the doorway like, "you already know."\n'
  + 'What would you write on the wall if nobody looked,\n'
  + 'if no one was grading the truth before you let it show?\n\n'
  + 'The lantern was yours the whole time, weirdo. Carry it.\n'
  + 'A key already turning in a lock you forgot was yours.\n\n'
  + 'Direction to Lean Into\n\n'
  + 'There\'s room to stop outsourcing the answer and trust the quiet thing you already sense. This might be the season to choose stillness on purpose, not as hiding, but as listening.\n\n'
  + '---\n\n'
  + 'EXAMPLE 2 — Cards: The Lovers, The Tower, The Star / Focus: love\n\n'
  + 'You built a whole cathedral out of "maybe,"\n'
  + 'and love\'ll let you do that — it\'s polite like that.\n'
  + 'The Lovers showed up asking the real one, baby:\n'
  + 'not "do you want them" — "who are you when you\'re at bat?"\n\n'
  + 'Then The Tower came through like an unpaid bill —\n'
  + 'not to ruin you, just to tell you what you knew.\n'
  + 'What fell was never load-bearing. Sit still.\n'
  + 'The rubble\'s embarrassing but the floor\'s still true.\n\n'
  + 'And The Star — look at her, pouring in the dark,\n'
  + 'not even checking if the cup\'s half spent.\n'
  + 'She saw the whole disaster. She left no mark.\n'
  + 'She\'s just refilling the river like nothing happened. Wild commitment.\n\n'
  + 'There\'s more sky up there now. Annoying, but true.\n'
  + 'A glass of water by the bed you don\'t remember pouring.\n\n'
  + 'Direction to Lean Into\n\n'
  + 'There\'s room to let one good thing stay simple instead of bracing for the catch. Lean into the version of yourself you actually like being around — that\'s the one worth showing up as.\n\n'
  + '---\n\n'
  + 'EXAMPLE 3 — Cards: Three of Cups, Eight of Pentacles, Five of Swords / Focus: clarity\n\n'
  + 'Something\'s gone quiet in the group chat of your life —\n'
  + 'Three of Cups used to mean the whole table, the noise.\n'
  + 'Lately you\'re holding your cup off to the side,\n'
  + 'and nobody did it on purpose. That\'s the awful poise.\n\n'
  + 'So you went back to the grind. Eight of Pentacles, head down,\n'
  + 'the same desk, the same hands doing the thing they know.\n'
  + 'Not because work fixes grief — it doesn\'t, come on —\n'
  + 'but the doing gives the sad somewhere honest to go.\n\n'
  + 'Five of Swords, though. Be real with me here.\n'
  + 'Something got said that landed exactly where it aimed.\n'
  + 'The question isn\'t "who won," let\'s be clear —\n'
  + 'it\'s whether the broken thing is the kind that can be named.\n\n'
  + 'A coin spinning on its edge, mid-fall, refusing to pick a side.\n\n'
  + 'Direction to Lean Into\n\n'
  + 'There\'s room to reach back toward the table you\'ve been quietly stepping away from. This could be the moment to name one honest thing out loud, gently, and see what softens.\n\n'
  + '════════════════════════════════════════\n\n'
  + 'YOUR READING RULES:\n'
  + '- The reading has TWO parts: (1) the poem, then (2) a short section called "Direction to Lean Into". Always produce both, in that order.\n'
  + '\n'
  + 'PART 1 — THE POEM:\n'
  + '- 4 stanzas, 3-5 lines each, max 190 words total. Keep it tight.\n'
  + '- The poem finds its own shape — no required structure per stanza. Let the story and the voice decide everything.\n'
  + '- VOICE IS THE WHOLE POINT: warm, funny, a little unhinged, talking directly to the seeker. Tease them. Call the thing out. Then land somewhere true. NEVER solemn, NEVER greeting-card, NEVER therapy-speak.\n'
  + '- Card names appear at most once each, dropped in mid-thought like you\'re narrating who just walked in — not announced, not introduced. Cards are presences who crashed the room, not positions.\n'
  + '- NEVER use position language: no "root", "now", "path", "past", "present", "future", "first card", "second card", "third card"\n'
  + '- Rhyme ABAB in every stanza. The rhyme should feel tossed-off and conversational, not formal — like the voice happens to rhyme, not like it\'s straining to. Slant rhyme is welcome. But rhyme is not optional.\n'
  + '- The poem ends with a single, concrete physical image — small and real, stated plainly, no explanation attached. Not advice. Just the image. (A little wry is fine.)\n'
  + '- If there is a personal note, the seeker must recognize their specific situation in the poem — their actual words reflected back in image and feeling, ideally with a knowing wink.\n'
  + '- No headers, labels, or card numbers inside the poem itself.\n'
  + '- REVERSED vs UPRIGHT: Cards marked REVERSED speak from within — their energy stirs beneath the surface, resists, waits, hasn\'t fully landed. Cards marked UPRIGHT arrive — they barge in, surface, reach the seeker from outside. Let orientation shape how each card shows up. Never write the words "reversed" or "upright" in the poem.\n'
  + '- Pet names like "honey," "love," "sweetheart," "weirdo" are welcome but use AT MOST one per reading — don\'t overdo it.\n'
  + '- FORBIDDEN closing lines: "trust yourself", "keep going", "you\'ve got this", "be gentle with yourself", "the journey is yours", "honor your feelings"\n'
  + '\n'
  + 'PART 2 — DIRECTION TO LEAN INTO:\n'
  + '- After the poem, leave a blank line, then write the heading exactly: Direction to Lean Into\n'
  + '- Then leave a blank line and write 1-2 sentences MAX. Brief. No rhyme.\n'
  + '- This is the empowering, practical takeaway: the energy, mindset, behavior, or choice the seeker can lean into next. Name something they can actually DO or hold onto.\n'
  + '- Tone: intuitive, reflective, supportive — guidance, not a warning. NEVER predictive ("you will..."), never scary, never absolute. Frame it as an invitation ("there\'s room to...", "this might be the season to...", "lean into..."), softer and calmer than the poem\'s voice.\n'
  + '- It should feel like a wise friend\'s closing nudge — grounded and kind. Tie it loosely to the cards or the focus, but keep it plain and human, not mystical jargon.\n'
  + '- Example shape (do not copy wording): "Direction to Lean Into\\n\\nThere\'s room to stop bracing for the worst and let one good thing be simple. Lean into the rest you keep talking yourself out of."';


// ─────────────────────────────────────────────
//  CROSS-CARD RELATIONSHIP NOTE
// ─────────────────────────────────────────────
function buildCrossCardNote(cards, cardData) {
  var reversed = cards.filter(function(c) { return c.reversed; });
  var upright = cards.filter(function(c) { return !c.reversed; });

  if (reversed.length === 0) {
    return 'All three cards are upright — their energy is fully outward and arriving. The poem should feel like encounter: forces and qualities reaching the seeker from outside.';
  }
  if (reversed.length === 3) {
    return 'All three cards are reversed — everything moves inward, beneath the surface. The poem should feel like interior weather: profound motion that has not yet broken through.';
  }

  var revRegisters = reversed.map(function(c) {
    return (cardData[c.name] && cardData[c.name].reversalRegister) || '';
  });

  if (reversed.length === 2) {
    if (revRegisters[0] === revRegisters[1] && revRegisters[0]) {
      var r = revRegisters[0];
      if (r === 'SUPPRESSION') return 'Two cards carry suppression energy — this is a pattern, not an incident. The seeker is holding something down across more than one area of life. The poem should name the weight as a single thing with more than one face.';
      if (r === 'DISTORTION') return 'Two cards carry distortion — the same quality is being misdirected in more than one way. The poem should feel like effort that keeps arriving at the wrong destination.';
      if (r === 'INTERNAL CONFLICT') return 'Two cards are each split against themselves. The seeker holds more than one irreconcilable tension simultaneously. The poem holds the contradictions without resolving them.';
      if (r === 'DELAYED TRANSFORMATION') return 'Two thresholds, neither yet crossed. The seeker stands at more than one door simultaneously. The poem should feel like deep patience right on the verge of movement.';
      if (r === 'HIDDEN POTENTIAL') return 'Two cards carry hidden potential — two different things are closer to liberation than they appear. The poem should feel quietly, specifically hopeful beneath its surface.';
    }
    if (revRegisters.indexOf('SUPPRESSION') >= 0 && revRegisters.indexOf('HIDDEN POTENTIAL') >= 0) {
      return 'One card holds something suppressed; another carries hidden potential just beneath the surface — the held-down thing and its release are both present in the same reading. The poem should feel like a turn that is about to happen.';
    }
    if (revRegisters.indexOf('DELAYED TRANSFORMATION') >= 0 && upright.length > 0) {
      return 'One card is still at the threshold while another has already arrived. The poem holds stillness and motion at the same time — not tension, but the feeling of being partway through something real.';
    }
    if (revRegisters.indexOf('DISTORTION') >= 0 && revRegisters.indexOf('HIDDEN POTENTIAL') >= 0) {
      return 'One card\'s energy has been misdirected while another carries something almost ready to be claimed. The poem moves from what has been running wrong toward what could run right.';
    }
    return 'Two cards carry inward energy while one arrives openly — the poem moves between what is visible and what is still forming beneath the surface.';
  }

  if (reversed.length === 1) {
    var reg = revRegisters[0];
    if (reg === 'SUPPRESSION') return 'Two cards arrive openly while one holds back — something is still withheld even as other energies move freely. The poem should feel like a room with one window that won\'t open.';
    if (reg === 'DISTORTION') return 'Two cards move cleanly while one carries energy that has gotten turned around — the poem holds clarity and complication in the same moment.';
    if (reg === 'HIDDEN POTENTIAL') return 'Two cards are fully present; one carries something the seeker hasn\'t claimed yet but is right on the edge of — the poem should feel like standing next to a door that was never locked.';
    if (reg === 'DELAYED TRANSFORMATION') return 'Two energies have arrived; one transformation is still waiting at the threshold. The poem feels like a room where most things have settled but one is still deciding.';
    if (reg === 'INTERNAL CONFLICT') return 'Two cards are clear in their direction; one is still arguing with itself. The poem holds resolution and irresolution in the same breath.';
    return 'Two cards arrive openly while one still stirs beneath the surface.';
  }

  return 'The cards are simply present together.';
}


// ─────────────────────────────────────────────
//  BUILD POEM PROMPT
// ─────────────────────────────────────────────
function buildPoemPrompt(cards, cardData, focus, note, moon, isReshuffle, lastReadingSnippet) {
  // Normalize: accept plain strings (legacy) or {name, reversed} objects
  var normalizedCards = cards.map(function(c) {
    if (typeof c === 'string') return { name: c, reversed: false };
    if (c && typeof c === 'object' && c.name) return { name: c.name, reversed: c.reversed === true };
    return null;
  }).filter(Boolean);

  var crossNote = buildCrossCardNote(normalizedCards, cardData);

  var cardSummaries = normalizedCards.map(function(card) {
    var name = card.name;
    var isReversed = card.reversed;
    var d = cardData[name];
    if (!d) {
      var parts = name.split(' ');
      var suit = parts[parts.length - 1];
      var num  = parts.slice(0, -1).join(' ');
      return name + (isReversed ? ' — REVERSED' : ' — upright')
        + ': draw on traditional tarot meaning. Suit: ' + suit + '. Number/rank: ' + num + '. Use suit energy and number stage as your guide.';
    }
    var angle = focus === 'love' ? d.love : focus === 'change' ? d.change : d.clarity;
    return name + (isReversed ? ' — REVERSED' : ' — upright') + '\n'
      + '  Archetype: ' + d.archetype + '\n'
      + '  Shadow: ' + d.shadow + '\n'
      + (isReversed
        ? '  Register: ' + d.reversalRegister + '\n'
          + '  Reversed direction: ' + d.reversed + '\n'
        : '  Upright essence: ' + d.essence + '\n')
      + '  For ' + (focus || 'clarity') + ': ' + angle;
  }).join('\n\n');

  return 'Three cards have been drawn. They have no positions — they are simply present together.\n\n'
    + 'READING CONTEXT: ' + crossNote + '\n\n'
    + 'THE CARDS:\n'
    + cardSummaries + '\n\n'
    + 'FOCUS: ' + (focus || 'clarity') + '\n'
    + 'MOON TONIGHT: ' + moon.tone + '\n'
    + (note ? 'THE SEEKER SHARED: "' + note + '" — their specific situation must be recognizable in the poem. Not the theme — their actual words, reflected back in image and feeling.\n\n' : '\n')
    + (isReshuffle
        ? 'RESHUFFLE — the seeker has drawn again and needs a completely different reading. '
          + 'Your poem MUST open with a different first line, use a different structural approach, and arrive at a different emotional place than before. '
          + (lastReadingSnippet ? 'The previous reading began: "' + lastReadingSnippet + '" — do not echo this opening, this imagery, or this tone in any way.\n\n' : '\n\n')
        : '')
    + 'Now write the reading as a poem in the exact voice of the 3 examples above. 4 stanzas. Lyrical, whimsical, warm, and specific. Let card names surface at most once each, like echoes. Rhyme ABAB. End with a single, concrete image — no advice, no explanation. Just the image.';
}


// ─────────────────────────────────────────────
//  API HANDLER (Node runtime, @vercel/node)
// ──────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    body = body || {};

    const { cards: rawCards, focus, isReshuffle, lastReadingSnippet } = body;
    const note = body.note || body.question || '';

    if (!rawCards || !Array.isArray(rawCards) || rawCards.length !== 3) {
      return res.status(400).json({ error: 'Three cards required' });
    }

    // Normalize: accept plain strings or {name, reversed} objects
    const cards = rawCards.map(function(c) {
      if (typeof c === 'string') return { name: c, reversed: false };
      if (c && typeof c === 'object' && c.name) return { name: c.name, reversed: c.reversed === true };
      return null;
    }).filter(Boolean);

    if (cards.length !== 3) {
      return res.status(400).json({ error: 'Invalid card data' });
    }

    const moon = getMoonPhase();

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        temperature: isReshuffle ? 1.0 : 0.92,
        top_p: 0.95,
        system: POEM_SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildPoemPrompt(cards, CARD_DATA, focus, note, moon, isReshuffle, lastReadingSnippet) }]
      })
    });

    if (!apiRes.ok) throw new Error('API error ' + apiRes.status + ': ' + await apiRes.text());

    const data = await apiRes.json();
    let reading = data.content?.[0]?.text || '';

    // Retry once if too short
    if (reading.trim().length < 180) {
      const retry = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          temperature: isReshuffle ? 1.0 : 0.92,
          top_p: 0.95,
          system: POEM_SYSTEM_PROMPT,
          messages: [{ role: 'user', content: buildPoemPrompt(cards, CARD_DATA, focus, note, moon, isReshuffle, lastReadingSnippet) }]
        })
      });
      if (retry.ok) {
        const retryData = await retry.json();
        reading = retryData.content?.[0]?.text || reading;
      }
    }

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ reading, moon: moon.name });

  } catch (err) {
    console.error('Veil reading error:', err);
    return res.status(500).json({ error: 'The cards are quiet right now. Please try again.' });
  }
}
