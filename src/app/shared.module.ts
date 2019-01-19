import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FilterPipe } from './filter.pipe';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [FilterPipe, SpinnerComponent],
  exports: [FilterPipe, SpinnerComponent]
})
export class SharedModule { }
