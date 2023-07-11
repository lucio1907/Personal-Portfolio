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
const emails_mode_1 = __importDefault(require("../models/emails.mode"));
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
class EmailsServices {
    constructor() {
        this.collection = emails_mode_1.default;
    }
    createEmail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { from, to, subject, message } = body;
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD
                }
            });
            const mailOptions = {
                from,
                to,
                subject,
                text: `${message}\n From: ${from}`
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err)
                    return "ERROR_TO_SEND_EMAIL";
                else
                    console.log(info.response);
            });
            if ([from, to, subject, message].includes(""))
                return "ERROR_TO_SEND_EMAIL";
            else
                return "EMAIL_SENDED";
        });
    }
    saveEmail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmail = yield this.collection.create(body);
            return newEmail;
        });
    }
}
const emailsServices = new EmailsServices();
exports.default = emailsServices;
