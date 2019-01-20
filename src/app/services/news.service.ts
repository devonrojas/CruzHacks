import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(keyword: string) {
    let params: HttpParams = new HttpParams().set('q', keyword).set('apiKey', environment.newsAPI.api);
    return this.http.get<any>(environment.newsAPI.uri, { params: params })
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
