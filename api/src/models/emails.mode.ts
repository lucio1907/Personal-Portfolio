import mongoose from "mongoose";
import Emails from "../interfaces/emails.interface";

const schema = new mongoose.Schema<Emails>(
  {
    from: {
      type: String,
      trim: true,
      required: true,
    },
    to: {
      type: String,
      trim: true,
      required: true,
    },
    subject: {
      type: String,
      trim: true,
      required: true,
      min: 4,
    },
    message: {
      type: String,
      trim: true,
      required: true,
      min: 4,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const emailCollection = mongoose.model("Emails", schema);
export default emailCollection;
