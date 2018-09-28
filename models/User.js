const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    userRegisterDate: {
        type: Date,
        default: Date.now
    },
    facebookId: String,
    userFullName: {
        type: String,
    },
    userEmailId: {
        type:String,
        lowercase: true,
        unique: true
    },
    userPhotos: String,
    userGender: String,
    userFirstName: String,
    userLastName: String,
    userPassword: String
})

mongoose.model('users', userSchema);