import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/interfaces/events.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-list-archived',
  templateUrl: './list-archived.component.html',
  styleUrls: ['./list-archived.component.scss'],
})
export class ListArchivedComponent implements OnInit {

  archivedEventData: Event[] = [];

  constructor(
    private eventsService: EventsService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.getAllEventsArchived();
  }

  getAllEventsArchived() {
    this.eventsService.getArchivedEvents().subscribe(
      (data) => {
        this.archivedEventData = data;
        console.log('Archived events data loaded:', data);
      },
      (error) => {
        console.error('Error retrieving archived events:', error);
      }
    );
  }

  restoreEvent(eventId: string) {
    this.notificationService.presentConfirm(
      'Restaurar Evento',
      '¿Estás seguro de que quieres restaurar este evento?',
      () => {
        this.eventsService.unarchiveEvent(eventId).subscribe(
          (response) => {
            console.log('Event restored successfully:', response);
            this.getAllEventsArchived();
            this.notificationService.presentToast('¡El evento ha sido restaurado exitosamente!');
          },
          (error) => {
            console.error('Error restoring event:', error);
            this.notificationService.presentToastError('Error al restaurar el evento, intente nuevamente.');
          }
        );
      }
    );
  }

  deleteEvent(eventId: string) {
    this.notificationService.presentConfirm(
      'Borrar Evento',
      '¿Estás seguro de que quieres borrar este evento?',
      () => {
        this.eventsService.deleteEvent(eventId).subscribe(
          (response) => {
            console.log('Event deleted successfully:', response);
            this.getAllEventsArchived();
            this.notificationService.presentToast('¡El evento ha sido borrado exitosamente!');
          },
          (error) => {
            console.error('Error deleting event:', error);
            this.notificationService.presentToastError('Error al borrar el evento, intente nuevamente.');
          }
        );
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
}
