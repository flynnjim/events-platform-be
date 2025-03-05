import { Request, Response, NextFunction } from "express";
import { User } from "../types/types";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import { selectRegisteredUsers } from "../models/select-registered-users.models";

export const getRegisteredUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { event_id } = req.params;

    if (!/^\d+$/.test(event_id)) {
      return next(createError("Bad request", 400));
    }

    const users: User[] | null = await selectRegisteredUsers(event_id);

    if (!users) {
      return next(notFoundError("Users"));
    }

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
