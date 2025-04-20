const express = require('express');
const router = express.Router();
const { getFootprint } = require('../controllers/footprintController'); // Ensure this is a function

router.post('/get', getFootprint);   // getFootprint should be a function

module.exports = router;
