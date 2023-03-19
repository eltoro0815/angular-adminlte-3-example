import { Component } from '@angular/core';
import { BookingService } from '@services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

  bookings: any;
  sum: any = 0;

  constructor(private bookingService: BookingService) {
    this.showBookings();
  }



  showBookings() {
    this.bookings = this.bookingService.listBookings().subscribe(
      response => {
        this.bookings = response['data'];

        console.log(this.bookings);

        this.sum = this.bookings.reduce(
            (acc, element) =>
                acc + parseFloat(element.amount)
            ,
        0);
      }
    );
  }
}
