const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productCode: String,
    productName: String,
    productPrice: Number,
    productStockNum: Number,
    productDiscription: new Array({
        productDoors: Number,
        productTotalSelves: Number,
        productApplicationType: Number,
        productNeedFor: String,
        productAvaiblityLocation: String,
        productCondition: String,
        productDimension: String,
        productColor: String,
        productMaterial: String,
        productMirror: String,
        productNumLocker: Number,
        productSecretLocker: Number,
        productWarranty: String,
        productNote: String,
        productMessage: String
    })
})

mongoose.model('products', productSchema);