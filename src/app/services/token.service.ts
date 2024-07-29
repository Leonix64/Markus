import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'authToken';
  private roleKey = 'userRole';

  constructor() { }

  // authToken
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  // userToken
  setRole(role: string) {
    localStorage.setItem(this.roleKey, role);
  }

  getRole(): string {
    return localStorage.getItem(this.roleKey) || '';
  }

  // Clear all tokens
  clearAll() {
    localStorage.removeItem(this.roleKey);
    localStorage.removeItem(this.tokenKey);
  }
}
