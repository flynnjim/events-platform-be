import { Request, Response, NextFunction } from "express";
import { Registration, isValidRegistrationPatch } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";
import { updateRegistration } from "../models/update-registration.models";

export const patchRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { body } = req;

    if (!isValidRegistrationPatch(body)) {
      next(createError("Invalid registration body", 400));
    }
    const registration: Registration | null = await updateRegistration(body);
    res.status(200).json({ registration });
  } catch (error: any) {
    next(error);
  }
};
