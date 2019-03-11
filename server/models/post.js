const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  creator: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: 4, 
    maxlength: 34
  },
  description: {
    type: String,
    required: true,
    minlength: 40, 
    maxlength: 240
  },
  content: {
    type: String,
    required: true,
    minlength: 240, 
    maxlength: 50000
  },
  category: {
    type: String,
    required: true,
    validate: {
      validator: (category) => {
        const categories = ['Новости', 'Моды', 'Текстуры', 'Карты', 'Сборки'] 
        const sooth = categories.filter(item => item === category)
        return sooth[0]
      },
      message: 'Не соответствует типам категорий'
    }
  },
  cover: {
    type: String,
    required: true,
    minlength: 7, 
    maxlength: 500
  },
  path: {
    type: String,
    required: true
  },
  view: {type: Number, default: 1 },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
