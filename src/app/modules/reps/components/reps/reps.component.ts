import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { QueryService } from '../../../../services/query.service';
import { RepDetailComponent } from '../rep-detail/rep-detail.component';
import { Representative, Address } from '../../../../models/rep';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.scss']
})
export class RepsComponent implements OnInit {

  representatives: Observable<Representative[]>;

  filterObj: {} = null;

  location: Address = {
    line1: '13436 San Pasqual Rd',
    city: 'San Diego',
    state: 'CA',
    zip: '92025'
  };

  constructor(private dialog: MatDialog, private query: QueryService) { }

  openRepDetail(rep) {
    let dialogRef = this.dialog.open(RepDetailComponent, {
      width: '600px',
      data: rep
    })
  }

  localFilter() {
    this.filterObj = {
      city: this.location.city
    };
  }

  stateFilter() {
    this.filterObj = {
      state: this.location.state
    };
  }

  federalFilter() {
    this.filterObj = null
  }

  ngOnInit() {
    this.representatives = this.query.getRepresentatives(this.location.line1);
  }

}
