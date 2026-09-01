import { Document } from "mongoose";

export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  role: "ADMIN";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
