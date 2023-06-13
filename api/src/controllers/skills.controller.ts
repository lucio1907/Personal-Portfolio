import { Request, Response } from "express";
import skillsService from "../services/skills.service";

const getItems = async (req: Request, res: Response) => {
    try {
        const getSkills = await skillsService.getSkills();
        res.json(getSkills);
    } catch (error: any) {
        res.status(500).json({ error: error._message });
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const skill = req.body;
        const postSkill = await skillsService.postSkills(skill);

        if (postSkill === "EMPTY_FIELDS") return res.status(400).json({ message: 'Empty fields' });

        res.status(201).json({ newSkill: postSkill });
    } catch (error: any) {
        res.status(500).json({ error: error._message });
    }
}

export { getItems, postItem };