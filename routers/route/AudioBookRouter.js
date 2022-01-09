const express = require("express");
const AudioBookRouter = express.Router();

const { getBoooks ,postBooks ,getAudioBook,AddCommint ,getAudioLike ,AddAudioLike ,remov,deleteCommint} = require("../controllers/Booking");
const { authentication } = require("../middlewares/authentication"); 


AudioBookRouter.get("/AudioBook", authentication,getBoooks)
AudioBookRouter.get("/AudioBook/:id", authentication, getAudioBook)
AudioBookRouter.get("/Favorite2", authentication, getAudioLike);


AudioBookRouter.post("/Commint/:id" , authentication, AddCommint)
AudioBookRouter.post("/Favorite2/:id", authentication, AddAudioLike);

AudioBookRouter.post("/AudioBooking", authentication,postBooks)

AudioBookRouter.delete("/Favorite2/:id", authentication, remov);
AudioBookRouter.delete("/Commint/:id", authentication, deleteCommint);


module.exports = AudioBookRouter;
