import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  events: any[] = [{date: '1/14'}, {date: '1/15'}, {date: '1/16'}, {date: '1/17'}];
  groups: string[] = ['0', '0', '0', '0'];
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
