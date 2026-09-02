import { Schema, model } from "mongoose";
import { ICampaign } from "./campaign.interface";

const campaignSchema = new Schema<ICampaign>(
  {
    title: {
      type: String,
      required: [true, "Campaign title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "Campaign slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Campaign description is required"],
      trim: true,
    },

    image: {
      type: String,
      required: [true, "Campaign image is required"],
      trim: true,
    },

    targetAmount: {
      type: Number,
      required: [true, "Target amount is required"],
      min: [0, "Target amount cannot be negative"],
    },

    raisedAmount: {
      type: Number,
      default: 0,
      min: [0, "Raised amount cannot be negative"],
    },

    currency: {
      type: String,
      enum: ["GBP"],
      default: "GBP",
    },

    startDate: {
      type: Date,
      required: [true, "Campaign start date is required"],
    },

    endDate: {
      type: Date,
      required: [true, "Campaign end date is required"],
    },

    status: {
      type: String,
      enum: ["UPCOMING", "ONGOING", "COMPLETED"],
      default: "UPCOMING",
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

const Campaign = model<ICampaign>("Campaign", campaignSchema);

export default Campaign;
