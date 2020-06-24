var passport = require('passport');
var localstrategy = require('passport-local').Strategy;
var jwtstrategy = require('passport-jwt').Strategy;
var passport = require('passport');
var extractjwt = require('passport-jwt');
var jwt = require('jsonwebtoken');
var config = require('./config');
var User = require('./models/users');

passport.use(new localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: 10800});
};

var opts = {};
opts.jwtFromRequest = extractjwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtpassport = passport.use(new jwtstrategy(opts, 
    (jwt_payload, done) => {
        console.log('JWT payload: ', jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if(err) {
                return done(err, false);
            }
            else if(user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});