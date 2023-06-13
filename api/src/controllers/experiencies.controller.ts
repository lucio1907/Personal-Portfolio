import { Request, Response } from "express";
import experiencieServices from "../services/experiencies.service";

const getItems = async (req: Request, res: Response) => {
    try {
        const getAllItems = await experiencieServices.getExperiencies();
        if (getAllItems === "NO_EXPERIENCIES") return res.status(400).json({ message: 'No experiencies added' });
        res.json(getAllItems);
    } catch (error: any) {
        res.status(500).json({ error: error._message });
    }
}

const postItems = async (req: Request, res: Response) => {
    try {
        const postItem = await experiencieServices.postExperiencies(req.body);
        return res.status(201).json({ newExperiencie: postItem });
    } catch (error: any) {
        res.status(500).json({ error: error._message });
    }
}

export { getItems, postItems };