const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  first_name: { type: String, default: null, required:true },
  last_name: { type: String, default: null,required:true },
  email: { type: String, unique: true,required:true },
  password: { type: String,required:true,default: null },
  confirm_password: { type: String,required:true,default: null },
  token:{type:String}
});

module.exports = mongoose.model("user", UserScheme);
