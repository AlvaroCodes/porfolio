import express from "express";

const router = express.Router();

let jsonDataProject = require('../json/project.json');

router.get('/', (req, res, next) => {
   

    res
        .status(200)
        .json(jsonDataProject)
})

export default router