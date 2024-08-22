import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/auth.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: LoginData = this.loginForm.value;

      this.authService.LoginUser(loginData).subscribe(
        (response) => {
          // Save token & role in localStorage
          this.authService.handleLogin(response);

          console.log('Inicio de sesión exitoso', response);
          this.notificationService.presentToast('Inicio de sesión exitoso');
        },
        (error) => {
          console.error('Login failed', error);
          this.notificationService.presentToastError('Error al iniciar sesión');
        }
      );
    }
  }
}
