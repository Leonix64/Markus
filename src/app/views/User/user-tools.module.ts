import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeUserComponent
  }
]

import { HomeUserComponent } from './home-user/home-user.component';

@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserToolsModule { }
