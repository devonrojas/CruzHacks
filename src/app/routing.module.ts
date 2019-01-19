import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { RepsComponent } from './modules/reps/components/reps/reps.component';
import { EventsComponent } from './modules/events/components/events/events.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'reps', component: RepsComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
