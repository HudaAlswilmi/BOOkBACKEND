const Mongoose = require("mongoose");

const UsrModel = new Mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
  like: [{type: Mongoose.Schema.Types.ObjectId, ref: "BookModel"}] ,
  isAdmin : { type:Boolean , default:false}, 
});
module.exports = Mongoose.model("UsrModel", UsrModel);
