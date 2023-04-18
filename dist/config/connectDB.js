// import mongoose
import mongoose from 'mongoose';
// connect to mongodb
const connectDB = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
//# sourceMappingURL=connectDB.js.map