import express from "express";
import { createTechnology } from "../controllers/techo";

const router = express.Router();

let jsonDataTechnology = require('../json/technology.json');

router.get('/', (req, res, next) => {
    res
        .status(200)
        .json(jsonDataTechnology)
})

router.post('/newTechnology', createTechnology);


export default router