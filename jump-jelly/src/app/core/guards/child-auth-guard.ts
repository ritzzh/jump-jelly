import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { CommonService } from '../services/common-service';

export const childAuthGuard: CanActivateChildFn = async (childRoute, state) => {
  const commonService = inject(CommonService);
  const router = inject(Router)
  let isLoggedIn = false;
  isLoggedIn = await commonService.checkLoginStatus();
  
  console.log("checking for login redirect", isLoggedIn)
  if( isLoggedIn ) {
    console.log('redirect to dashboard')
    router.navigate(['/dashboard'])
  }

  return !isLoggedIn;
};
