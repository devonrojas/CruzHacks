import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { RepsComponent } from './modules/reps/components/reps/reps.component';
import { EventsComponent } from './modules/events/components/events/events.component';
import { RegistrationComponent } from './modules/registration/components/registration/registration.component';
import { ResourcesComponent } from './modules/dashboard/components/resources/resources.component';
import { NewsComponent } from './modules/news/components/news/news.component';
import { LoginComponent } from './modules/registration/components/login/login.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'reps', component: RepsComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'news', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'registration', component:  RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
