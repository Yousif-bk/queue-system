import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  setAppointment= new BehaviorSubject<string>("");


  private patientUrl = 'api/patients';

  getAppointment(){
    return this.setAppointment.asObservable();
  }
  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.patientUrl);
  }
  addPatient(patient:Patient): Observable<Patient>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Patient>(this.patientUrl, patient, { headers: headers })
  }
}
