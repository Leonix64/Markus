import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ListProfileComponent,
    EditProfileComponent,
    LoadingSpinnerComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    SidebarComponent,
    ListProfileComponent,
    EditProfileComponent,
    LoadingSpinnerComponent,
    ReactiveFormsModule,
    ConfirmDialogComponent,
  ]
})
export class SharedToolsModule { }
