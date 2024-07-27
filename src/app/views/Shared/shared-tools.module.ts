import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ListProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    SidebarComponent,
    ListProfileComponent,
    EditProfileComponent,
    ReactiveFormsModule,
  ]
})
export class SharedToolsModule { }
