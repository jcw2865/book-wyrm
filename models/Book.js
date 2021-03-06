const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    email: String,
    title: String,
    author: [String],
    year: Number,
    coverId: Number
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;