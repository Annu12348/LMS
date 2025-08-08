import express from "express";
import { createcourse, getpublishedcourses, getpublishedcoursesId } from "../controller/course.controller.js";
import { authenticationMiddleware } from "../middleware/authentication.middleware.js";
const router = express.Router();

router.post("/courses", authenticationMiddleware, createcourse);
router.get("/publish", authenticationMiddleware, getpublishedcourses)
router.get("/publishs/", authenticationMiddleware, getpublishedcoursesId)

export default router;