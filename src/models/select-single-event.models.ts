import db from "../db/connection";

import { Event } from "../types/types";

export const selectSingleEvent = async (
  event_id: string
): Promise<Event | null> => {
  try {
    const { rows } = await db.query<Event>(
      "SELECT event_id, title, description, details, location, address, created_by, start_time, end_time FROM events WHERE event_id = $1",
      [event_id]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
