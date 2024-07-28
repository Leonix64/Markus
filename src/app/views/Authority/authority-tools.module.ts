import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAuthorityComponent } from './home-authority/home-authority.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminToolsModule } from '../Admin/admin-tools.module';

@NgModule({
  declarations: [
    HomeAuthorityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    IonicModule,
    SharedToolsModule,
    AdminToolsModule
  ],
  exports: []
})
export class AuthorityToolsModule { }
