const express = require('express');
const TechnologyController = require('../controllers/create_technology');
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/technology", [md_auth.ensureAuth], TechnologyController.createTechnology);
api.get("/technology", TechnologyController.getTechnology);
api.get("/technology/:id", TechnologyController.getOneTechnology);
api.put("/technology/:id", [md_auth.ensureAuth], TechnologyController.updateTechnology);
api.delete("/technology/:id", [md_auth.ensureAuth], TechnologyController.deleteTechnology);

module.exports = api;