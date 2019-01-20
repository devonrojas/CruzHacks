import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Representative } from '../models/rep';

import { map } from 'rxjs/operators';

import * as _ from 'lodash';

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
  eventURI: string = `https://www.eventbriteapi.com/v3/events/search`

  constructor(private http: HttpClient) { }

  getRepresentatives(location: string) {
    let params = new HttpParams()
    .set('address', location);
    return this.http.get<any[]>(this.repURI + '/reps', {params: params})
    .pipe(
      map((reps:any) => {
        return reps.officials.map((rep, index) => {
          let r = rep;
          for(let i = 0; i < reps.offices.length; i++) {
            if(reps.offices[i].officialIndices.includes(index)) {
              r.office = reps.offices[i].name;
              return r;
            }
          }
        })
      })
    )
      // map()
      //   rep.offices.forEach(office => {
      //     if(office.officialIndices.contains(index)) {
      //       r.office = office.name;
      //     }
      //   })
      //   if(rep.channels) {
      //     let channels = rep.channels.map(channel => {
      //       let uri = "https://www.";
      //       let c = channel;
      //       if(channel.type === 'Facebook') {
      //         c.id = uri + 'facebook.com/' + c.id;
      //       } else if (channel.type === 'Twitter') {
      //         c.id = uri + 'twitter.com/' + c.id;
      //       } else if (channel.type === 'YouTube') {
      //         c.id = uri + 'youtube.com/' + c.id;
      //       }
      //       return c;
      //     })
      //     r.channels = channels;
      //   }
      //   return r;
      // }))
  }

  // Need Cloud function to handle request
  // getEvents(keyword: string) {
  //   let params: HttpParams = new HttpParams().set('q', keyword);
  //   let headers: HttpHeaders = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Authorization', `Bearer ${this.PERSONAL_OAUTH}`);
  //   this.http.get(this.eventURI, {headers: headers, params: params})
  //   .subscribe(res => {
  //     console.log(res);
  //   });
  // }
}
