import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  APP_KEY: string = '4XVLEHEWNMPVI54JRH';
  eventURI: string = 'https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=4XVLEHEWNMPVI54JRH&redirect_uri=https://7014b87c.ngrok.io'

  constructor() { }

  ngOnInit() {
  }

}
