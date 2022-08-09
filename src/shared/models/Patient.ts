export interface Patient {
  id: number;
  ticketNumber: string;
  fullName: string;
  userName: string;
  gender: string;
  action: string;
  appointment?:string
  doctor?:string
}
