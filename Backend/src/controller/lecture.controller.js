import courseModel from "../model/course.model.js";
import lectureModel from "../model/lecture.model.js";
import { Imagekit, uploadVideo } from "../service/storage.service.js";

export const lectureController = async (req, res) => {
  try {
    const { id } = req.params;
    const { lectureTitle } = req.body;

    if (!lectureTitle || !id) {
      return res.status(400).json({
        message: "lecture title aur id are required",
      });
    }

    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }
    const lecture = await lectureModel.create({ lectureTitle });

    if (course) {
      course.lectures.push(lecture._id);
      await course.save();
    }

    res.status(201).json({
      message: "lecture created successfully",
      lecture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getlLectureCourseFetch = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await courseModel.findById(id).populate("lectures");

    if (!course) {
      return res.status(404).json({
        message: "lecture course not found",
      });
    }

    res.status(200).json({
      message: "fetch lecture course",
      lectures: course.lectures,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const leatureUpdateController = async (req, res) => {
  try {
    const { lectureId, id } = req.params;
    const { lectureTitle, ispreviewFree } = req.body;

    if (!lectureId || !id) {
      return res.status(404).json({
        message: "lectureTitle and lectureId are required",
      });
    }

    const file = req.file;

    if (!file) {
      return res.status(404).json({
        message: "file not found",
      });
    }

    const videosUrl = await uploadVideo(req.file.buffer, req.file.originalname);
    const videoUrl = videosUrl.url;
    const publicId = videosUrl.fileId;

    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }

    const lectures = await lectureModel.findById(lectureId);
    if (!lectures) {
      return res.status(404).json({
        message: "lecture not found",
      });
    }

    const lectureBelong = course.lectures.find(
      (lec) => lec.toString() === lectureId
    );
    if (!lectureBelong) {
      return res.status(400).json({
        message: "this lecture does not belong to this course",
      });
    }

    if (lectures.publicId) {
      try {
        await Imagekit.deleteFile(lectures.publicId);
      } catch (err) {
        console.warn("Old video delete failed:", err.message);
      }
    }

    const lecture = await lectureModel.findOneAndUpdate(
      { _id: lectureId },
      {
        $set: {
          lectureTitle,
          ispreviewFree,
          videoUrl: videoUrl,
          publicId: publicId,
        },
      },
      { new: true }
    );

    if (!lecture) {
      return res.status(400).json({
        message: "lecture course not found",
      });
    }

    res.status(200).json({
      message: "lecture courses successfully updated",
      lecture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again later",
    });
  }
};

export const lectureDeleteController = async (req, res) => {
  try {
    const { lectureId, id } = req.params;
    console.log(id);

    if (!lectureId) {
      return res.status(400).json({
        message: "lectureId are required",
      });
    }

    const courses = await courseModel.findById(id);
    if (!courses) {
      return res.status(404).json({
        message: "course not found",
      });
    }

    const lectures = await lectureModel.findById(lectureId);
    if (!lectures) {
      return res.status(404).json({
        message: "lecture not found",
      });
    }

    const lectureBelong = courses.lectures.find(
      (lec) => lec.toString() === lectureId
    );
    if (!lectureBelong) {
      return res.status(400).json({
        message: "this lecture does not belong to this course",
      });
    }

    if (lectures.publicId) {
      try {
        await Imagekit.deleteFile(lectures.publicId);
        console.log("video delete ho gai");
      } catch (error) {
        console.log("video nhi delete hui :", error.message);
      }
    }

    const lecture = await lectureModel.findOneAndDelete({ _id: lectureId });

    const course = await courseModel.findByIdAndUpdate(
      id,
      { $pull: { lectures: lectureId } },
      { new: true }
    );

    res.status(200).json({
      message: "Lecture deleted successfully",
      lecture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again later",
    });
  }
};

export const lectureByIdController = async (req, res) => {
  try {
    const { lectureId, id } = req.params;

    const course = await courseModel.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }

    const lecture = await lectureModel.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({
        message: "lecture not found",
      });
    }

    const lectureBelong = course.lectures.find(
      (lec) => lec.toString() === lectureId
    );
    if (!lectureBelong) {
      return res.status(400).json({
        message: "this lecture does not belong to this course",
      });
    }

    res.status(200).json({
      message: "lecture course successfully fetch data",
      lecture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again later",
    });
  }
};
