function parseInput(text) {
    text = text.toLowerCase();
  
    let type = "UNKNOWN";
    let task = null;
    let time = null;
  
    if (text.includes("remind")) {
      type = "REMINDER";
  
      // Extract task
      task = text.replace("remind me to", "").trim();
  
      // Extract time
      const timeMatch = text.match(/\d+\s?(am|pm)?/);
      if (timeMatch) {
        time = timeMatch[0];
      }
    }
  
    return {
      type,
      task,
      time,
      originalText: text
    };
  }
  
  module.exports = { parseInput };