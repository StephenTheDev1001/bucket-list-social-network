import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const User = mongoose.model('User', UserSchema);
module.exports = User;