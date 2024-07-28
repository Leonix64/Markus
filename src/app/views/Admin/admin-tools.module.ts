import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    HomeAdminComponent
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
