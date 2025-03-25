import { Request, Response, NextFunction } from "express";
import { Event } from "../types/types";
import {
  selectAllEvents,
  selectEventsByCategory,
} from "../models/select-all-events.models";
import { createError } from "../middlewares/error-helper.middleware";

const VALID_CATEGORIES = ["Tech", "Sport", "Culture"];

export const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category } = req.query;
    let events: Event[];

    if (category) {
      const categoryStr = category.toString();
      if (!VALID_CATEGORIES.includes(categoryStr)) {
        return next(createError("Invalid category selected", 400));
      }
      events = await selectEventsByCategory(category as string);
    } else {
      events = await selectAllEvents();
    }
    res.status(200).json({ events });
  } catch (error) {
    next(error);
  }
};
