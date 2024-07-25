import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAuthorityComponent } from './home-authority/home-authority.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeAuthorityComponent
  }
]

@NgModule({
  declarations: [
    HomeAuthorityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedToolsModule,
    IonicModule
  ]
})
export class AuthorityToolsModule { }
