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
    this.getInitPatients();
  }

  getTime(){
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ' PM';
    let dateTime = time;
   return dateTime
  }


  getInitPatients() {

    this.uiState.isLoading = true;
    this.appService.getPatient().subscribe(patient => {
      this.state.patient.list = patient;

      this.state.patient.list.forEach((element) => {
         if(element.appointment === this.getTime()){
           element.action = "Ready to seen";
         } else if(element.action === "Renewal"){
           element.action = "Ready to seen";
         }
      })

      this.uiState.isLoading = false;
    }
    )
  }


}
