import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  api: string = 'AIzaSyBGRPvGOq9zEgmK_47os04lrr292Itjye0';

  constructor(private http: HttpClient) { }

  // zipToCity() {
  //   let params: HttpParams = new HttpParams().set('')
  // }
}
