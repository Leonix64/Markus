import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  const role = tokenService.getRole();

  const expectedRoles = route.data['expectedRoles'];

  if (expectedRoles && expectedRoles.includes(role)) {
    return true;
  } else {
    router.navigate(['/404']);
    return false;
  }
};
