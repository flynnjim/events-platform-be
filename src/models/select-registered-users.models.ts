import db from "../db/connection";

import { User } from "../types/types";

export const selectRegisteredUsers = async (
  event_id: string
): Promise<User[] | null> => {
  try {
    const { rows } = await db.query<User>(
      "SELECT users.user_id, users.username, users.first_name, users.last_name, users.email FROM registration JOIN users ON registration.user_id = users.user_id WHERE registration.event_id = $1;",
      [event_id]
    );
    return rows.length > 0 ? rows : null;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
