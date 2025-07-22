import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  $userInfo = new BehaviorSubject({});
  $isLoggedIn = new BehaviorSubject(false);

  checkLoginStatus() {
    return this.$isLoggedIn.asObservable();
  }
}
