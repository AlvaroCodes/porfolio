import express from "express";

const router = express.Router();

let jsonDataTechnology = require('../json/technology.json');

router.get('/', (req, res, next) => {
    res
        .status(200)
        .json(jsonDataTechnology)
})

export default router