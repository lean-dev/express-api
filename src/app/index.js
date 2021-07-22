const express = require('express');

// Configuration
require('./env');

const app = express();

// Middlewares

// Auth
app.use('/api', (req, res, next) => {
  next();
});

// Routes
const actorRoutes = require('./api/actor');

app.use('/api/actor', actorRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Express Web API</h1>');
});

module.exports = app;
