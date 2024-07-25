import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { roleGuard } from '../guards/role.guard';

// Tools Modules
import { UserToolsModule } from './User/user-tools.module';
import { AdminToolsModule } from './Admin/admin-tools.module';
import { AuthorityToolsModule } from './Authority/authority-tools.module';

// User

// Admin

// Authority

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./User/user-tools.module').then(m => m.UserToolsModule),
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['user'] }
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin/admin-tools.module').then(m => m.AdminToolsModule),
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['admin'] }
  },
  {
    path: 'authority',
    loadChildren: () => import('./Authority/authority-tools.module').then(m => m.AuthorityToolsModule),
    canActivate: [authGuard, roleGuard],
    data: { expectedRoles: ['authority'] }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
