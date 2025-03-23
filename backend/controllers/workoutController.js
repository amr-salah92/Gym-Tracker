const Workout = require('../models/Workout');

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a workout
exports.updateWorkout = async (req, res) => {
  try {
    const updatedWorkout = await Workout.update(req.params.id, req.body);
    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a workout
exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.delete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};