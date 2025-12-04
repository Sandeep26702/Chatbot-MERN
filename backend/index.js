//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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



// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});