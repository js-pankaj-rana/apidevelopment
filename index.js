const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

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
    

const app = express();

require('./routes/authRoutes')(app);

const PORT =  process.env.PORT || 5000;   
app.listen(PORT);