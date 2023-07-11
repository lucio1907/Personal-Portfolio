"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    from: {
        type: String,
        trim: true,
        required: true,
    },
    to: {
        type: String,
        trim: true,
        required: true,
    },
    subject: {
        type: String,
        trim: true,
        required: true,
        min: 4,
    },
    message: {
        type: String,
        trim: true,
        required: true,
        min: 4,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const emailCollection = mongoose_1.default.model("Emails", schema);
exports.default = emailCollection;
