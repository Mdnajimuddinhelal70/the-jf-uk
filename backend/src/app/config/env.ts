import dotenv from "dotenv";
dotenv.config();

interface EnvConfig {
  PORT: number;
  DB_URL: string;
}

const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables = ["PORT", "DB_URL"];

  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is not defined`);
    }
  });

  return {
    PORT: parseInt(process.env.PORT as string, 10),
    DB_URL: process.env.DB_URL as string,
  };
};

export const envVars = loadEnvVariables();
