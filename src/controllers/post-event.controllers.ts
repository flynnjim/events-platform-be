import { Request, Response, NextFunction } from "express";
import { Event, isValidNewEventBody } from "../types/types";
import { createError } from "../middlewares/error-helper.middleware";
import { insertEvent } from "../models/insert-event.models";

export const postEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      params: { created_by },
      body,
    } = req;

    if (!/^\d+$/.test(created_by)) {
      return next(createError("Invalid staff id", 400));
    }

    if (!isValidNewEventBody(body)) {
      return next(createError("Invalid event body", 400));
    }

    const event: Event | null = await insertEvent(created_by, body);
    res.status(201).json({ event });
  } catch (error) {
    next(error);
  }
};
