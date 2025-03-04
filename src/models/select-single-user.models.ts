import db from "../db/connection";

import { User } from "../types/types";
export const selectSingleUser = async (
  user_id: string
): Promise<User | null> => {
  try {
    const { rows } = await db.query<User>(
      "SELECT user_id, username, first_name, last_name, email, password_hash FROM users WHERE user_id = $1",
      [user_id]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
