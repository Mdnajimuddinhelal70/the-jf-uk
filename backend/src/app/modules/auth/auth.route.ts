import { Router } from "express";
import { AdminController } from "./auth.controller";

const router = Router();

router.post("/create-admin", AdminController.createAdmin);
router.post("/login", AdminController.loginAdmin);

export const AuthRoutes = router;
