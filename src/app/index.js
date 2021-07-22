const express = require('express');
const passport = require('passport');

// Configuration
require('./env');

const app = express();

// Middlewares
app.use(express.json());
app.use(passport.initialize());

// Auth
const {
  authRoutes,
  isAuthenticated,
  isAuthenticatedAsAdmin,
} = require('./auth');

app.use(authRoutes);

// app.use('/api', passport.authenticate(isAuthenticated, { session: false }));
app.post(
  '/api/*',
  passport.authenticate(isAuthenticatedAsAdmin, { session: false })
);

// Routes
const actorRoutes = require('./api/actor');
const filmRoutes = require('./api/film');

app.use('/api/actor', actorRoutes);
app.use('/api/film', filmRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Express Web API</h1>');
});

module.exports = app;
