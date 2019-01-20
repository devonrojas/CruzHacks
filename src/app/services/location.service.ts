import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  api: string = 'AIzaSyB1j5rigdnPYDbqxS4zr5E0WyK-Np1Tghs';
  uri: string = 'https://maps.googleapis.com/maps/api/geocode/json'

  constructor(private http: HttpClient) {}

  getLocation(pos) {
    let params: HttpParams = new HttpParams()
    .set('latlng', pos.coords.latitude + ',' + pos.coords.longitude)
    .set('key', this.api);
    return this.http.get(this.uri, {params: params})
    .pipe(
      map((res:any) => {
        let comps = res.results[0].address_components;
        return {
          fullAddress: comps[0].long_name + ' ' + comps[1].long_name + ' ' + comps[2].long_name + ',' + comps[4].short_name + ' ' + comps[5].long_name,
          address_components: {
            street: comps[0].long_name + ' ' + comps[1].long_name,
            city: comps[2].long_name,
            state: comps[4].short_name,
            zip: comps[6].long_name
          }
        }
      })
    )
  }

  // zipToCity() {
  //   let params: HttpParams = new HttpParams().set('')
  // }
}
