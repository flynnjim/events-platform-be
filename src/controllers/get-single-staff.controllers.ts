import { Request, Response, NextFunction } from "express";
import { Staff } from "../types/types";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import { selectSingleStaff } from "../models/select-single-staff.models";
import bcrypt from "bcrypt";

export const getSingleStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { staff_id } = req.params;
    // const { password } = req.query;
    // console.log(password);

    if (!/^\d+$/.test(staff_id)) {
      return next(createError("Bad request", 400));
    }
    const staff: Staff | null = await selectSingleStaff(staff_id);
    if (!staff) {
      return next(notFoundError("Staff"));
    }

    // if (!password) {
    //   return next(createError("Password query parameter is required", 400));
    // }

    // const isMatch = await bcrypt.compare(
    //   password as string,
    //   staff.password_hash
    // );
    // if (!isMatch) {
    //   return next(createError("Invalid password", 403)); // Unauthorized error
    // }

    res.status(200).json({ staff });
  } catch (error) {
    next(error);
  }
};
