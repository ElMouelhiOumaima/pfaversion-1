const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  payee: {
    type: Boolean,
    default: false,
  },
  photo: {
    type: String,
    default: "",
  },
  employe: {
    type : ObjectId ,
    default:null,
    ref:"employe"
  },
  Notification:[ {
    text: String,
    nomemployee: String
  }]
});
mongoose.model("User", userSchema);
