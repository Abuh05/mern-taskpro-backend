const Task = require("../model/taskModel");

//Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//Get/Read Tasks
const getTasks = async (req, res) => {
  try {
    const task = await Task.find(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//Get/Read A signle Task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with id ${id}`);
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//Get/Read A signle Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task with id ${id}`);
    }
    res.status(200).send("Task deleted");
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id:id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!true) {
      return res.status(404).json(`No task with id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
