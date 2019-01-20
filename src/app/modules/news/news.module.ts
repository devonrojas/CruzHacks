import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }
