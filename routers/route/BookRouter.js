const express = require("express");
const BookModel = express.Router();

const { getBooks ,postBook ,getBook ,deleteBook} = require("../controllers/Book");
const { authentication } = require("../middlewares/authentication");
// const {ADMAIN } = require("../middlewares/admain")
BookModel.get("/Booking", authentication, getBooks);
BookModel.get("/Book/:id", authentication, getBook);

BookModel.delete("BoooK/:id", authentication ,deleteBook)

BookModel.post("/Book", authentication, postBook);

module.exports = BookModel;
