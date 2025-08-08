import express from "express"
const router = express.Router(); 
import { LoginUser, logoutUser, registerUser, updateUser } from "../controller/auth.controller.js";
import multer from "multer";
import { registerValidator } from "../middleware/validator.middleware.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/register", registerValidator, registerUser);
router.post("/login", LoginUser);
router.get("/logout", logoutUser);
router.put("/update/:id", upload.single("imageUrl") ,updateUser)

export default router;