import express from "express";
import dotenv from 'dotenv'
import router from "./routes/authRoutes";
import { connectdb } from "./config/db";
dotenv.config()
const app = express();
connectdb()

app.use(express.json())
app.use('/auth',router)

app.listen(3000, () => {
  console.log("server is listen");
});
