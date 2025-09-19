export interface Booking {
  bookingID: number;
  customerID: number;
  flightID: number;
  passengerName: string;
  passengerAge: number;
  passengerGender: string;
  noOfSeats: number;
  bookingDate?: string;  
  status?: string;
}
