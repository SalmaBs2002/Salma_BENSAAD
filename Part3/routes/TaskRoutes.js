const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController')

app.get('/tasks/:category',taskController.getTaskByCategory);
app.get('/tasks/:dueDate',taskController.getTaskByDueDate);
router.post('/tasks', taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);

module.exports = router;