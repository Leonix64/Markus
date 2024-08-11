import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private toastService: ToastService,
  ) {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      capacity: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.createEventForm.valid) {
      const eventData = this.createEventForm.value;

      this.eventsService.createEvent(eventData).subscribe(
        async (response) => {
          this.toastService.presentToast('El evento ha sido creado exitosamente!');
          this.createEventForm.reset();
          this.imagePreview = null;
        },
        async (err) => {
          this.toastService.presentToastError('Error al crear el evento, intente nuevamente.');
          console.error('Error creating event:', err);
        }
      )
    } else {
      this.toastService.presentToastWarning('Por favor rellene todos los campos necesarios.');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.convertToBase64(this.selectedFile);
    }
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.createEventForm.patchValue({ image: base64String });
        this.imagePreview = base64String;
        resolve(base64String);
      };
      reader.onerror = () => {
        reject('Error reading file');
      };
      reader.readAsDataURL(file);
    });
  }
}
