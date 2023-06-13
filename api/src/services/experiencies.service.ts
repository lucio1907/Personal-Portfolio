import { Model } from "mongoose";
import Experiencies from "../interfaces/experiencie.interface";
import experiencieCollection from "../models/experiencies.model";

class ExperienciesServices {
    collection: Model<Experiencies>
    constructor() {
        this.collection = experiencieCollection;
    }

    async getExperiencies() {
        const getAllItems = await this.collection.find().select('-createdAt -updatedAt');
        if (getAllItems.length === 0) return 'NO_EXPERIENCIES';
        return getAllItems;
    }

    async postExperiencies(body: Experiencies) {
        const postExperiencie = await this.collection.create(body);
        return postExperiencie;
    }
}

const experiencieServices = new ExperienciesServices();
export default experiencieServices;