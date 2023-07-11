"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experiencies_controller_1 = require("../controllers/experiencies.controller");
const authorization_middleware_1 = __importDefault(require("../middlewares/authorization.middleware"));
const router = (0, express_1.Router)();
router.get('/', experiencies_controller_1.getItems);
router.post('/', authorization_middleware_1.default, experiencies_controller_1.postItems);
exports.default = router;
