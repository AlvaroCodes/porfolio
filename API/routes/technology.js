const express = require('express');
const TechnologyController = require('../controllers/create_technology');

const api = express.Router();

api.post("/technology", TechnologyController.createTechnology);
api.get("/technology", TechnologyController.getTechnology);
api.get("/technology/:id", TechnologyController.getOneTechnology);
api.put("/technology/:id", TechnologyController.updateTechnology);
api.delete("/technology/:id", TechnologyController.deleteTechnology);

module.exports = api;