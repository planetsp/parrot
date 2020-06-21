import {Phrase} from './Phrase';

export interface Chirp {
  id?: string;
  title: string;
  type: string;
  fromLanguage: string;
  toLanguage: string;
  phrases: Array<Phrase>;
  date: string;
  notes?: string;
}
