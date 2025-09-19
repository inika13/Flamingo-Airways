import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  newBooking: Booking = {
  bookingID: 0,
  customerID: 0,
  flightID: 0,
  passengerName: '',
  passengerAge: 0,
  passengerGender: '',
  noOfSeats: 1,
  bookingDate: new Date().toISOString(), 
  status: 'Pending' 
};


  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe({
      next: (data) => this.bookings = data,
      error: (err) => console.error('Error loading bookings', err)
    });
  }

  addBooking(): void {
    this.bookingService.createBooking(this.newBooking).subscribe({
      next: () => {
        this.loadBookings();
        this.resetForm();
      },
      error: (err) => console.error('Error creating booking', err)
    });
  }

  deleteBooking(id: number): void {
    this.bookingService.deleteBooking(id).subscribe({
      next: () => this.loadBookings(),
      error: (err) => console.error('Error deleting booking', err)
    });
  }

  resetForm(): void {
  this.newBooking = {
    bookingID: 0,
    customerID: 0,
    flightID: 0,
    passengerName: '',
    passengerAge: 0,
    passengerGender: '',
    noOfSeats: 1,
    bookingDate: new Date().toISOString(),
    status: 'Pending'
  };
}
  }

