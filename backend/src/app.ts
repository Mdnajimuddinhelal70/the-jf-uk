import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { router } from "./app/routes";

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

app.use(cookieParser());
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "The Jannath Foundation UK API is running.",
  });
});

export default app;
