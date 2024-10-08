import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { AdminToolsModule } from '../Admin/admin-tools.module';
import { ListEventsComponent } from './events/list-events/list-events.component';

@NgModule({
  declarations: [
    HomeUserComponent,
    ListEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedToolsModule,
    RouterLink,
    ReactiveFormsModule,
    //AdminToolsModule
  ],
  exports: [HomeUserComponent]
})
export class UserToolsModule { }
