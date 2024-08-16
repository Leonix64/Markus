import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.apiUrl;
  private tabsUrl = `${this.apiUrl}/profile`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenService.getToken()}`
    });
  }

  getProfile(): Observable<any> {
    const getprofileEndpoint = `${this.tabsUrl}/get-profile`;
    return this.http.get(getprofileEndpoint, { headers: this.getHeaders() });
  }

  updateProfile(profileData: any): Observable<any> {
    const putProfileEndpoint = `${this.tabsUrl}/put-profile`;
    return this.http.put(putProfileEndpoint, profileData, { headers: this.getHeaders() });
  }
}
