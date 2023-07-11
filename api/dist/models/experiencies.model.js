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
    companyLogo: {
        type: String,
        trim: true,
    },
    workPosition: {
        type: String,
        trim: true,
        required: true,
    },
    workDescriptionES: {
        type: String,
        trim: true,
        required: true,
    },
    workDescriptionEN: {
        type: String,
        trim: true,
        required: true
    },
    monthsQuantity: {
        type: Number,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const experiencieCollection = mongoose_1.default.model("Experiencies", schema);
exports.default = experiencieCollection;
