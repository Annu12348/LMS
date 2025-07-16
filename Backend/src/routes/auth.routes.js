import express from "express"
const router = express.Router(); 
import { LoginUser, registerUser } from "../controller/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", LoginUser)


export default router;