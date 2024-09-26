const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./utils/db");
const router = require("./routes/index.js");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
  });

// Routes
app.use("/api/v1", router);

// Home route
app.get("/", (req, res) => {
  res.send("Contact Us Backend Running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
