const express = require('express');
const TechnologyController = require('../controllers/create_technology');

const api = express.Router();

api.post("/technology", TechnologyController.createTechnology);

module.exports = api;