import db from "../db/connection";
import { Staff } from "../types/types";

export const selectSingleStaff = async (
  staff_id: String
): Promise<Staff | null> => {
  try {
    const { rows } = await db.query<Staff>(
      "SELECT staff_id, first_name, last_name, email, password_hash FROM staff WHERE staff_id = $1",
      [staff_id]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
