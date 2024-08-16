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
import { ListAttendeesComponent } from './attendees/list-attendees/list-attendees.component';
import { CreateAttendeesComponent } from './attendees/create-attendees/create-attendees.component';
import { ListArchivedComponent } from './events/list-archived/list-archived.component';
import { StatsDashboardComponent } from './stats/stats-dashboard/stats-dashboard.component';
import { EventReportComponent } from './stats/event-report/event-report.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    ListEventComponent,
    CreateEventComponent,
    EditEventComponent,
    ListAttendeesComponent,
    CreateAttendeesComponent,
    ListArchivedComponent,
    StatsDashboardComponent,
    EventReportComponent
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
