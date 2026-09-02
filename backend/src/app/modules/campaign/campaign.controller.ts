import { Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { campaignService } from "./campaign.service";

const createCampaign = catchAsync(async (req: Request, res: Response) => {
  const campaign = await campaignService.createCampaign(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Campaign Created Successfully",
    data: campaign,
  });
});

const getAllCampaigns = catchAsync(async (req: Request, res: Response) => {
  const campaigns = await campaignService.getAllCampaigns();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Campaigns Retrieved Successfully",
    data: campaigns,
  });
});

const getCampaignById = catchAsync(async (req: Request, res: Response) => {
  const campaign = await campaignService.getCampaignById(
    req.params.id as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Campaign Retrieved Successfully",
    data: campaign,
  });
});

const updateCampaign = catchAsync(async (req: Request, res: Response) => {
  const campaign = await campaignService.updateCampaign(
    req.params.id as string,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Campaign Updated Successfully",
    data: campaign,
  });
});

const deleteCampaign = catchAsync(async (req: Request, res: Response) => {
  await campaignService.deleteCampaign(req.params.id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Campaign Deleted Successfully",
    data: null,
  });
});

export const campaignController = {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};
