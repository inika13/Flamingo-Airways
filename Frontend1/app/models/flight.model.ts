export interface Flight {
  flightID: number;        
  flightNumber: string;
  origin: string;
  destination: string;
  travelDate: Date;
  availableSeats: number;
  price: number;
}
