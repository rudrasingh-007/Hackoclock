const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Ensure these are function imports

router.post('/register', register); // register should be a function
router.post('/login', login);       // login should be a function

module.exports = router; // export the router
