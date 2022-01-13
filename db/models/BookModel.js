const mongoose = require("mongoose");

const BookModel = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  descripion: { type: String },
  url:{ type:String},
  Commint:{type:Array},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("BookModel", BookModel);
