import { InMemoryDbService } from "angular-in-memory-web-api";
import { Patient } from "./Patient";

export class PatientData extends InMemoryDbService {
  createDb(): { patients: Patient[] } {
    const patients: Patient[] = [
      {
        id: 1,
        fullName: 'John Doe',
        userName: 'jdoe',
        gender: 'Male',
        appointment: "9:00 PM",
        action: "New"
      }
    ];
    return { patients };
  }
}
