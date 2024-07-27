import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeUserComponent } from './home-user/home-user.component';

@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedToolsModule,
  ],
  exports: [HomeUserComponent]
})
export class UserToolsModule { }
