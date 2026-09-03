import { Document } from "mongoose";

export interface IDonor extends Document {
  name: string;
  image: string;

  shortBio?: string;

  location?: string;
  country?: string;

  donorType: "LIFETIME" | "REGULAR";

  isFeatured: boolean;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
