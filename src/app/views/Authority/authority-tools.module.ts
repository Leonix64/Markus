import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SharedToolsModule } from '../Shared/shared-tools.module';
import { HomeAuthorityComponent } from './home-authority/home-authority.component';

@NgModule({
  declarations: [
    HomeAuthorityComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedToolsModule
  ],
  exports: [HomeAuthorityComponent]
})
export class AuthorityToolsModule { }
