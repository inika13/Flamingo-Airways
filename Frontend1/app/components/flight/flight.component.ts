import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Flight[] = [];
  newFlight: Flight = {
    flightID: 0,
    flightNumber: '',
    origin: '',
    destination: '',
    travelDate: new Date(),
    availableSeats: 0,
    price: 0
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getFlights().subscribe({
      next: (data) => this.flights = data,
      error: (err) => console.error('Error fetching flights:', err)
    });
  }

  addFlight(): void {
    this.flightService.addFlight(this.newFlight).subscribe({
      next: (data) => {
        this.flights.push(data);
        this.newFlight = {
          flightID: 0,
          flightNumber: '',
          origin: '',
          destination: '',
          travelDate: new Date(),
          availableSeats: 0,
          price: 0
        };
      },
      error: (err) => console.error('Error adding flight:', err)
    });
  }

  deleteFlight(id: number): void {
    this.flightService.deleteFlight(id).subscribe({
      next: () => {
        this.flights = this.flights.filter(f => f.flightID !== id);
      },
      error: (err) => console.error('Error deleting flight:', err)
    });
  }
}
