import { Request, Response, NextFunction } from "express";
import { selectAllUsers } from "../models/select-all-users.models";
import { User } from "../types/types";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users: User[] = await selectAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
