import { Router } from "express";

import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { projectController } from "./project.controller";
import {
  createProjectValidation,
  updateProjectValidation,
} from "./project.validation";

const router = Router();

// Public Routes
router.get("/", projectController.getAllProjects);

router.get("/:id", projectController.getProjectById);

// Admin Routes
router.post(
  "/create-project",
  checkAuth("ADMIN"),
  validateRequest(createProjectValidation),
  projectController.createProject,
);

router.patch(
  "/:id",
  checkAuth("ADMIN"),
  validateRequest(updateProjectValidation),
  projectController.updateProject,
);

router.delete("/:id", checkAuth("ADMIN"), projectController.deleteProject);

export const projectRoutes = router;
