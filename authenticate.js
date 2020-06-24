var passport = require('passport');
var localstrategy = require('passport-local').Strategy;
var User = require('./models/users');
var passport = require('passport');

passport.use(new localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());