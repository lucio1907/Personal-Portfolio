import { Model } from "mongoose";
import Emails from "../interfaces/emails.interface";
import emailCollection from "../models/emails.mode";
import nodemailer from "nodemailer";
import "dotenv/config";

class EmailsServices {
    collection: Model<Emails>
    constructor() {
        this.collection = emailCollection;
    }

    async createEmail(body: Emails): Promise<string> {     
        const { from, to, subject, message } = body;   
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        })

        const mailOptions = {
            from,
            to,
            subject,
            text: `${message}\n From: ${from}`
        }

        transporter.sendMail(mailOptions, (err, info) => {            
            if (err) return "ERROR_TO_SEND_EMAIL";
            else console.log(info.response);
        })
        
        if ([from, to, subject, message].includes("")) return "ERROR_TO_SEND_EMAIL"
        else return "EMAIL_SENDED"
    }

    async saveEmail(body: Emails) {
        const newEmail = await this.collection.create(body);
        return newEmail;
    }
}

const emailsServices = new EmailsServices();
export default emailsServices;