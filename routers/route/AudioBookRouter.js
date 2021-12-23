const express = require("express");
const AudioBookModel = express.Router();

const { getBoooks ,postBooks } = require("../controllers/Booking");
const { authentication } = require("../middlewares/authentication"); 


AudioBookModel.get("/AudioBook", authentication,getBoooks)

AudioBookModel.post("/AudioBooking", authentication,postBooks)


module.exports = AudioBookModel;
