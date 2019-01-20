import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  logOut() {
    this.auth.logOut();
  }

  ngOnInit() {
  }

}
