import { Component } from '@angular/core';
import { BookingService } from '@services/booking.service';
import { Observable, pipe, reduce, scan } from 'rxjs';

import { Booking } from '@/shared/booking.model';


@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

    //   bookings: any;
    sum: number = 0;
    bookings$: Observable<Booking[]> = this.bookingService.getBookings();


    constructor(private bookingService: BookingService) {
        this.bookings$.subscribe((data) =>
            this.sum = data.reduce((acc, booking) => acc + parseFloat(booking.amount), 0)
        );
    }





    //   showBookings() {
    //     this.bookings = this.bookingService.getBookings().subscribe(
    //       response => {
    //         this.bookings = response['data'];

    //         console.log(this.bookings);

    //         this.sum = this.bookings.reduce(
    //             (acc, element) =>
    //                 acc + parseFloat(element.amount)
    //             ,
    //         0);
    //       }
    //     );
    //   }
}
