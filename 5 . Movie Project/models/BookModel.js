const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const books = mongoose.model('books', bookSchema);
module.exports = books;