import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { RoleService } from 'src/app/services/role.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  profileImage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private roleService: RoleService,
    private notificationService: NotificationService,
  ) {
    this.profileForm = fb.group({
      profileImage: [''],
      name: ['', Validators.required],
      username: [{ value: '', disabled: true }],
      email: ['', Validators.required],
      role: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe(
      response => {
        this.profileForm.patchValue({
          profileImage: response.profileImage,
          name: response.name,
          username: response.username,
          email: response.email,
          role: response.role
        });
        this.profileImage = response.profileImage;
      },
      err => {
        console.error('Error fetching profile:', err);
      }
    );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file).then(base64 => {
        this.profileImage = base64;
        this.profileForm.patchValue({ profileImage: base64 });
      });
    }
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = () => {
        reject('Error reading file');
      };
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe(
        response => {
          console.log('Profile updated successfully:', response);
          this.notificationService.presentToast('Perfil actualizado exitosamente!');
          this.roleService.redirectBasedOnRole('list-profile');
        },
        err => {
          console.error('Error updating profile:', err);
          this.notificationService.presentToastError('Error al actualizar el perfil, intente nuevamente.');
        }
      );
    }
  }
}
