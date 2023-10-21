const express = require('express');
const wineController = require('../controllers/WineController');
const router = express.Router();

router.get('/wines', wineController.getAllWines);

module.exports = router;
