const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = new express();

const taskRouter = require("./routes");

app.use(express.json());
app.use(cors());
app.use("/", taskRouter);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("DB connected"));

app.listen(5000, () => {
  console.log("app running");
});

module.exports = app;
