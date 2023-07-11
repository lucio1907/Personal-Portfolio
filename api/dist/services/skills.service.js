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
const skills_model_1 = __importDefault(require("../models/skills.model"));
class SkillsService {
    constructor() {
        this.collection = skills_model_1.default;
    }
    getSkills() {
        return __awaiter(this, void 0, void 0, function* () {
            const skills = yield this.collection.find().sort({ "order": 1 }).select('-createdAt -updatedAt');
            return skills;
        });
    }
    postSkills(skill) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, paragraphES, paragraphEN, imgLink } = skill;
            const postSkill = yield this.collection.create(skill);
            if ([title, paragraphES, paragraphEN, imgLink].includes(""))
                return "EMPTY_FIELDS";
            return postSkill;
        });
    }
}
const skillsService = new SkillsService();
exports.default = skillsService;
