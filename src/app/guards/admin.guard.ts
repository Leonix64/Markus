import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.tokenService.getRole();

    if (userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['/dashboard', userRole]);
      return false;
    }
  }
}
