import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    SidebarComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    EditProfileComponent
  ]
})
export class SharedToolsModule { }
