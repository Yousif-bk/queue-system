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
    patient: {}
  }
  uiState = {
    isLoading: false
  }

  /* Forms */
  patientFormGroup: FormGroup;

  constructor(private appService: AppService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForms();
    this.getAppointment();
  }

  private initForms() {
    this.patientFormGroup = this.formBuilder.group({
      fullName: [null, Validators.required],
      userName: [null, Validators.required],
      gender: [null, Validators.required],
      action: [null, Validators.required],
      appointment: [null, Validators.required]
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

  onSubmit() {
    this.uiState.isLoading = true;
    this.appService.addPatient(this.patientFormGroup.value).subscribe({
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
