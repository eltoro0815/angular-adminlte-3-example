import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


interface IBooking {
  id: number,
  amount: string,
  created_at: string,
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiRoot: string = 'https://backend.ddev.site/api';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.apiRoot + '/bookings');
  }
}

/*
* this is a version, if the Rest API returns the Bookings inside a json field with the name 'data'
*

export class BookingService {

  apiRoot: string = 'https://backend.ddev.site/api';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<IBooking[]> {

    const apiCall = fetch(this.apiRoot + '/bookings')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.data as IBooking[]

      });

    return from(apiCall);

  }
}
*/
