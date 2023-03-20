import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { reduce } from "rxjs";
import { Booking } from "@/shared/booking.model";
import { BookingsComponent } from "@pages/bookings/bookings.component";

@Pipe({
  name: "sum"
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): any {
    return items.reduce((acc, item) => acc + parseFloat(item[attr]), 0);
  }
}


