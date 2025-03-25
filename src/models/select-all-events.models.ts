import db from "../db/connection";

import { Event } from "../types/types";

export const selectAllEvents = async (): Promise<Event[]> => {
  const { rows } = await db.query<Event>(
    "SELECT event_id, title, description, event_type, details, location, address, created_by, start_time, end_time FROM events"
  );
  return rows;
};

export const selectEventsByCategory = async (
  category: string
): Promise<Event[]> => {
  const { rows } = await db.query<Event>(
    "SELECT event_id, title, description, event_type, details, location, address, created_by, start_time, end_time FROM events WHERE event_type = $1",
    [category]
  );
  return rows;
};
