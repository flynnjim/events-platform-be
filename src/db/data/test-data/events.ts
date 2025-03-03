export interface Event {
  event_id: number;
  title: string;
  description: string;
  location: { latitude: number; longitude: number };
  created_by: number;
  start_time: Date;
  end_time: Date;
}

const eventData: Event[] = [
  {
    event_id: 1,
    title: "Tech Conference 2025",
    description:
      "A conference discussing the latest trends in technology and software development.",
    location: { latitude: 37.7749, longitude: -122.4194 },
    created_by: 2,
    start_time: new Date("2025-06-15T09:00:00"),
    end_time: new Date("2025-06-15T17:00:00"),
  },
  {
    event_id: 2,
    title: "Data Science Bootcamp",
    description:
      "An intensive 3-day bootcamp covering machine learning, AI, and big data analysis.",
    location: { latitude: 40.7128, longitude: -74.006 },
    created_by: 4,
    start_time: new Date("2025-07-10T10:00:00"),
    end_time: new Date("2025-07-12T16:00:00"),
  },
  {
    event_id: 3,
    title: "Cybersecurity Awareness Workshop",
    description:
      "A workshop focused on cybersecurity best practices and threat mitigation.",
    location: { latitude: 34.0522, longitude: -118.2437 },
    created_by: 2,
    start_time: new Date("2025-08-05T14:00:00"),
    end_time: new Date("2025-08-05T18:00:00"),
  },
  {
    event_id: 4,
    title: "AI in Healthcare Seminar",
    description:
      "A seminar exploring the applications of AI in the healthcare industry.",
    location: { latitude: 51.5074, longitude: -0.1278 },
    created_by: 4,
    start_time: new Date("2025-09-20T08:30:00"),
    end_time: new Date("2025-09-20T16:30:00"),
  },
  {
    event_id: 5,
    title: "Cloud Computing Workshop",
    description:
      "Hands-on workshop for building cloud-based applications and services.",
    location: { latitude: 48.8566, longitude: 2.3522 },
    created_by: 2,
    start_time: new Date("2025-10-01T09:00:00"),
    end_time: new Date("2025-10-01T17:00:00"),
  },
];

export default eventData;
