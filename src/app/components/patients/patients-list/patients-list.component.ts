import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/shared/models/Patient';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  constructor(private appService: AppService) { }

  state = {
    patient:{
      list: [] as Patient[]
    }
  }
  uiState ={
    isLoading: false
  }


  ngOnInit(): void {
    this.getInitPatient();
  }

  getInitPatient() {
    this.uiState.isLoading = true;
    this.appService.getPatient().subscribe(patient => {
      console.log(patient)
      this.state.patient.list = patient;
      this.uiState.isLoading = false;
    }
    )
  }
}
