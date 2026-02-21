import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation, ReservationUpdateRequest } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  private reservationData: any;

  private apiUrl = this.getApiUrl();

  private getApiUrl(): string {
    const baseUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost'
      ? 'http://localhost:8080'
      : `${window.location.protocol}//${window.location.hostname}:8080`;
    return `${baseUrl}/flightreservation/reservation`;
  }

  constructor(private http: HttpClient) {}

  getReservationById(id: number): Observable<Reservation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(reservation: ReservationUpdateRequest): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/update`, reservation);
  }

  setReservation(reservation: Reservation): void {
    this.reservationData = reservation;
  }

  getReservation(): Reservation | undefined {
    return this.reservationData;
  }

  clearReservation(): void {
    this.reservationData = undefined;
  }
}

