import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/User';
import * as firebase from 'firebase/app';
import {Chirp} from '../models/Chirp';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import vision from '@google-cloud/vision';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  getChirps(user) {
    return this.afs.collection(`users/${user.uid}/chirps/`).valueChanges();
  }
  getChirp(user, id) {
    return this.afs.doc(`users/${user.uid}/chirps/${id}`).valueChanges();
  }
  addChirp(chirp: Chirp, user) {
    chirp.id = this.generateNewKey(`users/${user.uid}/chirps/`);
    this.afs.collection(`users/${user.uid}/chirps/`).doc(chirp.id)
      .set(chirp).then(docRef => {
        console.log('Self generated doc ID: ...', chirp.id );
      })
    console.log('added' + chirp.title);
  }

  editChirp(chirp: Chirp, user) {
    this.afs.collection(`users/${user.uid}/chirps/`).doc(chirp.id)
      .set(chirp).then(docRef => {
      console.log('Self generated doc ID: ...', chirp.id );
    });

  }
  removeChirp(id, user){
    return this.afs.collection(`users/${user.uid}/chirps/`).doc(id).delete();

  }
  generateNewKey(ref: any) {
    const _ref = firebase.firestore().collection(ref).doc();
    const newKey = _ref.id;
    return newKey;
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }
  private updateUserData(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
    };

    return userRef.set(data);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
