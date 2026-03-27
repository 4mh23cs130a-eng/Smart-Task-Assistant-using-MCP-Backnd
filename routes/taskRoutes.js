const express = require('express');
const router = express.Router();

const { processTask, fetchTasks } = require('../controllers/taskController');

router.post('/process', processTask);
router.get('/tasks', fetchTasks);

module.exports = router;