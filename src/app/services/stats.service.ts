import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';
import { Event, Attendee } from '../interfaces/events.interface';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private apiUrl = environment.apiUrl;
  private statsUrl = `${this.apiUrl}/stats`;

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

  getStatistics(): Observable<any> {
    const getStatisticsEndpoint = `${this.statsUrl}/statistics`;
    return this.http.get(getStatisticsEndpoint, { headers: this.getHeaders() });
  }
}
