const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');
const app = express();



mongoose.connect(
    keys.mongoURI, 
    function(err, db) {
        if (err) {
            console.log('Unable to connect to the server. Please start the server. Error:', err);
        } else {
            console.log('Connected to Server successfully!');
        }
    }
);

app.use (
    cookieSession({
        keys: [keys.cookieKey],
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 * 24 hours
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT =  process.env.PORT || 5000;   
app.listen(PORT);