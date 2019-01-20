import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-glimpse',
  templateUrl: './event-glimpse.component.html',
  styleUrls: ['./event-glimpse.component.scss']
})
export class EventGlimpseComponent implements OnInit {

  @Input('event') event: any;

  constructor() { }

  ngOnInit() {
  }

}
