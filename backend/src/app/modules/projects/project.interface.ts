import { Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;

  location?: string;
  startDate: Date;
  endDate?: Date;

  status: "UPCOMING" | "ONGOING" | "COMPLETED";

  isFeatured: boolean;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
