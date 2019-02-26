const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 4, 
    maxlength: 30
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true,
    minlength: 4, 
    maxlength: 14
  },
  posts: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  role: {
    type: String,
    default: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
