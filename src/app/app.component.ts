import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { User } from './models/user';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Politity';
  user: any;

  navEnabled: Observable<boolean>;

  constructor(
    private location: LocationService,
    private auth: AuthService,
    private userService: UserService
  ) {
        this.user = this.auth.user;
        this.navEnabled = this.userService.nav;
        const ua = navigator.userAgent;
        this.userService.navEnabled(true);
  }

  ngOnInit() {}
}
