import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/interfaces/events.interface';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent implements OnInit {

  eventData: Event[] = [];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getNonArchivedEvents().subscribe(
      (data) => {
        this.eventData = data;
        console.log('Non-archived events data loaded:', data);
      },
      (error) => {
        console.error('Error retrieving non-archived events:', error);
      }
    );
  }
}
