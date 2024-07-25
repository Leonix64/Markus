import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private apiUrl = environment.apiUrl;
  private tabsUrl = `${this.apiUrl}/tabs`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  getTabs(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const tabsEndpoint = `${this.tabsUrl}/`;

    return this.http.get(tabsEndpoint, { headers });
  }
}
