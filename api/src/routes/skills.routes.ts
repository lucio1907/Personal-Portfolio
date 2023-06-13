import { Router } from "express";
import { getItems, postItem } from "../controllers/skills.controller";
import requireDeveloperAuth from "../middlewares/authorization.middleware";

const router = Router();

router.get('/', getItems);

// Hidden route only for me
router.post('/', requireDeveloperAuth, postItem);

export default router;