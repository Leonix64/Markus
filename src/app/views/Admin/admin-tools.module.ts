import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedToolsModule } from '../Shared/shared-tools.module';

import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ListEventComponent } from './events/list-event/list-event.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    ListEventComponent,
    CreateEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedToolsModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  exports: [HomeAdminComponent]
})
export class AdminToolsModule { }
