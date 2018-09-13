const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


/* passport.serializeUser( (user, done) => {
    done(null, user.id);
})

passport.deserializeUser( (id, done) => {
    User.findById(id).then( user => {
        done(null, user);
    });
   }
 ); */

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