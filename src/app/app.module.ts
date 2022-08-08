import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { PatientsFormComponent } from './components/patients/patients-form/patients-form.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientData } from 'src/shared/models/Patient-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientsFormComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(PatientData, { delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
