import db from "../db/connection";

import { Registration } from "../types/types";

import { createError } from "../middlewares/error-helper.middleware";

export const updateRegistration = async (body: any): Promise<Registration> => {
  try {
    const insertTuple = [body.status, body.registration_id];

    const { rows } = await db.query<Registration>(
      "UPDATE registration SET status = $1 WHERE registration_id = $2 RETURNING *;",
      insertTuple
    );

    if (rows.length === 0) {
      throw createError(
        `Registration with ID ${body.registration_id} not found.`,
        404
      );
    }
    return rows[0];
  } catch (error: any) {
    if (error.status === 404) {
      throw createError(error.msg, 404);
    }
    throw createError("Database query failed", 500);
  }
};
