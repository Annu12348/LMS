import express from "express";
import { authenticationMiddleware } from "../middleware/authentication.middleware.js";
import { lectureController } from "../controller/lecture.controller.js";
const router = express.Router();

router.post("/create", authenticationMiddleware, lectureController)

export default router;