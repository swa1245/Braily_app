import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface SignupReq {
  username: string;
  password: string;
  email: string;
}
export const signup = async (
  req: Request<{}, {}, SignupReq>,
  res: Response
) => {
  const { username, password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({
      message: "user aleady exist",
      success: false,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({
    message: "u are singed up",
    success: "true",
  });
};
export const signin = async (
  req: Request<{}, {}, SignupReq>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(409).json({
      message: "user not exist signup",
      success: false,
    });
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return res.status(409).json({
      message: "password is incorrect try again",
      success: false,
    });
  }
  const jwtToken = jwt.sign(
    { email: user.email, id: user._id },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );
  

  res.status(201).json({
    message: "u are singed in",
    jwtToken,
    success: "true",
    email
  });
};
