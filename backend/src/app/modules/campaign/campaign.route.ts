import { Router } from "express";

import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { campaignController } from "./campaign.controller";
import {
  createCampaignValidation,
  updateCampaignValidation,
} from "./campaign.validation";

const router = Router();

// Public Routes
router.get("/", campaignController.getAllCampaigns);
router.get("/:id", campaignController.getCampaignById);

// Admin Routes
router.post(
  "/",
  checkAuth("ADMIN"),
  validateRequest(createCampaignValidation),
  campaignController.createCampaign,
);

router.patch(
  "/:id",
  checkAuth("ADMIN"),
  validateRequest(updateCampaignValidation),
  campaignController.updateCampaign,
);

router.delete("/:id", checkAuth("ADMIN"), campaignController.deleteCampaign);

export const CampaignRoutes = router;
