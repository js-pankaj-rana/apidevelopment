const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, profileToken, profile, done) => {
            new User({
                googleID: profile.id
            }).save();
            // console.log(
                // 'accessToken==>',accessToken,
                // 'profileToken==>', profileToken,
                // 'profile==>', profile,
                // 'done==>', done);
            }
        )
    );