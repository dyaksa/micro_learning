const express = require("express");
const router = express.Router();
const MicroLearningController = require("../controllers/MicroLearningController");

router.post("/create", MicroLearningController.create);

module.exports = router