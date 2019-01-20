// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { RoutingModule } from './routing.module';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Create Modules
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { RepsModule } from './modules/reps/reps.module';
import { EventsModule } from './modules/events/events.module';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { NewsModule } from './modules/news/news.module';

// Root Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LocationService } from './services/location.service';
import { NewsService } from './services/news.service';
import { QueryService } from './services/query.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule,
    DashboardModule,
    RepsModule,
    EventsModule,
    GraphQLModule,
    RegistrationModule,
    NewsModule
  ],
  providers: [QueryService, NewsService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
