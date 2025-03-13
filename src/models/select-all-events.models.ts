import db from "../db/connection";

import { Event } from "../types/types";

export const selectAllEvents = async (): Promise<Event[]> => {
  const { rows } = await db.query<Event>(
    "SELECT event_id, title, description, details, location, address, created_by, start_time, end_time FROM events"
  );
  return rows;
};
