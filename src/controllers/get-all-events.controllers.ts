import { Request, Response, NextFunction } from "express";
import { Event } from "../types/types";
import { selectAllEvents } from "../models/select-all-events.models";

export const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const events: Event[] = await selectAllEvents();
    res.status(200).json({ events });
  } catch (error) {
    next(error);
  }
};
