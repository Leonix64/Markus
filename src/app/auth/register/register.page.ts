import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserData } from 'src/app/interfaces/auth.interface';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData: UserData = this.registerForm.value;

      this.authService.RegisterUser(userData).subscribe(
        (response) => {
          console.log('Registro exitoso!', response);
          this.toastService.presentToast('Registro exitoso!');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar:', error);
          this.toastService.presentToastError('Error al registrar, intente nuevamente.');
        }
      )
    }
  }
}
