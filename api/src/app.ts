import express from "express";
import cors from "cors";
import routerSkills from "./routes/skills.routes";
import routerExperiencies from "./routes/experiencies.routes";
import getDBConnection from "./config/dbconnection";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

getDBConnection();

app.use('/skills', routerSkills);
app.use('/experiencie', routerExperiencies);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));