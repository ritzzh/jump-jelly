import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../services/common-service';

export const authGuard: CanActivateFn = (route, state) => {
  const commonService = inject(CommonService);
  const router = inject(Router)
  let isLoggedIn = false;
  commonService.$isLoggedIn.subscribe(status => {
    isLoggedIn = status;
  })

  if(!isLoggedIn) {
    router.navigate(['/login'])
  }

  console.log("can go to login", !isLoggedIn);
  return isLoggedIn;
};
