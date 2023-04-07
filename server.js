"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import path from 'path';
// initialize app
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
