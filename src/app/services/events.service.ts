import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';
import { EventData, AttendeesData } from '../interfaces/events.interface';

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

  createEvent(eventData: EventData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const createEventEndpoint = `${this.eventUrl}/event`;

    return this.http.post(createEventEndpoint, eventData, { headers });
  }

  getAllEvents(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const getAllEventsEndpoint = `${this.eventUrl}/event`;

    return this.http.get(getAllEventsEndpoint, { headers });
  }

  getEventById(eventId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const getEventByIdEndpoint = `${this.eventUrl}/event/${eventId}`;

    return this.http.get(getEventByIdEndpoint, { headers });
  }

  updateEvent(eventId: string, eventData: EventData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const updateEventEndpoint = `${this.eventUrl}/event/${eventId}`;

    return this.http.put(updateEventEndpoint, eventData, { headers });
  }

  deleteEvent(eventId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}` });
    const deleteEventEndpoint = `${this.eventUrl}/event/${eventId}`;

    return this.http.delete(deleteEventEndpoint, { headers });
  }
}
