import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [AddressComponent, ProfileComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
