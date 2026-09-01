import bcrypt from "bcryptjs";

import { envVars } from "../../config/env";
import { generateToken } from "../../utils/jwt";
import Admin from "./auth.model";

const createAdmin = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const { name, email, password } = payload;

  // Check if admin already exists
  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    throw new Error("Admin with this email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin
  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
    role: "ADMIN",
    isActive: true,
  });
  const { password: _, ...adminResponse } = admin.toObject();

  return adminResponse;
};

// Login admin
const loginAdmin = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  const admin = await Admin.findOne({ email }).select("+password");

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  if (!admin.isActive) {
    throw new Error("Your account is inactive");
  }

  const isPasswordMatched = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }

  const jwtPayload = {
    id: admin._id.toString(),
    email: admin.email,
    role: admin.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    envVars.JWT_ACCESS_SECRET as string,
    envVars.JWT_ACCESS_EXPIRES as string,
  );

  const { password: _, ...adminResponse } = admin.toObject();

  return {
    admin: adminResponse,
    accessToken,
  };
};

const getMe = async (adminId: string) => {
  const admin = await Admin.findById(adminId);

  if (!admin) {
    throw new Error("Admin not found");
  }
  return admin;
};

export const authService = {
  createAdmin,
  loginAdmin,
  getMe,
};
