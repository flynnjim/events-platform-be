import db from "../db/connection";

import { User } from "../types/types";

export const getUserByUsername = async (
  username: string
): Promise<User | null> => {
  try {
    const { rows } = await db.query<User>(
      "SELECT user_id, username, first_name, last_name, email, password_hash FROM users WHERE username = $1",
      [username]
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.log(error);
    throw new Error("Database query failed");
  }
};
