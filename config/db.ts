// This file is used to connect to the MongoDB database
import mongoose from 'mongoose';
require('dotenv').config()

const mongoURI: string = process.env.MONGO_URI || '';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};


export default connectDB;

// Q: How to fix ts error?
//await mongoose.connect(mongoURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

