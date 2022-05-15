const express = require('express');
const ProjectController = require('../controllers/create_project');

const api = express.Router();

api.post("/project", ProjectController.createProject);
api.get("/project", ProjectController.getProject);
api.get("/project/:id", ProjectController.getOneProject);
api.put("/project/:id", ProjectController.updateProject);
api.delete("/project/:id", ProjectController.deleteProject);

module.exports = api;