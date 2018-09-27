const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productCode: String,
    productName: String,
    productPrice: Number,
    productStockNum: Number,
    productDiscription: Object,
    productPublished: Boolean,
    productAuthor: {
        type: Schema.ObjectId,
        ref: 'User'
    } 
})

mongoose.model('products', productSchema);