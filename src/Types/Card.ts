import { ForeignNames } from './ForeignNames';
import { Legalities } from './Legalities';

export class Card {
  name: string | undefined;
  manacost: string | undefined;
  cmc: number | undefined;
  colors: string[] | undefined;
  colorIdentity: string[] | undefined;
  type: string | undefined;
  types: string[] | undefined;
  subtypes: string[] | undefined;
  rarity: string | undefined;
  set: string | undefined;
  setName: string | undefined;
  text: string | undefined;
  flavor: string | undefined;
  artist: string | undefined;
  number: string | undefined;
  power: string | undefined;
  toughness: string | undefined;
  layout: string | undefined;
  multiverseid: string | undefined;
  imageUrl: string | undefined;
  variations: string[] | undefined;
  foreignNames: ForeignNames[] | undefined;
  printings: string[] | undefined;
  originalText: string | undefined;
  originalType: string | undefined;
  legalities: Legalities | undefined;
  id: string | undefined;
}
