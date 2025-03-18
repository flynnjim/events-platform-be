import db from "../db/connection";
import { Event, InsertEventBody, NewEventBody } from "../types/types";
import { convertTimestampToDate } from "../db/seeds/utils";
import { createError } from "../middlewares/error-helper.middleware";

export const insertEvent = async (
  created_by: string,
  newEvent: NewEventBody
): Promise<Event | null> => {
  const staffId = Number(created_by);
  if (isNaN(staffId)) {
    throw createError("Invalid staff id", 400);
  }

  try {
    const convertedEvent = convertTimestampToDate(newEvent);

    const insertTuple: InsertEventBody = [
      convertedEvent.title,
      convertedEvent.description,
      convertedEvent.event_type,
      convertedEvent.details,
      convertedEvent.location,
      convertedEvent.address,
      staffId,
      convertedEvent.start_time.toISOString(),
      convertedEvent.end_time.toISOString(),
    ];

    const { rows } = await db.query<Event>(
      "INSERT INTO events (title, description, event_type, details, location, address, created_by, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
      insertTuple
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error: any) {
    // foreign key violation
    if (error.code === "23503") {
      throw createError(`Staff member with ID ${staffId} does not exist.`, 404);
    }
    throw createError("Database query failed", 500);
  }
};
