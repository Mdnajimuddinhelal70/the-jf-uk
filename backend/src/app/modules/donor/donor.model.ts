import { Schema, model } from "mongoose";
import { IDonor } from "./donor.interface";

const donorSchema = new Schema<IDonor>(
  {
    name: {
      type: String,
      required: [true, "Donor name is required"],
      trim: true,
    },

    image: {
      type: String,
      required: [true, "Donor image is required"],
      trim: true,
    },

    shortBio: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    country: {
      type: String,
      trim: true,
    },

    donorType: {
      type: String,
      enum: ["LIFETIME", "REGULAR"],
      default: "LIFETIME",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Donor = model<IDonor>("Donor", donorSchema);

export default Donor;
