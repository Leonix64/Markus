import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, GuardResult, MaybeAsync } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.tokenService.getRole();

    if (userRole === 'user') {
      return true;
    } else {
      this.router.navigate(['/dashboard', userRole]);
      return false;
    }
  }
}