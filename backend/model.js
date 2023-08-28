const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title for task is required"],
  },
  description: {
    type: String,
    // required: [true, "description for task is required"],
  },
  status: {
    type: String,
    enum: ["todo", "done", "doing"],
    default: "todo",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
