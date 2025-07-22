import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  $userInfo = new BehaviorSubject({});
  $isLoggedIn = new BehaviorSubject(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async checkLoginStatus() {
    if (!isPlatformBrowser(this.platformId)) {
      return false;  // Avoid using localStorage on server
    }

    const loginStatus = localStorage.getItem('loginStatus');
    if (!loginStatus) {
      return false;
    }

    const loginStatusObj = JSON.parse(loginStatus);
    console.log("Login Status in storage: ", loginStatusObj.isLoggedIn);
    return loginStatusObj.isLoggedIn;
  }

  async updateLoginStatus(isLoggedIn: boolean) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const loginStatus = localStorage.getItem('loginStatus');

    if (!loginStatus) {
      console.log("No login object found");
      localStorage.setItem('loginStatus', JSON.stringify({ isLoggedIn }));
      return;
    }

    const loginStatusObj = JSON.parse(loginStatus);
    loginStatusObj.isLoggedIn = isLoggedIn;
    localStorage.setItem('loginStatus', JSON.stringify(loginStatusObj));
    console.log("Updated login object with status: ", loginStatusObj.isLoggedIn);
    this.$isLoggedIn.next(isLoggedIn);
  }
}
