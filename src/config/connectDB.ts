import mongoose, { ConnectOptions } from 'mongoose';

const mongoURI: string = process.env.MONGO_URI || '';

const options: Partial<ConnectOptions> = {
    //connect options
};

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(mongoURI, options);
        console.log('MongoDB connected');
    } catch (err) {
        console.log('MongoDB connection error: ', err);
    }
};

export default connectDB;

