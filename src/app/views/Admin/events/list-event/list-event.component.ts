import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/events.interface';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss'],
})
export class ListEventComponent implements OnInit {

  eventData: Event[] = [];

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getNonArchivedEvents().subscribe(
      (data) => {
        this.eventData = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  dataUrltoImage(dataUrl: string) {
    if (dataUrl) {
      if (!dataUrl.startsWith('data:image/jpeg;base64,')) {
        return 'data:image/jpeg;base64,' + dataUrl;
      }
      return dataUrl;
    } else {
      return '../../../../assets/defaultEvent.jpg';
    }
  }

  archivatedEvent(eventId: string) {
    if (confirm('¿Estás seguro de que quieres archivar este evento?')) {
      this.eventsService.archiveEvent(eventId).subscribe(
        (response) => {
          console.log('Event archived successfully', response);
          this.getAllEvents();
        },
        (error) => {
          console.error('Error archiving event', error);
        }
      )
    }
  }
}
