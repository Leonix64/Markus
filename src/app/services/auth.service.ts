import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LoginData, UserData } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private loginUrl = `${this.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  LoginUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const loginEndpoint = `${this.loginUrl}/login`;

    return this.http.post(loginEndpoint, loginData, { headers });
  }

  RegisterUser(userData: UserData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const registerEndpoint = `${this.loginUrl}/register`;

    return this.http.post(registerEndpoint, userData, { headers });
  }

  handleLogin(loginData: LoginData) {
    this.LoginUser(loginData).subscribe(
      (res: any) => {
        this.tokenService.setToken(res.token);
        this.tokenService.setRole(res.role);

        // Role-based redirection
        if (res.role === 'admin') {
          this.router.navigate(['/admin/home']);
        } else if (res.role === 'authority') {
          this.router.navigate(['/authority/home']);
        } else if (res.role === 'user') {
          this.router.navigate(['/user/home']);
        } else {
          console.error('Rol no válido');
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('Error en el login', error);
      }
    )
  }
}
