const express = require("express");
const router = express.Router();
const modelTask = require("../Model/taskSchema");

const getAllTask = async (req, res) => {
  try {
    const tasks = await modelTask.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const postTasks = async (req, res) => {
  try {
    const task = await modelTask.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    const { errors } = error;
    res.status(500).json(errors.name.properties);
  }
};
const getOne = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await modelTask.findOne({ _id: taskID });
    if (!task) {
      console.log(`No task with id : ${taskID}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateOne = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await modelTask.findOneAndUpdate({ _id: taskID }, req.body);
    if (!task) {
      console.log(`No task with id : ${taskID}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteOne = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await modelTask.findOneAndDelete({ _id: taskID });
    if (!task) {
      console.log(`No task with id : ${taskID}`);
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTask, getOne, postTasks, updateOne, deleteOne };
