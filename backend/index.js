//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import chatbotRoutes from "./routes/chatbot.routes.js";


const app = express();
dotenv.config()

const port = process.PORT ||3000;

//Database connection code
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

   //defining routes
   app.use("/bot/v1/",chatbotRoutes)



// Start the server
app.listen(8000, () => console.log("Server running on 8000"));

