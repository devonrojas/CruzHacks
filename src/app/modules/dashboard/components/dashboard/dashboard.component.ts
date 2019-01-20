import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  events: any[] = [
    {date: '1/14', photo: 'assets/img1.jpeg', title: "Women's March"},
    {date: '1/15', photo: 'assets/img2.jpeg', title: "March For Our Lives"},
    {date: '1/16', photo: 'assets/img3.jpeg', title: "Santa Cruz Town Hall"},
    {date: '1/17', photo: 'assets/img4.jpeg', title: "Primary Canvassing"}
  ];
  groups: any[] = [
    {
      name: "Women's March"
    },
    {
      name: "Libertarian Party Meetup"
    },
    {
      name: "Volunteer For Change"
    },
    {
      name: "March For Our Lives"
    }
  ];
  articles: Observable<any[]>;
  articleIndex: number = 0;

  constructor(private news: NewsService) { }

  nextArticle() {
    if(this.articleIndex === 19) {
      this.articleIndex = 0;
    } else {
      this.articleIndex +=1;
    }
  }

  prevArticle() {
    if(this.articleIndex === 0) {
      this.articleIndex = 19;
    } else {
      this.articleIndex -=1;
    }
  }

  ngOnInit() {
    this.articles = this.news.getNews('government');
  }

}
