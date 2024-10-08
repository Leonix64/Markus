import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './views/Shared/page-not-found/page-not-found.component';
import { HomeUserComponent } from './views/User/home-user/home-user.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/views-routing.module').then(m => m.ViewsPageRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
