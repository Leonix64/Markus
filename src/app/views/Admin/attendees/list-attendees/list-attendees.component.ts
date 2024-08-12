import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Attendee } from 'src/app/interfaces/events.interface';

@Component({
  selector: 'app-list-attendees',
  templateUrl: './list-attendees.component.html',
  styleUrls: ['./list-attendees.component.scss'],
})
export class ListAttendeesComponent implements OnInit {

  eventName: string = '';
  eventId: string | null = null;
  attendeesData: Attendee[] = [];

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.loadEvent(this.eventId);
    }
  }

  loadEvent(eventId: string) {
    this.eventsService.getEventById(eventId).subscribe(
      (response) => {
        if (response) {
          this.eventName = response.name;
          this.attendeesData = response.attendees || []; // Assign assistants
          //console.log('Data Attendees:', this.eventName, this.attendeesData);
        }
      },
      (error) => {
        console.error('Error loading event', error);
      }
    );
  }
}
