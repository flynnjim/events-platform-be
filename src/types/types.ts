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
  address: string;
  created_by: number;
  start_time: number;
  end_time: number;
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

export interface NewEventBody {
  title: string;
  description: string;
  location: { latitude: number; longitude: number };
  address: string;
  start_time: number;
  end_time: number;
}

export type InsertEventBody = [
  string,
  string,
  { latitude: number; longitude: number },
  string,
  number,
  string,
  string
];

export const isValidNewEventBody = (body: any): body is NewEventBody => {
  return (
    typeof body.title === "string" &&
    typeof body.description === "string" &&
    typeof body.address === "string" &&
    typeof body.start_time === "number" &&
    typeof body.end_time === "number" &&
    typeof body.location === "object" &&
    body.location !== null &&
    typeof body.location.latitude === "number" &&
    typeof body.location.longitude === "number"
  );
};
