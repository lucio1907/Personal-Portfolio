"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postItem = exports.getItems = void 0;
const skills_service_1 = __importDefault(require("../services/skills.service"));
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getSkills = yield skills_service_1.default.getSkills();
        res.json(getSkills);
    }
    catch (error) {
        res.status(500).json({ error: error._message });
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = req.body;
        const postSkill = yield skills_service_1.default.postSkills(skill);
        if (postSkill === "EMPTY_FIELDS")
            return res.status(400).json({ message: 'Empty fields' });
        res.status(201).json({ newSkill: postSkill });
    }
    catch (error) {
        res.status(500).json({ error: error._message });
    }
});
exports.postItem = postItem;
