import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoDB } from "./Database/config.js";
import router from "./Routes/authRouters.js";
import eventRouter from "./Routes/eventRouters.js";

dotenv.config();

// Middleware
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://wedding-app-gdevents.netlify.app", // Removed trailing slash
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// DB connectivity
MongoDB();

// Access the .env
const port = process.env.PORT || 4000;
const message = process.env.MESSAGE || "Hello, World!";

// Default routes
app.get("/", (req, res) => {
  res.status(200).send(message);
});

// API Routes
app.use("/api/auth", router);
app.use("/api/event", eventRouter);

// Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
