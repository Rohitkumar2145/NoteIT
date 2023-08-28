const Task = require("./model");
const app = require("./server");
const express = require("express");

const taskRouter = express.Router();

taskRouter.get("/api/v1/tasks", async (req, res) => {
  try {
    const data = await Task.find({});
    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});
taskRouter.get("/api/v1/tasks/:id", async (req, res) => {
  try {
    const data = await Task.find({ _id: req.params.id });
    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});

taskRouter.post("/api/v1/tasks", async (req, res) => {
  try {
    const data = await Task.create(req.body);
    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});

taskRouter.post("/api/v1/tasks/many", async (req, res) => {
  try {
    const data = await Task.insertMany(req.body);
    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});

taskRouter.delete("/api/v1/tasks/:id", async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete(req.params.id);

    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});

taskRouter.delete("/api/v1/tasks", async (req, res) => {
  try {
    const data = await Task.deleteMany({});

    res.send({
      status: "success",
      data,
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
});

taskRouter.patch("/api/v1/tasks/:id", async (req, res) => {
  try {
    const data = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useValidators: true,
    });
    res.status(201).send({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
});

module.exports = taskRouter;
