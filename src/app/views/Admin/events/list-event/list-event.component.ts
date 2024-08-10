import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss'],
})
export class ListEventComponent implements OnInit {

  eventData: any;

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getAllEvents().subscribe(
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

  deleteEvent(eventId: string) {
    if (confirm('¿Estás seguro de que quieres borrar este evento?')) {
      this.eventsService.deleteEvent(eventId).subscribe(
        (response) => {
          console.log('Event deleted successfully', response);
          this.getAllEvents();
        },
        (error) => {
          console.error('Error deleting event', error);
        }
      );
    }
  }
}
