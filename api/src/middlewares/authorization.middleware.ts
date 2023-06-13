import { NextFunction, Request, Response } from "express";
import "dotenv/config";

const requireDeveloperAuth = (req: Request, res: Response, next: NextFunction) => {
    const developerID = req.headers['developer-id'];

    if (developerID === process.env.DEVELOPER_ID) return next()
    else res.status(401).json({ message: 'Authorization denied' });
}

export default requireDeveloperAuth;