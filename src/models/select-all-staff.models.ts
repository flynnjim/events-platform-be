import db from "../db/connection";

import { Staff } from "../types/types";

export const selectAllStaff = async (): Promise<Staff[]> => {
  const { rows } = await db.query<Staff>(
    "SELECT staff_id, first_name, last_name, email, password_hash FROM staff"
  );
  return rows;
};
