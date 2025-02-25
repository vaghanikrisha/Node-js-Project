const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
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