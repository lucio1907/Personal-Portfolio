import mongoose from "mongoose";
import Skills from "../interfaces/skills.interface";

const schema = new mongoose.Schema<Skills>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    paragraphES: {
      type: String,
      trim: true,
      required: true,
    },
    paragraphEN: {
      type: String,
      trim: true,
      required: true,
    },
    imgLink: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SkillsCollection = mongoose.model('Skills', schema);

export default SkillsCollection;