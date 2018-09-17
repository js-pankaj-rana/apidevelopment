const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
// const Product = mongoose.model('products');


passport.serializeUser( (user, done) => {
    done(null, user.id);
})

passport.deserializeUser( (id, done) => {
    User.findById(id).then( user => {
        done(null, user);
    });
   }
 ); 

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },
     (accessToken, profileToken, profile, done) => {
         console.log(profile);
        User.findOne({ googleId: profile.id}).then( exitingUser => {
            if(exitingUser){
               console.log('exists==>',exitingUser.userFullName);
                done(null, exitingUser);
            }
            else{
                new User({
                    googleId : profile.id,
                    userFullName: profile.displayName,
                    userEmailId: profile.emails[0].value,
                    userPhotos: profile.photos[0].value,
                    userGender: profile.gender,
                    userFirstName: profile.name.familyName,
                    userLastName: profile.name.givenName
                }).save().then( user => {
                    done(null, user);
                } );
            }
        })
        }
    )
);

passport.use(new BearerStrategy( (id, done) => {
    User.findOne({ id: id}, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback&client_id=1978428739114034",
    proxy: true
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ facebookId: profile.id}).then( exitingUser => {
        if(exitingUser){
            done(null, exitingUser);
        }
        else{
            new User({
                facebookId : profile.id,
                userFullName: profile.displayName,
            }).save().then( user => {
                done(null, user);
            } );
        }
    })
  }
));