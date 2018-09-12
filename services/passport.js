const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, profileToken, profile, done) => {
            console.log('profile.id==>',profile.id);
            
            User.findOne({googleId: profile.id})
                .then( existingUser => {
                    if(! existingUser){
                        new User({
                            googleId: profile.id
                        })
                        .save()
                        .then( newUser => done(null, newUser)) 
                        
                    }
                    else {
                        done(null, existingUser)
                    }
                })
            }   
        )
    );