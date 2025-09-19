import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'http://localhost:5188/api/Flight'; 


  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseUrl);
  }

  getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${id}`);
  }

  addFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.baseUrl, flight);
  }

  updateFlight(id: number, flight: Flight): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, flight);
  }

  deleteFlight(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
