import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-attendees',
  templateUrl: './create-attendees.component.html',
  styleUrls: ['./create-attendees.component.scss'],
})
export class CreateAttendeesComponent implements OnInit {

  createAttendeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {
    this.createAttendeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.createAttendeeForm.valid) {
      const eventId = this.route.snapshot.paramMap.get('id');
      const attendeeData = this.createAttendeeForm.value;

      if (eventId) {
        this.eventsService.registerUser(eventId, attendeeData).subscribe(
          (response) => {
            this.notificationService.presentToast('¡El participante ha sido registrado exitosamente!');
            this.createAttendeeForm.reset();
          },
          (error) => {
            console.error('Error registering participant:', error);
            this.notificationService.presentToastError('Error al registrar el participante o el evento está lleno, intente nuevamente.');
          }
        );
      } else {
        this.notificationService.presentToastWarning('ID de evento no encontrado.');
      }
    } else {
      this.notificationService.presentToastWarning('Por favor, rellene todos los campos necesarios.');
    }
  }
}
