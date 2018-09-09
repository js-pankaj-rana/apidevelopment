const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, profileToken, profile, done) => {
            console.log(
                'accessToken==>',accessToken,
                'profileToken==>', profileToken,
                'profile==>', profile,
                'done==>', done);
            }
        )
    );