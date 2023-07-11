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
exports.sendEmail = void 0;
const emails_service_1 = __importDefault(require("../services/emails.service"));
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = yield emails_service_1.default.createEmail(req.body);
        if (email === "EMAIL_SENDED") {
            yield emails_service_1.default.saveEmail(req.body);
            return res.json({ message: "Email succesfully sended", status: 200 });
        }
        if (email === "ERROR_TO_SEND_EMAIL")
            return res.status(500).json({ message: "Error to send your email", status: 500 });
    }
    catch (error) {
        res.status(500).json({ error: error._message });
    }
});
exports.sendEmail = sendEmail;
