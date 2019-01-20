import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from '../../modules/registration/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RegistrationComponent, LoginComponent]
})
export class RegistrationModule { }
