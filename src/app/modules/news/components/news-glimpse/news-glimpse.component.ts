import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news-glimpse',
  templateUrl: './news-glimpse.component.html',
  styleUrls: ['./news-glimpse.component.scss']
})
export class NewsGlimpseComponent implements OnInit {

  @Input('article') article: any;

  constructor() { }

  ngOnInit() {
  }

}
