const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      likes: {
        type: Number,
        required: true
      },
      dislikes: {
        type: Number,
        required: true
      },
      banner: {
        type: String,
        required: true
      },
      comments: {
        type: String
      },
      slug: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Post', postSchema);