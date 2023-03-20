import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';

import { Booking } from '@/shared/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiRoot: string = 'https://backend.ddev.site/api';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    console.log('BookingService.getBookings() is called.');
    return this.http.get<Booking[]>(this.apiRoot + '/bookings');
  }

  /**
   * this is a version, if the Rest API returns the Bookings inside a json field with the name 'data'
   */
  // getBookings(): Observable<Booking[]> {

  //   const apiCall = fetch(this.apiRoot + '/bookings')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       return responseJson.data as Booking[]

  //     });

  //   return from(apiCall);

  // }

}

