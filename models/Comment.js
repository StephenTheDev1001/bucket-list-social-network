const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  recpient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', CommentSchema)