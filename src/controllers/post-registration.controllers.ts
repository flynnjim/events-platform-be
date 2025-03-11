import { Request, Response, NextFunction } from "express";
import { createError } from "../middlewares/error-helper.middleware";
import { Registration, isValidRegistrationBody } from "../types/types";
import { insertRegistration } from "../models/insert-registration.models";

export const postRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { body } = req;
    if (!isValidRegistrationBody(body)) {
      return next(createError("Invalid registration body", 400));
    }
    const registration: Registration | null = await insertRegistration(body);
    res.status(201).json({ registration });
  } catch (error: any) {
    next(error);
  }
};
