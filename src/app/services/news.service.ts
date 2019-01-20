import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  NEWS_URI = 'https://newsapi.org/v2/everything';
  NEWS_API: string = '70e7e15c2507424886d787925ed5e1b0';

  constructor(private http: HttpClient) { }

  getNews(keyword: string) {
    let params: HttpParams = new HttpParams().set('q', keyword).set('apiKey', this.NEWS_API);
    return this.http.get<any>(this.NEWS_URI, { params: params })
    .pipe(
      map(res => res.articles.map(article => {
        let a = {
          title: article.title,
          desc: article.description,
          url: article.url,
          photo: article.urlToImage
        }
        return a;
      }))
    );
  }
}
