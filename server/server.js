const express = require("express");
const connectDB = require("./db/connect");

require("dotenv").config();

const app = express();

// Connect to Database
connectDB();

// Routes
app.use("/api/v1/videos", require("./routes/api/videos"));

const PORT = process.env.PORT || 2424;

app.listen(PORT, () =>
  console.log(`Server started on https://localhost:${PORT}`)
);
