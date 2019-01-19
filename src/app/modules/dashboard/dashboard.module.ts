import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { RoutingModule } from '../../routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
