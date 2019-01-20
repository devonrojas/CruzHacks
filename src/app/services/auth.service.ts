import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from './user.service';

import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService) {
      this.user = _firebaseAuth.authState;

      this.user.subscribe(user => {
        console.log(user);
        if (user !== null && user !== undefined) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      })
  }

  isLoggedIn() {
    if(!this.user) {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    this._firebaseAuth.auth.signOut()
    .then(res => this.router.navigate(['/login']));
  }

  createNewUser(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(res => this.signInWithEmail(email, password))
    .catch(err => {
      console.log(err)
    });
  }

  signInWithEmail(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password)
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(res => this.userService.navEnabled(true))
    .then(res => this.router.navigate(['/home']))
    .catch(err => console.log(err));
  }

  /****************************************************************************************
    All other sign-in methods handled by FirebaseUI. See RoutesModule for configuration.
  ****************************************************************************************/

}
