import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { CommonService } from '../services/common-service';

export const childAuthGuard: CanActivateChildFn = (childRoute, state) => {
  console.log("checking for login redirect")
  const commonService = inject(CommonService);
  const router = inject(Router)
  let isLoggedIn = false;
  commonService.$isLoggedIn.subscribe(status => {
    isLoggedIn = status;
  })

  if( isLoggedIn ) {
    router.navigate(['/dashboard'])
  }

  return !isLoggedIn;
};
