interface Registration {
  registration_id: number;
  user_id: number;
  event_id: number;
  registration_date: Date;
  status: "Confirmed" | "Cancelled";
}

const registrations: Registration[] = [
  {
    registration_id: 1,
    user_id: 3,
    event_id: 1,
    registration_date: new Date("2025-05-01T10:00:00"),
    status: "Confirmed",
  },
  {
    registration_id: 2,
    user_id: 5,
    event_id: 2,
    registration_date: new Date("2025-06-01T11:30:00"),
    status: "Cancelled",
  },
  {
    registration_id: 3,
    user_id: 2,
    event_id: 3,
    registration_date: new Date("2025-07-01T12:00:00"),
    status: "Confirmed",
  },
  {
    registration_id: 4,
    user_id: 4,
    event_id: 4,
    registration_date: new Date("2025-08-01T13:30:00"),
    status: "Confirmed",
  },
  {
    registration_id: 5,
    user_id: 1,
    event_id: 5,
    registration_date: new Date("2025-09-01T14:00:00"),
    status: "Cancelled",
  },
];

export default registrations;
