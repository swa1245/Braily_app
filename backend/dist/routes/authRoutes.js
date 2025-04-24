"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../controllers/authControllers");
const router = express_1.default.Router();
// @ts-ignore
router.post('/signup', authControllers_1.signup);
// @ts-ignore
router.post('/signin', authControllers_1.signin);
exports.default = router;
