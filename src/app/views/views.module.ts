import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsPageRoutingModule } from './views-routing.module';

import { ViewsPage } from './views.page';

import { SharedToolsModule } from './Shared/shared-tools.module';
import { RouterLink } from '@angular/router';

import { AuthorityToolsModule } from './Authority/authority-tools.module';
import { AdminToolsModule } from './Admin/admin-tools.module';
import { UserToolsModule } from './User/user-tools.module';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

@NgModule({
  declarations: [
    ViewsPage,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsPageRoutingModule,
    ReactiveFormsModule,
    SharedToolsModule,
    RouterLink,
    AuthorityToolsModule,
    AdminToolsModule,
    UserToolsModule,
  ]
})
export class ViewsPageModule { }
