import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

import { RepsComponent } from './components/reps/reps.component';
import { RepDetailComponent } from './components/rep-detail/rep-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [RepDetailComponent],
  declarations: [RepsComponent, RepDetailComponent]
})
export class RepsModule { }
