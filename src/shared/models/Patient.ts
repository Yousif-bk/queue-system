export interface Patient {
  id: number;
  fullName: string;
  userName: string;
  gender: string;
  action: string;
  appointment?:string
}
