import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  template: `
  <firebase-ui></firebase-ui>
  `
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}