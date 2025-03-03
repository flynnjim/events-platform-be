export interface User {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
}

export interface Event {
  event_id: number;
  title: string;
  description: string;
  location: { latitude: number; longitude: number };
  created_by: number;
  start_time: Date;
  end_time: Date;
}

export interface Registration {
  registration_id: number;
  user_id: number;
  event_id: number;
  registration_date: Date;
  status: "Confirmed" | "Cancelled";
}

export interface Staff {
  staff_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
}

export interface SeedData {
  eventData: Event[];
  userData: User[];
  staffData: Staff[];
  registrationData: Registration[];
}
