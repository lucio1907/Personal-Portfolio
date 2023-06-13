import { Router } from "express";
import { getItems, postItems } from "../controllers/experiencies.controller";
import requireDeveloperAuth from "../middlewares/authorization.middleware";

const router = Router();

router.get('/', getItems);

router.post('/', requireDeveloperAuth, postItems);

export default router;