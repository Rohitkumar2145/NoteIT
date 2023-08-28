const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = new express();

const taskRouter = require("./routes");

app.use(express.json());
app.use(cors());
app.use("/", taskRouter);

mongoose
  .connect("mongodb://0.0.0.0:27017/ToDoApp", {
    useNewUrlParser: true,
  })
  .then(console.log("db connection successful"));

app.listen(5000, () => {
  console.log("app running");
});

module.exports = app;
