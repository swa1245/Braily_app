"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (user) {
        return res.status(409).json({
            message: "user aleady exist",
            success: false,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const newUser = new User_1.default({
        username,
        email,
        password: hashedPassword,
    });
    yield newUser.save();
    res.status(201).json({
        message: "u are singed up",
        success: "true",
    });
});
exports.signup = signup;
const signin = (req, res) => { };
exports.signin = signin;
