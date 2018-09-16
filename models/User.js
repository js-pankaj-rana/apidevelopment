const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    userFullName: String,
    userEmailId: String,
    userPhotos: String,
    userGender: String,
    userFirstName: String,
    userLastName: String,
})

mongoose.model('users', userSchema);