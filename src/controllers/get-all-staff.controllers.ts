import { Request, Response, NextFunction } from "express";
import { Staff } from "../types/types";
import { selectAllStaff } from "../models/select-all-staff.models";

export const getAllStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const staff: Staff[] = await selectAllStaff();
    res.status(200).json({ staff });
  } catch (error) {
    next(error);
  }
};
