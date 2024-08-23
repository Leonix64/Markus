import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/events.interface';
import { EventsService } from 'src/app/services/events.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss'],
})
export class ListEventComponent implements OnInit {

  eventData: Event[] = [];

  constructor(
    private eventsService: EventsService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
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

  dataUrltoImage(dataUrl: string): string {
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
    this.notificationService.presentConfirm(
      'Archivar Evento',
      '¿Estás seguro de que quieres archivar este evento?',
      () => {
        this.eventsService.archiveEvent(eventId).subscribe(
          (response) => {
            console.log('Event archived successfully:', response);
            this.getAllEvents();
            this.notificationService.presentToast('¡El evento ha sido archivado exitosamente!');
          },
          (error) => {
            console.error('Error archiving event:', error);
            this.notificationService.presentToastError('Error al archivar el evento, intente nuevamente.');
          }
        );
      }
    );
  }
}
