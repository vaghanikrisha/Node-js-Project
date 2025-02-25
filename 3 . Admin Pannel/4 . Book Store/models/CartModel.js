const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});
const cart = mongoose.model('cart',cartSchema);
module.exports = cart;