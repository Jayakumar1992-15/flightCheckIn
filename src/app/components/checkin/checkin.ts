import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation, ReservationUpdateRequest } from '../../models/reservation';
import { CheckinService } from '../../services/checkin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  imports: [FormsModule],
  templateUrl: './checkin.html',
  styleUrl: './checkin.css',
})
export class Checkin {

  data?: Reservation;
  numberOfBags = 0;
 
  constructor(private service: CheckinService,
    private router: Router) {}
  
    ngOnInit(): void {
      this.data = this.service.getReservation();

      if (!this.data) {
        console.warn('No reservation found in state, returning to start');
        this.router.navigate(['/startcheckin']);
      }
    }

    checkIn(): void {
      if (!this.data) {
        return;
      }

      const request: ReservationUpdateRequest = {
        id: this.data.id,
        checkedIn: true,
        numberOfBags: this.numberOfBags
      };

      this.service.updateReservation(request).subscribe({
        next: () => {
          this.service.clearReservation();
          this.router.navigate(['/confirm']);
        },
        error: (err) => console.error('Failed to update reservation', err)
      });
    }
}
