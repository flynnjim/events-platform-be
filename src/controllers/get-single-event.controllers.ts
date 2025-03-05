import { Request, Response, NextFunction } from "express";
import { Event } from "../types/types";
import { selectSingleEvent } from "../models/select-single-event.models";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";

export const getSingleEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { event_id } = req.params;

    if (!/^\d+$/.test(event_id)) {
      return next(createError("Bad request", 400));
    }

    const event: Event | null = await selectSingleEvent(event_id);

    if (!event) {
      return next(notFoundError("Event"));
    }

    res.status(200).json({ event });
  } catch (error) {
    next(error);
  }
};
