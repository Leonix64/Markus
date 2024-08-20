import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Attendee, Event } from 'src/app/interfaces/events.interface';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-list-attendees',
  templateUrl: './list-attendees.component.html',
  styleUrls: ['./list-attendees.component.scss'],
})
export class ListAttendeesComponent implements OnInit {

  eventName: string = '';
  eventId: string | null = null;
  attendeesData: Attendee[] = [];
  isArchived: boolean = false;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.loadEvent(this.eventId);
      this.checkIfArchived(this.eventId);
    }
  }

  // Function to check if the event is archived
  checkIfArchived(eventId: string) {
    this.eventsService.getArchivedEvents().subscribe(
      (response: Event[]) => {
        // Find the corresponding event
        const event = response.find(event => event.id === eventId);
        if (event) {
          this.isArchived = event.isArchived;
          console.log(`Evento ${event.name} (ID ${event.id}) is archived: ${this.isArchived}`);
        }
      },
      (error) => {
        console.error('Error retrieving archived events', error);
      }
    );
  }

  loadEvent(eventId: string) {
    this.eventsService.getEventById(eventId).subscribe(
      (response) => {
        if (response) {
          this.eventName = response.name;
          this.attendeesData = response.attendees || []; // Assign assistants
        }
      },
      (error) => {
        console.error('Error loading event', error);
      }
    );
  }

  unregisterAttendee(attendeeId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar a este participante?')) {
      if (this.eventId) {
        this.eventsService.unregisterUser(this.eventId, attendeeId).subscribe(
          () => {
            this.attendeesData = this.attendeesData.filter(attendee => attendee.id !== attendeeId);
            this.toastService.presentToast('El participante ha sido eliminado exitosamente!');
          },
          (error) => {
            console.error('Error unregistering attendee', error);
            this.toastService.presentToastError('Error al eliminar el participante, intente nuevamente.');
          }
        );
      }
    }
  }
}
