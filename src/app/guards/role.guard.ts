import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, GuardResult, MaybeAsync } from "@angular/router";
import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: "root"
})

export class RoleGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.tokenService.getRole();

    if (userRole === 'user') {
      this.router.navigate(['/dashboard/user']);
      return false;
    } else if (userRole === 'admin') {
      this.router.navigate(['/dashboard/admin']);
      return false;
    } else if (userRole === 'authority') {
      this.router.navigate(['/dashboard/authority']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}