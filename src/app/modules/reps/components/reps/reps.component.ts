import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { QueryService } from '../../../../services/query.service';
import { LocationService } from '../../../../services/location.service';

import { RepDetailComponent } from '../rep-detail/rep-detail.component';
import { Representative, Address } from '../../../../models/rep';

import { Observable, empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.scss']
})
export class RepsComponent implements OnInit {

  representatives: Observable<Representative[]>;
  shortLocation: string;

  filterObj: {} = null;

  constructor(
    private dialog: MatDialog,
    private query: QueryService,
    private location: LocationService
  ) { }

  openRepDetail(rep) {
    let dialogRef = this.dialog.open(RepDetailComponent, {
      width: '600px',
      data: rep
    })
  }

  // localFilter() {
  //   this.filterObj = {
  //     city: this.location.city
  //   };
  // }
  //
  // stateFilter() {
  //   this.filterObj = {
  //     state: this.location.state
  //   };
  // }

  federalFilter() {
    this.filterObj = null
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.representatives = this.location.getLocation(pos)
      .pipe(
        switchMap(loc => {
          this.shortLocation = loc.address_components.city + ',' + loc.address_components.state;
          return this.query.getRepresentatives(loc.fullAddress)
        })
      )
    })
  }

}
