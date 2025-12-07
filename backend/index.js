import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatbotRoutes from "./routes/chatbot.routes.js";
import cros from 'cros';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use (cros());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/bot/v1", chatbotRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Chatbot API is running");
});

// Start server
app.listen(port, () => console.log(`Server running on ${port}`));
