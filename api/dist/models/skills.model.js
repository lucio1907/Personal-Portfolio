"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    paragraphES: {
        type: String,
        trim: true,
        required: true,
    },
    paragraphEN: {
        type: String,
        trim: true,
        required: true,
    },
    imgLink: {
        type: String,
        trim: true,
    },
    order: {
        type: Number,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
const SkillsCollection = mongoose_1.default.model('Skills', schema);
exports.default = SkillsCollection;
