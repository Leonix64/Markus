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

  handleLogin(response: any) {
    if (response.token && response.role) {
      this.tokenService.setToken(response.token);
      this.tokenService.setRole(response.role);
    } else {
      console.error('Respuesta del Login invalida', response);
    }
  }
}
