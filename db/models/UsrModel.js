const Mongoose = require("mongoose");
const UsrModel = new Mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },

});
module.exports = Mongoose.model("UsrModel", UsrModel);
