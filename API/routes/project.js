const express = require('express');
const ProjectController = require('../controllers/create_project');
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/project", [md_auth.ensureAuth], ProjectController.createProject);
api.get("/project",ProjectController.getProject);
api.get("/project/:id", ProjectController.getOneProject);
api.put("/project/:id", [md_auth.ensureAuth], ProjectController.updateProject);
api.delete("/project/:id", [md_auth.ensureAuth], ProjectController.deleteProject);

module.exports = api;