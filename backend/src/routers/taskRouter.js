const { Router } = require('express');
const taskRouter = Router();
const {
  createTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask,
} = require('../controller/task.controller');

taskRouter.route('/')
  .get(getTasks)
  .post(createTask);

taskRouter.route('/:id')
  .get(getTask)
  .delete(deleteTask)
  .put(updateTask);

module.exports = taskRouter;
