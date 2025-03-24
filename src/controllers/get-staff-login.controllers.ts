import { Request, Response, NextFunction } from "express";
import { Staff } from "../types/types";
import { getStaffByEmail } from "../models/get-staff-by-email.models";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJWT = (staffId: number): string => {
  return jwt.sign(
    { staff_id: staffId },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1h" }
  );
};

export const getStaffLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createError("Email and password are required", 400));
    }

    const staff: Staff | null = await getStaffByEmail(email);
    if (!staff) {
      return next(notFoundError("Staff"));
    }

    const isMatch = await bcrypt.compare(password, staff.password_hash);
    if (!isMatch) {
      return next(createError("Invalid password", 403));
    }

    const token = generateJWT(staff.staff_id);

    res.status(201).json({ token, staff });
  } catch (error) {
    next(error);
  }
};
