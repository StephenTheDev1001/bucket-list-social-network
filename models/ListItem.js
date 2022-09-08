const mongoose = require('mongoose')

const ListItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  content: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('ListItem', ListItemSchema)