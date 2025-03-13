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
  details: string;
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
  registration_date: number;
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
  details: string;
  location: { latitude: number; longitude: number };
  address: string;
  start_time: number;
  end_time: number;
}

export type InsertEventBody = [
  string,
  string,
  string,
  { latitude: number; longitude: number },
  string,
  number,
  string,
  string
];

export type PatchEventBody = [
  string,
  string,
  string,
  { latitude: number; longitude: number },
  string,
  number,
  string,
  string,
  number
];

export type InsertRegistrationBody = [number, number, Date, string];

export const isValidNewEventBody = (body: any): body is NewEventBody => {
  return (
    typeof body.title === "string" &&
    typeof body.description === "string" &&
    typeof body.details === "string" &&
    typeof body.address === "string" &&
    typeof body.start_time === "number" &&
    typeof body.end_time === "number" &&
    typeof body.location === "object" &&
    body.location !== null &&
    typeof body.location.latitude === "number" &&
    typeof body.location.longitude === "number"
  );
};

export const isValidEventPatch = (body: any): body is Event => {
  return (
    typeof body.title === "string" &&
    typeof body.description === "string" &&
    typeof body.details === "string" &&
    typeof body.address === "string" &&
    typeof body.start_time === "number" &&
    typeof body.end_time === "number" &&
    typeof body.location === "object" &&
    body.location !== null &&
    typeof body.location.latitude === "number" &&
    typeof body.location.longitude === "number"
  );
};

export const isValidRegistrationBody = (body: any): body is Registration => {
  return (
    typeof body.user_id === "number" &&
    typeof body.event_id === "number" &&
    typeof body.registration_date === "number" &&
    typeof body.status === "string"
  );
};

export const isValidRegistrationPatch = (body: any): body is Registration => {
  return (
    typeof body.registration_id === "number" && typeof body.status === "string"
  );
};
