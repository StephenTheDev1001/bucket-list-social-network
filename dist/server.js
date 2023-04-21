import express from 'express';
import connectDB from './config/connectDB.js';
import path from 'path';
import dotenv from 'dotenv';
// initialize app
const app = express();
// load env vars
dotenv.config();
// Connect to MongoDB
connectDB();
// init middleware
app.use(express.json({ extended: false }));
// Define Routes
// app.use('/api/users', require('./routes/users'))
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/listItems', require('./routes/listItems'))
// app.use('/api/comments', require('./routes/comments'))
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
//# sourceMappingURL=server.js.map