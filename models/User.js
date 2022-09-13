const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  favorites: [mongoose.Schema.Types.ObjectId],
},
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
