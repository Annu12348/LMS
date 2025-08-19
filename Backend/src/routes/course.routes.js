import express from "express";
import multer from "multer";
import {
  createcourse,
  getcourseById,
  getpublishedcourses,
  getpublishedcoursesId,
  getupdatecourse,
} from "../controller/course.controller.js";
import { authenticationMiddleware } from "../middleware/authentication.middleware.js";
import { getlLectureCourseFetch, lectureController } from "../controller/lecture.controller.js";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/courses", authenticationMiddleware, createcourse);
router.get("/publish", authenticationMiddleware, getpublishedcourses);
router.get("/fetchs", authenticationMiddleware, getpublishedcoursesId);
router.put(
  "/:id",
  authenticationMiddleware,
  upload.single("imageCourseUrl"),
  getupdatecourse
);
router.get("/:id", authenticationMiddleware, getcourseById);

//lecture course

router.post("/:id/lecture/create", authenticationMiddleware, lectureController);
router.get("/:id/lecture/read", authenticationMiddleware, getlLectureCourseFetch);

export default router;
