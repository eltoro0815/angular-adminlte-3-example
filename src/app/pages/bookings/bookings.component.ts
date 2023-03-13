import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
    data: any;
    sum: any;
    constructor(private http: HttpClient) {
        this.http.get('http://backend.ddev.site/api/bookings').subscribe({
            next: (response) => {
                this.data = response['data'];

                console.log(this.data);

                this.sum = this.data.reduce(
                    (acc, element) =>
                        acc + parseFloat(element.amount)
                    ,
                0
                );
    },
    error: (e) => {
                console.error(e);
},
        });



    }
}
