const express = require("express");
const app = express();
const cors = require('cors'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Cargar rutas
const technology_router = require('./routes/technology');
const project_router = require('./routes/project');
const user_router = require('./routes/user');

// Ruta base
app.use('/api', technology_router);
app.use('/api', project_router);
app.use('/api', user_router);
module.exports = app;