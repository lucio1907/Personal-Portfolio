import mongoose from "mongoose";
import Experiencies from "../interfaces/experiencie.interface";

const schema = new mongoose.Schema<Experiencies>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    companyLogo: {
      type: String,
      trim: true,
    },
    workPosition: {
      type: String,
      trim: true,
      required: true,
    },
    workDescriptionES: {
      type: String,
      trim: true,
      required: true,
    },
    workDescriptionEN: {
      type: String,
      trim: true,
      required: true
    },
    monthsQuantity: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const experiencieCollection = mongoose.model("Experiencies", schema);

export default experiencieCollection;
