const express = require("express");
const BookModel = express.Router();

const { getBooks ,poostBook ,getBook ,deleteBook,AddLike,getLike} = require("../controllers/Book");
const { authentication } = require("../middlewares/authentication");
// const {ADMAIN } = require("../middlewares/admain")
BookModel.get("/Booking", authentication, getBooks);
BookModel.get("/Book/:id", authentication, getBook);
BookModel.get("/Favorite", authentication, getLike)
BookModel.delete("/BoooK/:id", authentication ,deleteBook)

BookModel.post("/Book", authentication, poostBook);
BookModel.post("/Favorite/:id", authentication, AddLike)
module.exports = BookModel;
