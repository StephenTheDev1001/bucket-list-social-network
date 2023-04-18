import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI = process.env.MONGO_URI;
const options = {};
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, options);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.log('MongoDB connection error: ', err);
    }
};
export default connectDB;
//# sourceMappingURL=connectDB.js.map