import { Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { donorService } from "./donor.service";

const createDonor = catchAsync(async (req: Request, res: Response) => {
  const donor = await donorService.createDonor(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Donor Created Successfully",
    data: donor,
  });
});

const getAllDonors = catchAsync(async (req: Request, res: Response) => {
  const donors = await donorService.getAllDonors();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donors Retrieved Successfully",
    data: donors,
  });
});

const getDonorById = catchAsync(async (req: Request, res: Response) => {
  const donor = await donorService.getDonorById(req.params.id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donor Retrieved Successfully",
    data: donor,
  });
});

const updateDonor = catchAsync(async (req: Request, res: Response) => {
  const donor = await donorService.updateDonor(
    req.params.id as string,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donor Updated Successfully",
    data: donor,
  });
});

const deleteDonor = catchAsync(async (req: Request, res: Response) => {
  await donorService.deleteDonor(req.params.id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Donor Deleted Successfully",
    data: null,
  });
});

export const donorController = {
  createDonor,
  getAllDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
};
