const express = require("express");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 2424;

app.listen(PORT, () =>
  console.log(`Server started on https://localhost:${PORT}`)
);
