import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.css']
})
export class PatientsFormComponent implements OnInit {

  state = {
    appointment: '',
  }
  uiState = {
    isLoading: false,
    isSubmitting: false,
  }

  /* Forms */
  patientFormGroup: FormGroup;

  constructor(private appService: AppService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForms();
    this.getAppointment();
    this.ticketNumber();
  }

  private initForms() {
    this.patientFormGroup = this.formBuilder.group({
      ticketNumber: [this.ticketNumber(), Validators.required],
      fullName: [null, Validators.required],
      userName: [null, Validators.required],
      gender: [null, Validators.required],
      action: [null, Validators.required],
      appointment: [null, Validators.required],
      doctor: [null, Validators.required]
    }
    );
  }

  get patientFormControls() { return this.patientFormGroup.controls; }

  getAppointment() {
    this.appService.getAppointment().subscribe(appointment => {
      this.state.appointment = appointment;
      this.patientFormControls.appointment.setValue(this.state.appointment);
    }
    )
  }

  ticketNumber(){
    let math = Math.floor(Math.random() * (9999 - 1000) + 1000);
    return 'TIK'+ ' ' + math;
  }

  onSubmit() {
    this.uiState.isSubmitting= true
    this.uiState.isLoading = true;

    if(this.patientFormGroup.invalid){
      this.uiState.isLoading = false;

      return;
    }

    this.appService.createPatient(this.patientFormGroup.value).subscribe({
      next: (res) => {
        this.uiState.isLoading = false;
        this.router.navigate(['/patients']);
      },
      error: (err) => {
        console.log(err);
        this.uiState.isLoading = false;
      }
    })
  }



}
