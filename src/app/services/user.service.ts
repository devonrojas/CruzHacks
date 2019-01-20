import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, empty, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  userDocument: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  navigation: BehaviorSubject<boolean> = new BehaviorSubject(null);
  nav: Observable<boolean> = this.navigation.asObservable();

  navEnabled(state) {
    this.navigation.next(state);
  }

  constructor(
    private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
  }

  getAllUsers() {
    let query: AngularFirestoreCollection<User> = this.afs.collection('users', ref => ref.orderBy('displayName', 'asc'));
    this.users = query.valueChanges();
    return this.users;
  }

  getUser(uid: string): Observable<User> {
    if(uid == '') {
      return empty();
    } else {
      return this.userCollection.doc<User>(uid).valueChanges();
    }
  }

}
