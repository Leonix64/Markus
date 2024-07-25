import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeAdminComponent
  }
]

@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedToolsModule,
    IonicModule
  ]
})
export class AdminToolsModule { }
