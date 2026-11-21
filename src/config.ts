/**
 * Experience knobs — the one place to tweak pacing, copy and behaviour.
 * Visual tokens (colours, fonts, radii) live in src/styles/tokens.css.
 * Questions and answers live in src/data/questions.ts.
 */
export const CONFIG = {
  /** Chance each drawn card comes up reversed. Live site: 0.5. PRD v2: 0.15. */
  reversalRate: 0.5,

  /** Ritual pacing in ms (Figma prototype timings where given). */
  timing: {
    screenFade: 700,
    answerFeedback: 240,     // selected tile shows before the next question dissolves in
    /**
     * Preparation: the moon starts on tonight's shape, glides continuously through
     * every phase once, and eases back to rest on tonight's. Then the caption appears.
     */
    moonCycle: {
      startDelay: 600,     // stillness before it starts to turn
      duration: 7000,      // the whole glide, start to rest
      turns: 1,            // full cycles before landing (2 = go round twice)
      easing: [0.45, 0, 0.12, 1] as [number, number, number, number], // gentle start, long soft landing
      holdAfterLand: 2600, // tonight's moon breathes with its caption, then → shuffle
    },
    shuffleStartDelay: 750,
    shufflePhases: 5,
    shufflePhaseMs: 480,
    revealToReading: 1000,   // last card flipped → reading stack (Figma: dissolve 0.7s)
    slide: 600,              // reading page turn (Figma: smart animate 0.6s)
  },

  /**
   * How a card's stanza is set on its reading page. 'paragraph' matches the
   * plain-English outcome frames in Figma (one flowing paragraph); 'lines'
   * puts each of the four lines on its own row, like the earlier PR3–PR5 mock-ups.
   */
  stanzaLayout: 'paragraph' as 'paragraph' | 'lines',

  /**
   * Closing moon slide: which group The Fool joins. It's card 0, so even by number
   * (balance, stability). 'O' would read it as momentum, a leap, instead.
   */
  foolGroup: 'E' as 'O' | 'E',

  /** The closing moon slide's Share button — hidden in the Figma closing-slide frames. */
  showShare: false,

  positions: ['The Root', 'The Now', 'The Path'] as const,
  numerals: ['I', 'II', 'III'] as const,

  /**
   * Subtitle under each card in the reading: "Upright · what's arriving".
   * FIGMA gives Root·reversed, Now·upright and Path·upright; the other three are drafts.
   */
  positionPhrase: [
    { upright: 'what brought you here', reversed: 'what you’ve held back' },
    { upright: 'what’s arriving', reversed: 'what’s asking to be seen' },
    { upright: 'where this is going', reversed: 'what’s still unfolding' },
  ],

  copy: {
    heroSub: ['A daily tarot reading.', 'Three cards. One story.'],
    heroHint: '78 cards · The complete tarot',
    focusTitle: 'What brings you here today?',
    focusSub: 'Choose a focus to begin.',
    prepTitle: 'Something is being chosen for you',
    prepSub: ['Be still.', 'The cards are listening.'],
    shuffle: 'The cards are listening …',
    draw: ['Three cards have been drawn.', 'Tap each one to reveal.'],
    yourCards: { eyebrow: 'Your cards', title: 'Three cards. One story.', body: ['Each card answers what you shared.', 'Turn the page to see how.'] },
    whereYouAre: { eyebrow: 'Where you are', footer: 'The cards were drawn with this in mind.' },
    hint: 'Swipe or tap to continue',
  },
} as const;
