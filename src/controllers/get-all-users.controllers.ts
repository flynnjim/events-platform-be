import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  console.log("HELLO");
};
