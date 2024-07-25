import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/auth.interface';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

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
    private tokenService: TokenService,
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
          // Save token in localStorage
          this.tokenService.setToken(response.token);
          this.authService.handleLogin(loginData);

          console.log('Inicio de sesión exitoso', response);
          this.toastService.presentToast('Inicio de sesión exitoso');
        },
        (error) => {
          console.error('Login failed', error);
          this.toastService.presentToastError('Error al iniciar sesión');
        }
      );
    }
  }
}
