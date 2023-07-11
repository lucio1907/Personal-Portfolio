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
const experiencies_model_1 = __importDefault(require("../models/experiencies.model"));
class ExperienciesServices {
    constructor() {
        this.collection = experiencies_model_1.default;
    }
    getExperiencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllItems = yield this.collection.find().select('-createdAt -updatedAt');
            if (getAllItems.length === 0)
                return 'NO_EXPERIENCIES';
            return getAllItems;
        });
    }
    postExperiencies(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const postExperiencie = yield this.collection.create(body);
            return postExperiencie;
        });
    }
}
const experiencieServices = new ExperienciesServices();
exports.default = experiencieServices;
