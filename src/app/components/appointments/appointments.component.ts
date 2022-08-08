import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { staticData } from 'src/shared/models/staticData';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  uiState = {
    staticPreData: staticData
  }


  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  setAppointment(appointment: string) {
    this.appService.setAppointment.next(appointment);
    this.router.navigate(['/patient-form']);
  }
}
