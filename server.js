const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send("Smart Task MCP Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});