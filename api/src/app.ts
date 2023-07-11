import express from "express";
import cors from "cors";
import routerSkills from "./routes/skills.routes";
import routerExperiencies from "./routes/experiencies.routes";
import routerEmails from "./routes/emails.routes";
import getDBConnection from "./config/dbconnection";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

getDBConnection();

app.get("/", (req, res) => {
    res.redirect('/skills');
})

app.use('/skills', routerSkills);
app.use('/experiences', routerExperiencies);
app.use('/sendEmail', routerEmails);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));