const express = require("express");
const BookRouter = express.Router();

const { getBooks ,poostBook ,getBook ,deleteBook,AddLike,getLike} = require("../controllers/Book");
const { authentication } = require("../middlewares/authentication");
// const {ADMAIN } = require("../middlewares/admain")
BookRouter.get("/Booking", authentication, getBooks);
BookRouter.get("/Book/:id", authentication, getBook);
BookRouter.get("/Favorite", authentication, getLike)
BookRouter.delete("/BoooK/:id", authentication ,deleteBook)

BookRouter.post("/Book", authentication, poostBook);
BookRouter.post("/Favorite/:id", authentication, AddLike)
module.exports = BookRouter;
