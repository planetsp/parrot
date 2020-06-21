import {Chirp} from './Chirp';

export interface User {
  uid: string;
  email: string;
  chirps?: Array<Chirp>;
}
