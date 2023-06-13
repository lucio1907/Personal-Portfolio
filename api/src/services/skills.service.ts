import { Model } from "mongoose";
import SkillsCollection from "../models/skills.model";
import Skills from "../interfaces/skills.interface";

class SkillsService {
    collection: Model<Skills>
    constructor() {
        this.collection = SkillsCollection
    }

    async getSkills() {
        const skills = await this.collection.find().select('-createdAt -updatedAt');
        return skills;
    }

    async postSkills(skill: Skills) {
        const { title, paragraphES, paragraphEN, imgLink } = skill;
        const postSkill = await this.collection.create(skill);

        if ([title, paragraphES, paragraphEN, imgLink].includes("")) return "EMPTY_FIELDS"

        return postSkill;
    }
}

const skillsService = new SkillsService();
export default skillsService;