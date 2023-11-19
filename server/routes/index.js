const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

const Market = require('../models/market');
// const mongoose = require('mongoose');

router.get("/", homeController.home);

module.exports = router;