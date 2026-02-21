export interface Flight {
  id: number;
  flightNumber: string;
  operatingAirlines: string;
  departureCity: string;
  arrivalCity: string;
  dateOfDeparture: string;
  estimatedDepartureTime: string;
}

export interface Passenger {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  phone: string;
}

export interface Reservation {
  id: number;
  checkedIn: boolean | null;
  numberOfBags: number | null;
  passenger: Passenger;
  flight: Flight;
}

export interface ReservationUpdateRequest {
  id: number;
  checkedIn: boolean;
  numberOfBags: number;
}