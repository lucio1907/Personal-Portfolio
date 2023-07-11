"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skills_controller_1 = require("../controllers/skills.controller");
const authorization_middleware_1 = __importDefault(require("../middlewares/authorization.middleware"));
const router = (0, express_1.Router)();
router.get('/', skills_controller_1.getItems);
// Hidden route only for me
router.post('/', authorization_middleware_1.default, skills_controller_1.postItem);
exports.default = router;
