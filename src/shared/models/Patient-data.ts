import { InMemoryDbService } from "angular-in-memory-web-api";
import { Patient } from "./Patient";

export class PatientData extends InMemoryDbService {
  createDb(): { patients: Patient[] } {
    const patients: Patient[] = [
      {
        id: 1,
        ticketNumber: "TIK 001",
        fullName: 'John Doe',
        userName: 'jdoe',
        gender: 'Male',
        appointment: "12:18 PM",
        action: "New",
        doctor: "John Doe",
      }
    ];
    return { patients };
  }
}
