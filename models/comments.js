const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      reply: {
        type: String
      }
});

module.exports = mongoose.model('Comment', commentSchema);