import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booking = new Booking;

  constructor() {
    this.booking.from = "";
    this.booking.to = "";
    this.booking.departure = "";
    this.booking.return = "";
    this.booking.noOfAdults = 0;
    this.booking.flightType = "";
   }

  ngOnInit() {

  }

  searchFlight() {
    console.log("Flight Details: ", this.booking);
  }

}
