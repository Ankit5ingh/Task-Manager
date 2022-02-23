const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task is Empty"],
    trim: true,
    maxlength: [40, "Task exceeded 40 characters limit"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("modelTask", TaskSchema);
