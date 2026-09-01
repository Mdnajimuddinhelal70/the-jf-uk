import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";

const createAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const admin = await authService.createAdmin(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Admin Created Successfully",
      data: admin,
    });
  },
);

const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginAdmin(req.body);

  res.cookie("accessToken", result.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Admin Login Successfully",
    data: {
      admin: result.admin,
    },
  });
});

export const AdminController = {
  createAdmin,
  loginAdmin,
};
