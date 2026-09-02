import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CampaignRoutes } from "../modules/campaign/campaign.route";
import { projectRoutes } from "../modules/projects/project.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/campaign",
    route: CampaignRoutes,
  },
  {
    path: "/projects",
    route: projectRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
