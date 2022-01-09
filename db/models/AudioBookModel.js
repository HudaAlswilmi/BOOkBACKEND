const mongoose = require("mongoose");

const AudioBookModel = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  descripion: { type: String },
  url:{ type:String},
  Commint:{type:Array},
});

module.exports = mongoose.model("AudioBookModel", AudioBookModel);
