import { CARD_IMAGES } from '../data/cardImages';

export const Logo = () => (
  <div className="logo">
    Veil<em>Reads</em>
  </div>
);

export const cardImage = (slug: string) => CARD_IMAGES[slug] ?? '';
