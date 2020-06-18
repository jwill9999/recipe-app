import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import { config } from './configuration.example';

@Injectable()
export class AuthService {

  loggedIn: boolean = false;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  isAnonymous: string;
  uid: string;
  providerData: string;
  errorMessage: string;
  error: boolean;

  constructor(public router: Router) {
    firebase.initializeApp(config);
  }


  createUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loggedIn = true;
        this.router.navigate(['/recipes'])
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      });
  }



  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in.
            this.loggedIn = true;
            this.error = false;
            this.displayName = user.displayName;
            this.email = user.email;
            this.emailVerified = user.emailVerified;
            this.photoURL = user.photoURL;
            this.isAnonymous = user.isAnonymous;
            this.uid = user.uid;
            this.providerData = user.providerData;
            this.router.navigate(['/recipes'])
          } else {
            this.loggedIn = false;
            this.router.navigate(['/recipes'])
          }
        });
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error.message;
      });
  }

  onLogout() {
    firebase.auth().signOut()
      .catch(function (error) {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      })
  }

  isAuthenticated() {
    return this.loggedIn;
  }

}
