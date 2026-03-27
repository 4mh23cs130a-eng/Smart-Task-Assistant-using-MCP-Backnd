function scheduleTask(task) {
    if (!task.time) return;
  
    console.log(`⏳ Task scheduled for: ${task.time}`);
  
    const delay = 5000; // demo delay
  
    setTimeout(() => {
      console.log(`⏰ Reminder: ${task.task}`);
    }, delay);
  }
  
  module.exports = { scheduleTask };