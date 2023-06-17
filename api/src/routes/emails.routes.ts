import { Router } from "express";
import requireDeveloperAuth from "../middlewares/authorization.middleware";
import { sendEmail } from "../controllers/emails.controller";

const router = Router();

router.post("/", requireDeveloperAuth, sendEmail);

export default router;