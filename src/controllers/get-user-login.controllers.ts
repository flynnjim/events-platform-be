import { Request, Response, NextFunction } from "express";
import { User } from "../types/types";
import { getUserByUsername } from "../models/get-users-by-username.models";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJWT = (userId: number): string => {
  return jwt.sign(
    { user_id: userId },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1h" }
  );
};

export const getUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(createError("Username and password are required", 400));
    }

    const user: User | null = await getUserByUsername(username);
    if (!user) {
      return next(notFoundError("User"));
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return next(createError("Invalid password", 403));
    }

    const token = generateJWT(user.user_id);

    res.status(201).json({ token, user });
  } catch (error) {
    next(error);
  }
};
