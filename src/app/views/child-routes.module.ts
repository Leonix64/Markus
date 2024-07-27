import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { authGuard } from '../guards/auth.guard';
import { roleGuard } from '../guards/role.guard';

import { UserToolsModule } from './User/user-tools.module';
import { AdminToolsModule } from './Admin/admin-tools.module';
import { AuthorityToolsModule } from './Authority/authority-tools.module';

// User
import { HomeUserComponent } from './User/home-user/home-user.component';

// Admin
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';

// Authority
import { HomeAuthorityComponent } from './Authority/home-authority/home-authority.component';

// Shared
import { ListProfileComponent } from './Shared/profile/list-profile/list-profile.component';
import { EditProfileComponent } from './Shared/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'user',
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['user'] },
    children: [
      { path: 'home', component: HomeUserComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'list-profile', component: ListProfileComponent }
    ]
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['admin'] },
    children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'list-profile', component: ListProfileComponent }
    ]
  },
  {
    path: 'authority',
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['authority'] },
    children: [
      { path: 'home', component: HomeAuthorityComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'list-profile', component: ListProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    UserToolsModule,
    AdminToolsModule,
    AuthorityToolsModule
  ],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
