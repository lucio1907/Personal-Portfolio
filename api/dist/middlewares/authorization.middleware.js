"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const requireDeveloperAuth = (req, res, next) => {
    const developerID = req.headers['developer-id'];
    if (developerID === process.env.DEVELOPER_ID)
        return next();
    else
        res.status(401).json({ message: 'Authorization denied' });
};
exports.default = requireDeveloperAuth;
