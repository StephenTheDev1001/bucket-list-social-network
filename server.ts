import express from 'express';
//import path from 'path';

// initialize app
const app = express();

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));