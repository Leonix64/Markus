import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewsPage } from './views.page';

// Guards
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { UserGuard } from '../guards/user.guard';
import { AdminGuard } from '../guards/admin.guard';
import { AuthorityGuard } from '../guards/authority.guard';

// User
import { HomeUserComponent } from './User/home-user/home-user.component';

// Admin
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { CreateEventComponent } from './Admin/events/create-event/create-event.component';
import { ListEventComponent } from './Admin/events/list-event/list-event.component';
import { EditEventComponent } from './Admin/events/edit-event/edit-event.component';
import { ListAttendeesComponent } from './Admin/attendees/list-attendees/list-attendees.component';
import { CreateAttendeesComponent } from './Admin/attendees/create-attendees/create-attendees.component';
import { ListArchivedComponent } from './Admin/archived/list-archived/list-archived.component';

// Authority
import { HomeAuthorityComponent } from './Authority/home-authority/home-authority.component';

// Shared
import { ListProfileComponent } from './Shared/profile/list-profile/list-profile.component';
import { EditProfileComponent } from './Shared/profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsPage,
    canActivate: [AuthGuard],
    children: [
      // User
      { path: 'user/home', canActivate: [UserGuard], component: HomeUserComponent },
      { path: 'user/list-profile', canActivate: [UserGuard], component: ListProfileComponent },
      { path: 'user/edit-profile', canActivate: [UserGuard], component: EditProfileComponent },

      // Admin
      { path: 'admin/home', canActivate: [AdminGuard], component: HomeAdminComponent },
      { path: 'admin/list-profile', canActivate: [AdminGuard], component: ListProfileComponent },
      { path: 'admin/edit-profile', canActivate: [AdminGuard], component: EditProfileComponent },

      { path: 'admin/create-event', canActivate: [AdminGuard], component: CreateEventComponent },
      { path: 'admin/list-event', canActivate: [AdminGuard], component: ListEventComponent },
      { path: 'admin/edit-event/:id', canActivate: [AdminGuard], component: EditEventComponent },

      { path: 'admin/list-attendees/:id', canActivate: [AdminGuard], component: ListAttendeesComponent },
      { path: 'admin/create-attendees/:id', canActivate: [AdminGuard], component: CreateAttendeesComponent },

      { path: 'admin/list-archived', canActivate: [AdminGuard], component: ListArchivedComponent },

      // Authority
      { path: 'authority/home', canActivate: [AuthorityGuard], component: HomeAuthorityComponent },
      { path: 'authority/list-profile', canActivate: [AuthorityGuard], component: ListProfileComponent },
      { path: 'authority/edit-profile', canActivate: [AuthorityGuard], component: EditProfileComponent },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
