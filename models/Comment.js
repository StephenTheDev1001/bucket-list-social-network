const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)