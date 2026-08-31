import { Server } from "http";
import mongoose from "mongoose";

import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(envVars.DB_URL);

    console.log("✅ Connected to MongoDB");

    // Start Express server
    server = app.listen(envVars.PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${envVars.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
