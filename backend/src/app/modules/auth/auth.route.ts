import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { AdminController } from "./auth.controller";

const router = Router();

router.post("/create-admin", AdminController.createAdmin);
router.post("/login", AdminController.loginAdmin);
router.get("/me", checkAuth("ADMIN"), AdminController.getMe);
router.post("/logout", AdminController.logoutAdmin);

export const AuthRoutes = router;
