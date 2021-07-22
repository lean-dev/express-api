const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategey, ExtractJwt } = require('passport-jwt');

// Konfiguration der local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    if (!username || password !== 's3cret') {
      done(null, false);
    } else {
      done(null, {
        account: username,
        role: username === 'chef' ? 'ADMIN' : 'USER',
      });
    }
  })
);

const isAuthenticated = new JwtStrategey(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AUTH_SECRET,
  },
  (jwtPayload, done) => {
    const { _id: account, role } = jwtPayload.user;
    console.log('Strategie 1');
    done(null, { account, role });
  }
);
passport.use(isAuthenticated);

const isAuthenticatedAsAdmin = new JwtStrategey(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.AUTH_SECRET,
  },
  (jwtPayload, done) => {
    console.log('Strategie 2');

    const { _id: account, role } = jwtPayload.user;
    if (role !== 'ADMIN') {
      done(null, false);
    } else {
      done(null, { account, role });
    }
  }
);
passport.use(isAuthenticatedAsAdmin);

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    const body = { _id: req.user.account, role: req.user.role };
    const token = jwt.sign({ user: body }, process.env.AUTH_SECRET);
    return res.json({ token });
  }
);

module.exports = {
  authRoutes: router,
  isAuthenticated,
  isAuthenticatedAsAdmin,
};
