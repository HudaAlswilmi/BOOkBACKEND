const express = require("express");
const BookModel = express.Router();

const { getBooks ,postBook} = require("../controllers/Book");
const { authentication } = require("../middlewares/authentication");

BookModel.get("/Booking", authentication, getBooks);


BookModel.post("/Book", authentication, postBook);

module.exports = BookModel;
