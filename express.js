const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const keys = require('./config/keys');

const PORT =  process.env.PORT || 5000;   

passport.use(new GoogleStrategy({
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

app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }
    )
)

app.get('/auth/google/callback', passport.authenticate('google'));


console.log(PORT);
app.listen(PORT);