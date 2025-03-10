import { Request, Response, NextFunction } from "express";
import { Event, isValidEventPatch } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";
import { updateEvent } from "../models/update-event.models";

export const patchEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { body } = req;

    if (!isValidEventPatch(body)) {
      return next(createError("Invalid event body", 400));
    }

    const event: Event | null = await updateEvent(body);
    res.status(200).json({ event });
  } catch (error: any) {
    next(error);
  }
};
