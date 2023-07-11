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
exports.postItems = exports.getItems = void 0;
const experiencies_service_1 = __importDefault(require("../services/experiencies.service"));
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllItems = yield experiencies_service_1.default.getExperiencies();
        if (getAllItems === "NO_EXPERIENCIES")
            return res.status(400).json({ message: 'No experiencies added' });
        res.json(getAllItems);
    }
    catch (error) {
        res.status(500).json({ error: error._message });
    }
});
exports.getItems = getItems;
const postItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postItem = yield experiencies_service_1.default.postExperiencies(req.body);
        return res.status(201).json({ newExperiencie: postItem });
    }
    catch (error) {
        res.status(500).json({ error: error._message });
    }
});
exports.postItems = postItems;
