import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private loginUrl = `${this.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  LoginUser(loginData: LoginData) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const loginEndpoint = `${this.loginUrl}/login`;

    return this.http.post(loginEndpoint, loginData, { headers });
  }
}
