import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

url:string = 'https://backend.ddev.site';

  constructor(private http: HttpClient) { }

  listBookings() {
    return this.http.get<any>(this.url + '/api/bookings');
  }
}
