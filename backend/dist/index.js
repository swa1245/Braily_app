"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const db_1 = require("./config/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.connectdb)();
app.use(express_1.default.json());
app.use('/auth', authRoutes_1.default);
app.listen(3000, () => {
    console.log("server is listen");
});
