import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { EditProfileComponent } from '../Shared/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeUserComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  }
]

@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedToolsModule,
    IonicModule
  ],
  exports: [RouterModule]
})
export class UserToolsModule { }
