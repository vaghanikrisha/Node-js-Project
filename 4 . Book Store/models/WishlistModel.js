const mongoose = require('mongoose');

const WishlistSchema = mongoose.Schema({
    _id:{
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
    pages: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const wishlist = mongoose.model('wishlist',WishlistSchema);
module.exports = wishlist;