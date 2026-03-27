const fs = require('fs');

const FILE = './tasks.json';

// Load existing tasks safely
let tasks = [];

if (fs.existsSync(FILE)) {
  try {
    const data = fs.readFileSync(FILE, 'utf-8');
    tasks = data ? JSON.parse(data) : [];
  } catch (err) {
    console.log("Error reading file, resetting...");
    tasks = [];
  }
}

// Save tasks to file
function saveTasks() {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

// Create new task
function createTask(data) {
  const task = {
    id: tasks.length + 1,
    task: data.task,
    time: data.time
  };

  tasks.push(task);
  saveTasks();

  return task;
}

// Get all tasks
function getTasks() {
  return tasks;
}

module.exports = { createTask, getTasks };