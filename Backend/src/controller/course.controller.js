import courseModel from "../model/course.model.js";
import { uploadFile } from "../service/storage.service.js";

export const createcourse = async (req, res) => {
  try {
    const { courseTitle, subTitle } = req.body;

    if (!courseTitle || !subTitle) {
      res.status(400).json({
        message: "coursetitle aur subtitle dono required hone chahiye",
      });
    }

    const course = await courseModel.create({
      courseTitle,
      subTitle,
      creator: req.user.id,
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getpublishedcourses = async (req, res) => {
  try {
    const course = await courseModel.find({ isPublished: true });

    res.status(200).json({
      message: "Published courses fetched successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getpublishedcoursesId = async (req, res) => {
  try {
    //creator
    //req.user.id = userid
    const course = await courseModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Courses fetched successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getupdatecourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "no file found",
      });
    }

    const imagesfile = await uploadFile(req.file.buffer, req.file.originalname);
    const imageCourseUrl = imagesfile.url;

    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      isPublished,
    } = req.body;

    const course = await courseModel.findOneAndUpdate(
      { _id: courseId },
      {
        $set: {
          courseTitle,
          subTitle,
          description,
          category,
          courseLevel,
          coursePrice,
          isPublished,
          imageCourseUrl: imageCourseUrl,
        },
      },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }

    res.status(200).json({
      message: "course updated successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getcourseById = async (req, res) => {
  try {
    const { id } = req.params
    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }
    res.status(200).json({
      message: "course fetch successfully fetch course",
      course,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};
