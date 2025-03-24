import db from "../db/connection";
import { Staff } from "../types/types";

export const getStaffByEmail = async (email: string): Promise<Staff | null> => {
  try {
    const { rows } = await db.query<Staff>(
      `
      SELECT staff_id, first_name, last_name, email, password_hash 
      FROM staff
      WHERE email = $1
      `,
      [email]
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
