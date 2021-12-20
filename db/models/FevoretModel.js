const mongoose = require("mongoose");

const FevoretModel = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  descripion: { type: String },
  url:{ type:String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  
});

module.exports = mongoose.model("FevoretModel", FevoretModel);
