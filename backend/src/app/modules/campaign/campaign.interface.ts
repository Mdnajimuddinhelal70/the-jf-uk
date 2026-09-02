import { Document } from "mongoose";

export interface ICampaign extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;

  targetAmount: number;
  raisedAmount: number;
  currency: "GBP";

  startDate: Date;
  endDate: Date;

  status: "UPCOMING" | "ONGOING" | "COMPLETED";

  isFeatured: boolean;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
