import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckinService } from '../../services/checkin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  imports: [FormsModule],
  templateUrl: './startcheckin.html',
  styleUrl: './startcheckin.css',
})
export class Startcheckin {

  reservationId : number = 0 ;
  constructor(private service:CheckinService,private router:Router){}
  onClick(){
    this.service.getReservationById(this.reservationId)
    .subscribe(
     (data:any)=>{console.log(data);
      (this.service as any).reservationData = data;
      this.router.navigate(['/checkin']);
     }
    );
  }
}
