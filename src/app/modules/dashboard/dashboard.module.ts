import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { RoutingModule } from '../../routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourcesComponent } from './components/resources/resources.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [DashboardComponent, ResourcesComponent]
})
export class DashboardModule { }
