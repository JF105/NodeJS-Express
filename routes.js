const express = require("express");
const router = express.Router();
const tasksData = require("./tasksData");

// Ruta para obtener la lista de tareas en formato JSON
router.get("/tasks", (req, res) => {
  res.json(tasksData);
});

module.exports = router;
