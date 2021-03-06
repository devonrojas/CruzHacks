import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

import { EventsComponent } from './components/events/events.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
