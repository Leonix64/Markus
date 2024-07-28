import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) { }

  redirectBasedOnRole(route: string) {
    const userRole = this.tokenService.getRole();

    if (userRole) {
      this.router.navigateByUrl(`/dashboard/${userRole}/${route}`);
    } else {
      console.error('No role found for redirection');
    }
  }
}
