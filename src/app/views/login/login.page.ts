import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login.interface';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router,
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
          console.log('Login successful', response);
          this.toastService.presentToast('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed', error);
          this.toastService.presentToastError('Error al iniciar sesión');
        }
      );
    }
  }
}
