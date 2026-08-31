import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "The Jannath Foundation UK API is running.",
  });
});

export default app;
