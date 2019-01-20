import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { FilterPipe } from './filter.pipe';

import { SpinnerComponent } from './spinner/spinner.component';
import { EventGlimpseComponent } from './modules/events/components/event-glimpse/event-glimpse.component';
import { NewsGlimpseComponent } from './modules/news/components/news-glimpse/news-glimpse.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FilterPipe,
    SpinnerComponent,
    EventGlimpseComponent,
    NewsGlimpseComponent
  ],
  exports: [
    FilterPipe,
    SpinnerComponent,
    EventGlimpseComponent,
    NewsGlimpseComponent
  ]
})
export class SharedModule { }
