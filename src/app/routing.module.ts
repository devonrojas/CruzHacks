import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { RepsComponent } from './modules/reps/components/reps/reps.component';
import { EventsComponent } from './modules/events/components/events/events.component';
import { RegistrationComponent } from './modules/registration/components/registration/registration.component';
import { ResourcesComponent } from './modules/dashboard/components/resources/resources.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'reps', component: RepsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'registration', component:  RegistrationComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
