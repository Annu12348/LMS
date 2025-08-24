import express from "express";
import multer from "multer";
import {
  createcourse,
  deleteCourseController,
  getcourseById,
  getpublishedcourses,
  getpublishedcoursesId,
  getupdatecourse,
  toggelIspublishedCourse,
} from "../controller/course.controller.js";
import { authenticationMiddleware } from "../middleware/authentication.middleware.js";
import {
  getlLectureCourseFetch,
  leatureUpdateController,
  lectureByIdController,
  lectureController,
  lectureDeleteController,
} from "../controller/lecture.controller.js";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/courses", authenticationMiddleware, createcourse);
router.get("/publish",  getpublishedcourses);
router.get("/fetchs", authenticationMiddleware, getpublishedcoursesId);
router.put(
  "/:id",
  authenticationMiddleware,
  upload.single("imageCourseUrl"),
  getupdatecourse
);
router.get("/:id", authenticationMiddleware, getcourseById);
router.delete("/:id", authenticationMiddleware, deleteCourseController);
router.patch("/:id", authenticationMiddleware, toggelIspublishedCourse)

//lecture course

router.post("/:id/lecture/create", authenticationMiddleware, lectureController);
router.get(
  "/:id/lecture/read",
  authenticationMiddleware,
  getlLectureCourseFetch
);
router.put(
  "/:id/lecture/:lectureId",
  authenticationMiddleware,
  upload.single("video"),
  leatureUpdateController
);

router.delete(
  "/:id/lecture/:lectureId",
  authenticationMiddleware,
  lectureDeleteController
);

router.get(
  "/:id/lecture/:lectureId",
  authenticationMiddleware,
  lectureByIdController
);

export default router;
