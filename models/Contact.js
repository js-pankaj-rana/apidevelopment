const mongoose = require('mongoose');
const { Schema } = mongoose;
import uuid from 'uuid';

const contactSchema = new Schema({
    contactId: uuid(),
    contactTime: {
        type: Date,
        default: Date.now
    },
    contactPersonName: String,
    contactPersonEmail: String,
    contactPersonMessage: String,
    contactQueryStatus: {
        type: String,
        default: 'No status avail'
    },
    contactIsResolved: {
        type: boolean,
        default: false
    }
})

mongoose.model('products', productSchema);