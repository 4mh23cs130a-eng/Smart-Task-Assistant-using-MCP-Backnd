const { parseInput } = require('../mcp/parser');
const { createTask, getTasks } = require('../mcp/taskEngine');
const { scheduleTask } = require('../mcp/scheduler');

function processTask(req, res) {
  const { text } = req.body;

  const parsed = parseInput(text);

  if (parsed.type === "REMINDER" || parsed.type === "ADD_TASK") {
    const task = createTask(parsed);

    // Schedule reminder
    scheduleTask(task);

    return res.json({
      message: "Task created successfully",
      task
    });
  }

  res.json({
    message: "Unknown command"
  });
}

function fetchTasks(req, res) {
  const tasks = getTasks();

  res.json({
    tasks
  });
}

module.exports = { processTask, fetchTasks };