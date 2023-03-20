import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, from, Observable, of, throwError } from 'rxjs';

import { Booking } from '@/models/booking.model';
import { _ACTION_TYPE_UNIQUENESS_CHECK } from '@ngrx/store/src/tokens';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiRoot: string = 'https://backend.ddev.site/api';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    const url = this.apiRoot + '/bookings';

    console.log('BookingService.getBookings() is called.');

    return this.http.get<Booking[]>(this.apiRoot + '/bookings').pipe(
      catchError( _ => {
        return throwError(() => new Error('Error in BookingService HTTP GET Request to: ' + url));
      })
    );
  }

  /**
   * this is a version, if the Rest API returns the Bookings inside a json field with the name 'data'
   */
  // getBookings(): Observable<Booking[]> {

  //   const apiCall = fetch(this.apiRoot + '/bookings')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // return responseJson.data as Booking[]
  //       return responseJson as Booking[]

  //     })
  //     .catch((error) => {
  //       return [{
  //         id: -1,
  //         amount: '1',
  //         created_at: '',
  //         updated_at: ''
  //       }, {
  //         id: -1,
  //         amount: '2',
  //         created_at: '',
  //         updated_at: ''
  //       }];
  //     });

  //   return from(apiCall);

  // }

}

