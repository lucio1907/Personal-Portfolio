"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const skills_routes_1 = __importDefault(require("./routes/skills.routes"));
const experiencies_routes_1 = __importDefault(require("./routes/experiencies.routes"));
const emails_routes_1 = __importDefault(require("./routes/emails.routes"));
const dbconnection_1 = __importDefault(require("./config/dbconnection"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
(0, dbconnection_1.default)();
app.get("/", (req, res) => {
    res.redirect('/skills');
});
app.use('/skills', skills_routes_1.default);
app.use('/experiencie', experiencies_routes_1.default);
app.use('/sendEmail', emails_routes_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
