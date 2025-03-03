import db from "../db/connection";

import { User } from "../types/types";

export const selectAllUsers = async (): Promise<User[]> => {
  const { rows } = await db.query<User>(
    "SELECT user_id, username, first_name, last_name, email, password_hash FROM users"
  );
  return rows;
};
