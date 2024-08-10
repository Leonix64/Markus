import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastService: ToastService,
  ) {
    this.eventForm = fb.group({
      name: [''],
      description: [''],
      location: [''],
      date: [''],
      time: [''],
      capacity: [''],
      image: [''],
    });
  }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.loadDataEvents(eventId);
    }
  }

  loadDataEvents(eventId: string) {
    this.eventsService.getEventById(eventId).subscribe(
      (response) => {
        const imageUrl = this.dataUrltoImage(response.image);
        this.eventForm.patchValue({
          name: response.name,
          description: response.description,
          location: response.location,
          date: response.date,
          time: response.time,
          capacity: response.capacity,
          image: imageUrl,
        });
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const eventId = this.route.snapshot.paramMap.get('id');
      const updatedEvent = this.eventForm.value;

      if (eventId) {
        this.eventsService.updateEvent(eventId, updatedEvent).subscribe(
          (response) => {
            console.log('Event updated successfully', response);
            this.toastService.presentToast('El evento ha sido actualizado exitosamente!');
            this.router.navigate(['/dashboard/admin/list-event']);
          },
          (error) => {
            console.error('Error updating event', error);
            this.toastService.presentToastError('Error al actualizar el evento, intente nuevamente.');
          }
        );
      } else {
        console.error('Event ID is missing');
        this.router.navigate(['/dashboard/admin/list-event']);
      }
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        const base64Data = base64Image.split(',')[1];
        const formattedImage = this.dataUrltoImage(base64Data);
        this.eventForm.patchValue({
          image: formattedImage,
        });
      };
      reader.readAsDataURL(file);
    }
  }  

  dataUrltoImage(dataUrl: string) {
    if (dataUrl && !dataUrl.startsWith('data:image')) {
      return 'data:image/jpeg;base64,' + dataUrl;
    } else {
      return dataUrl || '../../../../assets/defaultEvent.jpg';
    }
  }  

  cancelEdit() {
    this.router.navigate(['/dashboard/admin/list-event']);
  }
}
