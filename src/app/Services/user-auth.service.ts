import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
// import { from, Observable } from 'rxjs';



// Decorator
@Injectable({
  providedIn: 'root',
})

// class
export class UserAuthService {
  // propert
  private islogged: boolean = false;
  private loggedStatus = new BehaviorSubject(false);

  // constructor
  constructor() {}

  login(userEmail: string, password: string) {
    //call AUthen Api, get user name ,pass and return access token if they are true

    // Generate fake tocken
    //when loggin true
    let fakeToken: string = ' ';
    if (userEmail.length > 4 && password.length > 3) {
      fakeToken = ' fakeToken';
      localStorage.setItem('fakeToken', fakeToken);
      this.islogged = true;
    }
  }

  //when log out false
  logOut() {
    localStorage.removeItem('fakeToken');
    this.islogged = false;
  }

  isLogged(): boolean {
    return this.islogged;
  }

  // isLoggedSubject():observable<any> {
  //   return this.loggedStatus;
  // }

  // getNotifications(): Observable<string> {
  //   return this.notificationObserable;
  // }
}
