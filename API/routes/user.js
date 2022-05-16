// user.js
// routes (creacion de la ruta, tipo post, ...)

const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/register", UserController.register);
api.post("/login", UserController.login);

module.exports = api;