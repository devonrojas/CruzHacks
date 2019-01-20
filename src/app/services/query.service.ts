import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  query;

  uri: string = 'http://104.197.178.54';

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getRepresentatives(location: string) {
    let params = new HttpParams()
    .set('address', location);
    return this.http.get<any[]>(this.uri + '/reps', {params: params})
    .pipe(
      map((reps:any) => {
        return reps.officials.map((rep, index) => {
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
          for(let i = 0; i < reps.offices.length; i++) {
            if(reps.offices[i].officialIndices.includes(index)) {
              r.office = reps.offices[i].name;
              return r;
            }
          }
        })
      })
    )
  }

  getEvents() {
    let params: HttpParams = new HttpParams().set('zipcode', '92028');
    return this.http.get(this.uri + '/events', {params: params})
    .pipe(
      map((events:any) => events.results.map(res => {
        let r = res;
        r = {
          title: res.name,
          time: res.time,
          url: res.event_url
        }

        if(res.venue) {
          r.location = {
            address: res.venue.address_1 + ' ' + res.venue.city + ',' + res.venue.state,
            city: res.venue.city,
            state: res.venue.state,
            lat: res.venue.lat,
            lng: res.venue.lon,
          }
        }
        return r;
      }))
    )
  }

  getRepData(firstName, lastName) {
    let params: HttpParams = new HttpParams().set('rep', firstName + ' ' + lastName);
    return this.http.get(this.uri + '/repswiki', {params: params})
  }
}
