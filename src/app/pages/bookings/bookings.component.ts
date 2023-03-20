import { Component } from '@angular/core';
import { BookingService } from '@services/booking.service';
import { Observable, pipe, reduce, scan } from 'rxjs';

import { Booking } from '@/models/booking.model';


@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

    bookings$: Observable<Booking[]> = this.bookingService.getBookings();

    constructor(private bookingService: BookingService) {}

}
