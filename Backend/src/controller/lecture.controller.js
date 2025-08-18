import courseModel from "../model/course.model.js";
import lectureModel from "../model/lecture.model.js";

export const lectureController = async (req, res) => {
  try {
    const { id } = req.params;
    const { lectureTitle } = req.body;

    if (!lectureTitle || !id) {
      return res.status(400).json({
        message: "lecture title aur id are required",
      });
    }

    const lecture = await lectureModel.create({ lectureTitle });
    const course = await courseModel.findById(id);

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
    console.log(id);

    const course = await courseModel.findById(id).populate("lectures");

    if(!course){
        return res.status(404).json({
            message: "lecture course not found"
        })
    }

    res.status(200).json({
        message: "fetch lecture course",
        lectures: course.lectures,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};