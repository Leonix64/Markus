import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';
import { Event, Attendee } from '../interfaces/events.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = environment.apiUrl;
  private eventUrl = `${this.apiUrl}/events`;

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

  createEvent(eventData: Event): Observable<any> {
    const createEventEndpoint = `${this.eventUrl}/event`;
    return this.http.post(createEventEndpoint, eventData, { headers: this.getHeaders() });
  }

  getAllEvents(): Observable<any> {
    const getAllEventsEndpoint = `${this.eventUrl}/event`;
    return this.http.get(getAllEventsEndpoint, { headers: this.getHeaders() });
  }

  getEventById(eventId: string): Observable<any> {
    const getEventByIdEndpoint = `${this.eventUrl}/event/${eventId}`;
    return this.http.get(getEventByIdEndpoint, { headers: this.getHeaders() });
  }

  updateEvent(eventId: string, eventData: Event): Observable<any> {
    const updateEventEndpoint = `${this.eventUrl}/event/${eventId}`;
    return this.http.put(updateEventEndpoint, eventData, { headers: this.getHeaders() });
  }

  deleteEvent(eventId: string): Observable<any> {
    const deleteEventEndpoint = `${this.eventUrl}/event/${eventId}`;
    return this.http.delete(deleteEventEndpoint, { headers: this.getHeaders() });
  }

  registerUser(eventId: string, attendeeData: Attendee): Observable<any> {
    const attendEventEndpoint = `${this.eventUrl}/event/${eventId}/register`;
    return this.http.post(attendEventEndpoint, attendeeData, { headers: this.getHeaders() });
  }

  unregisterUser(eventId: string, attendeeId: string): Observable<any> {
    const unattendEventEndpoint = `${this.eventUrl}/event/${eventId}/attendee/${attendeeId}`;
    return this.http.delete(unattendEventEndpoint, { headers: this.getHeaders() });
  }

  archiveEvent(eventId: string): Observable<any> {
    const archiveEventEndpoint = `${this.eventUrl}/event/${eventId}/archive`;
    return this.http.put(archiveEventEndpoint, {}, { headers: this.getHeaders() });
  }

  unarchiveEvent(eventId: string): Observable<any> {
    const unarchiveEventEndpoint = `${this.eventUrl}/event/${eventId}/unarchive`;
    return this.http.put(unarchiveEventEndpoint, {}, { headers: this.getHeaders() });
  }

  getArchivedEvents(): Observable<any> {
    const getArchivedEventsEndpoint = `${this.eventUrl}/events/archived`;
    return this.http.get(getArchivedEventsEndpoint, { headers: this.getHeaders() });
  }

  getNonArchivedEvents(): Observable<any> {
    const getNonArchivedEventsEndpoint = `${this.eventUrl}/events/non-archived`;
    return this.http.get(getNonArchivedEventsEndpoint, { headers: this.getHeaders() });
  }
}
