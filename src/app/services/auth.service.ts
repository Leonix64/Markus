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
        if (res.token && res.role) {
          this.tokenService.setToken(res.token);
          this.tokenService.setRole(res.role);

          // Role-based redirection
          switch (res.role) {
            case 'admin':
              this.router.navigate(['/admin/home']);
              break;
            case 'authority':
              this.router.navigate(['/authority/home']);
              break;
            case 'user':
              this.router.navigate(['/user/home']);
              break;
            default:
              console.error('Rol no válido');
              this.router.navigate(['/']);
              break;
          }
        } else {
          console.error('Respuesta de login inválida', res);
        }
      },
      (error) => {
        console.error('Error en el login', error);
      }
    )
  }
}
