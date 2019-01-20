import { Component, OnInit } from '@angular/core';

interface Week {
  weekNo: number,
  days: [
    {dayNo: number, name: string}
  ]
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  weeks: Week[] = [];
  month: string;
  totalDays: number;

  dayNames: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  constructor() { }

  weekCount(year, month_number) {

      // month_number is in the range 1..12

      var firstOfMonth = new Date(year, month_number-1, 1);
      var lastOfMonth = new Date(year, month_number, 0);

      var used = firstOfMonth.getDay() + lastOfMonth.getDate();

      return Math.ceil(used / 7);
  }

  getDays(year, month) {
    let bDay = new Date(year, month, 0).getDay()+1;
    this.totalDays = new Date(year, month, 0).getDate();
    let week = 1;
    let w:any = {};
    let days = [];
    let nSpace = 0;
    for(let i = 0; i < this.totalDays; i++) {
      let day = {
        dayNo: i + 1,
        name: this.dayNames[bDay]
      }
      days.push(day);
      bDay++;
      if(bDay == 7 || i == this.totalDays - 1) {
        bDay = 0;
        w.weekNo = week;
        w.days = days;
        this.weeks.push(w);
        week++;
        days = [];
        w = {};
      }
    }
  }

  ngOnInit() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    this.getDays(2019, 0);
  }

}
