import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeAuthorityComponent
  }
]

import { HomeAuthorityComponent } from './home-authority/home-authority.component';

@NgModule({
  declarations: [
    HomeAuthorityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorityToolsModule { }
