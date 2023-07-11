"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorization_middleware_1 = __importDefault(require("../middlewares/authorization.middleware"));
const emails_controller_1 = require("../controllers/emails.controller");
const router = (0, express_1.Router)();
router.post("/", authorization_middleware_1.default, emails_controller_1.sendEmail);
exports.default = router;
