import { Request, Response, NextFunction } from "express";
import { Staff } from "../types/types";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import { selectSingleStaff } from "../models/select-single-staff.models";

export const getSingleStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { staff_id } = req.params;

    if (!/^\d+$/.test(staff_id)) {
      return next(createError("Bad request", 400));
    }
    const staff: Staff | null = await selectSingleStaff(staff_id);
    if (!staff) {
      return next(notFoundError("Staff"));
    }

    res.status(200).json({ staff });
  } catch (error) {
    next(error);
  }
};
