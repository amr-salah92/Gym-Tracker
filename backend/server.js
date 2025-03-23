const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const workoutRoutes = require('./routes/workoutRoutes');
app.use('/api/workouts', workoutRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});