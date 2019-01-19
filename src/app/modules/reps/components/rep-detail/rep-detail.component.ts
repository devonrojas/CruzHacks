import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rep-detail',
  templateUrl: './rep-detail.component.html',
  styleUrls: ['./rep-detail.component.scss']
})
export class RepDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public rep: any,
              private dialogRef: MatDialogRef<RepDetailComponent>) { }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
