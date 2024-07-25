import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');

  const expectedRoles = route.data['expectedRoles'];

  if (expectedRoles && expectedRoles.includes(role)) {
    return true;
  } else {
    router.navigate(['/404']);
    return false;
  }

  /*if (role === 'admin') {
    router.navigate(['/admin/home']);
    return false;
  } else if (role === 'user') {
    router.navigate(['/user/home']);
    return false;
  } else if (role === 'authority') {
    router.navigate(['/authority/home']);
    return false;
  } else {
    router.navigate(['/404']);
    return false;
  }*/
};
