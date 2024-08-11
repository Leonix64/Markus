import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';
import { EventData, AttendeesData } from '../interfaces/events.interface';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  private apiUrl = environment.apiUrl;
  private eventUrl = `${this.apiUrl}/attendees`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  registerUser(eventId: string, attendeeData: AttendeesData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const attendEventEndpoint = `${this.eventUrl}/event/${eventId}/register`;

    return this.http.post(attendEventEndpoint, attendeeData, { headers });
  }

  unregisterUser(eventId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const unattendEventEndpoint = `${this.eventUrl}/event/${eventId}/unregister`;

    return this.http.post(unattendEventEndpoint, { headers });
  }
}
