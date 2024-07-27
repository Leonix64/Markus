import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedToolsModule
  ],
  exports: [HomeAdminComponent]
})
export class AdminToolsModule { }
