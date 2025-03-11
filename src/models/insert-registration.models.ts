import db from "../db/connection";
import { convertRegistrationTimestampToDate } from "../db/seeds/utils";
import { Registration, InsertRegistrationBody } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";

export const insertRegistration = async (
  newRegistration: Registration
): Promise<Registration | null> => {
  try {
    const convertedRegistration =
      convertRegistrationTimestampToDate(newRegistration);

    const insertTuple: InsertRegistrationBody = [
      convertedRegistration.user_id,
      convertedRegistration.event_id,
      convertedRegistration.registration_date,
      convertedRegistration.status,
    ];

    const { rows } = await db.query<Registration>(
      "INSERT INTO registration (user_id, event_id, registration_date, status) VALUES ($1, $2, $3, $4) RETURNING *;",
      insertTuple
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error: any) {
    if (error.code === "23503") {
      throw createError(
        `User with ID ${newRegistration.user_id} does not exist.`,
        404
      );
    }
    throw createError("Database query failed", 500);
  }
};
