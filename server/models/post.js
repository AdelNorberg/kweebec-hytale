const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  creator: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  view: {type: Number, default: 1 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
