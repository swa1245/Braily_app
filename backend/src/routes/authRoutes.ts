import express from  "express"
import { signin, signup } from "../controllers/authControllers"
const router = express.Router()

// @ts-ignore
router.post('/signup',signup)
// @ts-ignore
router.post('/signin',signin)

export default router