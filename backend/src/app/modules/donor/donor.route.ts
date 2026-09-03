import { Router } from "express";

import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { donorController } from "./donor.controller";
import {
  createDonorValidation,
  updateDonorValidation,
} from "./donor.validation";

const router = Router();

// Public Routes
router.get("/", donorController.getAllDonors);

router.get("/:id", donorController.getDonorById);

// Admin Routes
router.post(
  "/",
  checkAuth("ADMIN"),
  validateRequest(createDonorValidation),
  donorController.createDonor,
);

router.patch(
  "/:id",
  checkAuth("ADMIN"),
  validateRequest(updateDonorValidation),
  donorController.updateDonor,
);

router.delete("/:id", checkAuth("ADMIN"), donorController.deleteDonor);

export const donorRoutes = router;
