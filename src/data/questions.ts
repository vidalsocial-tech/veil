import type { Focus } from './types';

/**
 * Follow-up questions per focus (Figma: PQ-L/C/X screens).
 * Answer order matters — it indexes the stanza lines in stanzas.json.
 * `sentence` is shown on the "Where you are" reading card. Only the three
 * love sentences marked FIGMA come from the design; the rest are drafts to tune.
 */
export interface Answer { label: string; icon: string; sentence: string }
export interface Question { prompt: string; answers: [Answer, Answer, Answer] }

export const FOCUS_LABEL: Record<Focus, string> = { love: 'Love', clarity: 'Clarity', change: 'Change' };
export const FOCUS_LINE: Record<Focus, string> = {
  love: 'You came here for love.',       // FIGMA
  clarity: 'You came here for clarity.',
  change: 'You came here for change.',
};

export const QUESTIONS: Record<Focus, [Question, Question, Question]> = {
  love: [
    { prompt: 'Where’s your heart?', answers: [
      { label: 'Wide open', icon: 'wide-open', sentence: 'Your heart is wide open.' },
      { label: 'Taken', icon: 'taken', sentence: 'Your heart already belongs somewhere.' }, // FIGMA
      { label: 'Letting go', icon: 'letting-go', sentence: 'You’re learning to let something go.' },
    ] },
    { prompt: 'What’s the feeling?', answers: [
      { label: 'Curious', icon: 'curious', sentence: 'You’re curious where this could lead.' },
      { label: 'Unsure', icon: 'unsure', sentence: 'You’re not sure what to trust yet.' }, // FIGMA
      { label: 'Tender', icon: 'tender', sentence: 'Everything feels a little tender right now.' },
    ] },
    { prompt: 'What would help?', answers: [
      { label: 'Their side', icon: 'their-side', sentence: 'You want to see it through their eyes.' }, // FIGMA
      { label: 'My side', icon: 'my-side', sentence: 'You want to understand your own side of it.' },
      { label: 'What’s next', icon: 'whats-next', sentence: 'You want to know what comes next.' },
    ] },
  ],
  clarity: [
    { prompt: 'What’s on your mind?', answers: [
      { label: 'Work', icon: 'work', sentence: 'Your work is on your mind.' },
      { label: 'Someone', icon: 'someone', sentence: 'Someone is on your mind.' },
      { label: 'Me', icon: 'me', sentence: 'You’re trying to understand yourself.' },
    ] },
    { prompt: 'How long has it lingered?', answers: [
      { label: 'Just arrived', icon: 'just-arrived', sentence: 'It’s only just arrived.' },
      { label: 'A little while', icon: 'a-little-while', sentence: 'It’s been with you a little while.' },
      { label: 'Ages', icon: 'ages', sentence: 'It’s been with you for a long time.' },
    ] },
    { prompt: 'What’s in the way?', answers: [
      { label: 'Too many paths', icon: 'too-many-paths', sentence: 'There are too many paths in front of you.' },
      { label: 'A little fear', icon: 'a-little-fear', sentence: 'A little fear is standing in the way.' },
      { label: 'Nothing, really', icon: 'nothing-really', sentence: 'Nothing’s in the way — you just want to see clearly.' },
    ] },
  ],
  change: [
    { prompt: 'What kind of change?', answers: [
      { label: 'My choice', icon: 'my-choice', sentence: 'This change is your choice.' },
      { label: 'A surprise', icon: 'a-surprise', sentence: 'This change took you by surprise.' },
      { label: 'Still deciding', icon: 'still-deciding', sentence: 'You’re still deciding whether to change.' },
    ] },
    { prompt: 'Where are you?', answers: [
      { label: 'At the start', icon: 'at-the-start', sentence: 'You’re right at the start of it.' },
      { label: 'In the thick of it', icon: 'in-the-thick-of-it', sentence: 'You’re in the thick of it.' },
      { label: 'Almost through', icon: 'almost-through', sentence: 'You’re almost through.' },
    ] },
    { prompt: 'What do you need?', answers: [
      { label: 'A nudge', icon: 'a-nudge', sentence: 'You could use a nudge.' },
      { label: 'Patience', icon: 'patience', sentence: 'You need a little patience.' },
      { label: 'Peace', icon: 'peace', sentence: 'What you need most is peace.' },
    ] },
  ],
};

export const answerIcon = (icon: string) => `/figma/answers/${icon}.svg`;
