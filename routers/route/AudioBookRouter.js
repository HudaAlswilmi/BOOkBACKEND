const express = require("express");
const AudioBookRouter = express.Router();

const { getBoooks ,postBooks ,getAudioBook,AddCommint} = require("../controllers/Booking");
const { authentication } = require("../middlewares/authentication"); 


AudioBookRouter.get("/AudioBook", authentication,getBoooks)
AudioBookRouter.get("/AudioBook/:id", authentication, getAudioBook)

AudioBookRouter.post("/Commint/:id" , authentication, AddCommint)

AudioBookRouter.post("/AudioBooking", authentication,postBooks)


module.exports = AudioBookRouter;
