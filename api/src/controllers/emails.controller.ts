import { Request, Response } from "express";
import emailsServices from "../services/emails.service";

const sendEmail = async (req: Request, res: Response) => {
    try {
        const email = await emailsServices.createEmail(req.body);
        
        if (email === "EMAIL_SENDED") {
            await emailsServices.saveEmail(req.body);
            return res.json({ message: "Email succesfully sended", status: 200 });
        }

        if (email === "ERROR_TO_SEND_EMAIL") return res.status(500).json({ message: "Error to send your email", status: 500 });
    } catch (error: any) {
        res.status(500).json({ error: error._message });
    }
}

export { sendEmail };