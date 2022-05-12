const express = require('express');
const ProjectController = require('../controllers/create_project');

const api = express.Router();

api.post("/project", ProjectController.createProject);

module.exports = api;