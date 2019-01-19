import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Representative } from '../models/rep';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  query;

  APP_KEY: string = '4XVLEHEWNMPVI54JRH';
  SECRET_KEY: string = 'YXF334Y4PK7AHEKSXGM267JU2KR55HO6CKVERWVD3JDH22EFZH';
  PERSONAL_OAUTH: string = '2VKGSSXWMF3W7C5LXFHC';
  ANON_OAUTH: string = 'AHLFBCQFQBBGSFI54FTY';

  repURI: string = 'https://immense-fortress-36457.herokuapp.com';
  eventURI: string = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${this.APP_KEY}&redirect_uri=localhost:4200`

  constructor(private http: HttpClient) { }

  getRepresentatives(location: string) {
    let params = new HttpParams()
    .set('address', location);
    return this.http.get<Representative[]>(this.repURI + '/reps', {params: params})
    .pipe(
      map(reps => reps.map(rep => {
        let r = rep;
        if(rep.channels) {
          let channels = rep.channels.map(channel => {
            let uri = "https://www.";
            let c = channel;
            if(channel.type === 'Facebook') {
              c.id = uri + 'facebook.com/' + c.id;
            } else if (channel.type === 'Twitter') {
              c.id = uri + 'twitter.com/' + c.id;
            } else if (channel.type === 'YouTube') {
              c.id = uri + 'youtube.com/' + c.id;
            }
            return c;
          })
          r.channels = channels;
        }
        // if(rep.address) {
        //   let address = rep.address;
        //   rep.scope = 'test';
        // }
        return r;
      }))
    );
  }

  getEvents(keyword: string) {
    let params: HttpParams = new HttpParams().set('q', keyword);
    // return this.http.get(this.eventURI, {params: params});
  }
}
