import { useEffect, useRef } from 'react';
import { DECK_CREDITS } from '../data/deck';
import { cardImage } from '../components/Logo';
import { Chevron } from '../components/Icons';
import { DeckCredits } from '../components/DeckCredits';
import { BackBar, SectionLabel } from '../components/ExploreBits';

/** Opens in a new tab. Swap for a museum page or a biography you prefer. */
const LEARN_MORE = 'https://en.wikipedia.org/wiki/Pamela_Colman_Smith';

const TIMELINE: [string, string][] = [
  ['1878', 'Born in London'],
  ['1901', 'Joins the Golden Dawn'],
  ['1909', 'Draws the 78 cards. The deck is published in London.'],
  ['1951', 'Dies in Bude, Cornwall'],
  ['2009', 'The deck turns 100 and her name comes back'],
];

/** Figma H01 — the history of the deck and the people who made it. */
export function AboutDeck({ active, onBack, onExplore }: { active: boolean; onBack: () => void; onExplore: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (active) scrollRef.current?.scrollTo({ top: 0 }); }, [active]);

  return (
    <div className="about-scroll" ref={scrollRef}>
      <BackBar label="The deck" onBack={onBack} />
      <article className="about">
        <div className="about-fan" aria-hidden="true">
          <img src={cardImage('the-high-priestess')} alt="" />
          <img src={cardImage('the-star')} alt="" />
          <img src={cardImage('the-fool')} alt="" />
        </div>
        <div className="about-eyebrow">About the deck</div>
        <h1 className="about-title">The Hand Behind the Cards</h1>
        <p className="about-lead">
          Every card in Veil Reads comes from the Rider-Waite-Smith tarot, first published in London in 1909.
          The “Smith” is Pamela Colman Smith, the artist who drew all 78.
        </p>

        <SectionLabel>Who she was</SectionLabel>
        <p>
          Smith was born in London in 1878 to American parents and spent part of her childhood in Jamaica. She worked as
          an illustrator and a stage designer for the Lyceum Theatre, and in 1901 she joined the Hermetic Order of the
          Golden Dawn, where she met Arthur Edward Waite.
        </p>
        <p>She often painted while listening to music, trying to put down on paper what the music showed her.</p>

        <SectionLabel>What she changed</SectionLabel>
        <p>
          Waite set out the scheme. Smith gave it form, drawing the deck in about six months. Her great leap was a full
          scene on every card, the suits included. Almost every deck before hers showed those cards as simple counts of
          cups or swords.
        </p>
        <p>
          Hers show people in the middle of something: grieving, building, waiting, leaving. That is why it is the deck
          most people picture when they think of tarot.
        </p>
        <figure className="about-example">
          <img src={cardImage('five-of-cups')} alt="Five of Cups" />
          <img src={cardImage('three-of-swords')} alt="Three of Swords" />
          <figcaption>
            <span>Even the small cards tell a story</span>
            Five of Cups: someone grieving over what spilled. Three of Swords: a heart, plainly hurt.
          </figcaption>
        </figure>

        <SectionLabel>Why her name went missing</SectionLabel>
        <p>
          For most of the 20th century the deck was sold as the “Rider-Waite”, after its publisher and Waite. Smith was
          paid a flat fee with no royalties, and she died in Bude, Cornwall, in 1951 with little recognition.
        </p>
        <p>
          Since the deck’s centenary in 2009 her name has been restored, and she is now widely credited as the artist who
          gave modern tarot its look.
        </p>

        <SectionLabel>Timeline</SectionLabel>
        <ol className="about-timeline">
          {TIMELINE.map(([year, text]) => (
            <li key={year} className={year === '1909' ? 'key' : ''}><span className="year">{year}</span>{text}</li>
          ))}
        </ol>

        <DeckCredits sub={`First published December 1909 · 78 cards`} />

        <SectionLabel>In Veil Reads</SectionLabel>
        <p>
          The scenes, symbols and structure are hers. Veil Reads is a small daily ritual built on them: you draw three
          cards, and the words you read are written by hand for every card, focus and answer.
        </p>

        <a className="about-more" href={LEARN_MORE} target="_blank" rel="noopener noreferrer">
          Read more about {DECK_CREDITS.artist.name} <Chevron dir="right" />
        </a>
        <button className="btn-gold about-cta" onClick={onExplore}>Explore the 78 cards</button>
      </article>
    </div>
  );
}
