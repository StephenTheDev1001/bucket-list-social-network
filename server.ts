import express from 'express';
import connectDB from './config/db';
import path from 'path';
require('dotenv').config()

// initialize app
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
