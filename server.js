"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
require('dotenv').config();
// initialize app
const app = (0, express_1.default)();
// Connect Database
(0, db_1.default)();
// Init Middleware
app.use(express_1.default.json());
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
