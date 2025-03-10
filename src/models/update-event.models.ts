import db from "../db/connection";

import { Event } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";

export const updateEvent = async (body: Event): Promise<Event> => {
  try {
    const values = [
      body.title,
      body.description,
      body.location,
      body.address,
      body.created_by,
      new Date(body.start_time).toISOString(),
      new Date(body.end_time).toISOString(),
      body.event_id,
    ];
    const { rows } = await db.query<Event>(
      "UPDATE events SET title = $1, description = $2, location = $3, address = $4, created_by = $5, start_time = $6, end_time = $7 WHERE event_id = $8 RETURNING *;",
      values
    );
    if (rows.length === 0) {
      throw createError(`Event with ID ${body.event_id} not found.`, 404);
    }
    return rows[0];
  } catch (error: any) {
    if (error.code === "23503") {
      throw createError(
        `Staff member with ID ${body.created_by} does not exist.`,
        404
      );
    }
    if (error.status === 404) {
      throw createError(error.msg, 404);
    }
    throw createError("Database query failed", 500);
  }
};
