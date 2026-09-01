import dotenv from "dotenv";
dotenv.config();

interface EnvConfig {
  PORT: number;
  DB_URL: string;
  JWT_ACCESS_SECRET: string | number;
  JWT_ACCESS_EXPIRES: string | number;
}

const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables = [
    "PORT",
    "DB_URL",
    "JWT_ACCESS_SECRET",
    "JWT_ACCESS_EXPIRES",
  ];

  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is not defined`);
    }
  });

  return {
    PORT: parseInt(process.env.PORT as string, 10),
    DB_URL: process.env.DB_URL as string,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
  };
};

export const envVars = loadEnvVariables();
