const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Ensure this is imported correctly
const footprintRoutes = require('./routes/footprintRoutes'); // Ensure this is imported correctly

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);  // Ensure authRoutes is a valid function here
app.use('/api/footprint', footprintRoutes);  // Ensure footprintRoutes is a valid function here

module.exports = app;
