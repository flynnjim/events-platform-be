import db from "../db/connection";
import { Event } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";
import { PatchEventBody } from "../types/types";

export const updateEvent = async (body: Event): Promise<Event> => {
  const defaultImage =
    "https://res.cloudinary.com/dufw9aqhs/image/upload/v1743084248/computer_okaake.jpg";
  try {
    const values: PatchEventBody = [
      body.title,
      body.description,
      body.event_type,
      body.details,
      body.location,
      body.address,
      body.created_by,
      new Date(body.start_time).toISOString(),
      new Date(body.end_time).toISOString(),
      body.image || defaultImage,
      body.event_id,
    ];

    const { rows } = await db.query<Event>(
      "UPDATE events SET title = $1, description = $2, event_type = $3, details = $4, location = $5, address = $6, created_by = $7, start_time = $8, end_time = $9, image = $10 WHERE event_id = $11 RETURNING *;",
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
