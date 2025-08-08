import courseModel from "../model/course.model.js";

export const createcourse = async (req, res) => {
  try {
    const { courseTitle, subTitle } = req.body;

    if(!courseTitle || !subTitle){
        res.status(400).json({
            message: "coursetitle aur subtitle dono required hone chahiye"
        })
    }

    const course = await courseModel.create({
        courseTitle,
        subTitle,
        creator: req.user.id
    })

    res.status(201).json({
      message: "Course created successfully",
      course
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
};

export const getpublishedcourses = async (req, res) => {
  try{
    const course = await courseModel.find({ isPublished: true })

    res.status(200).json({
      message: "Published courses fetched successfully",
      course
    });
  }catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
}

export const getpublishedcoursesId = async (req, res) => {
  try{
    const userId = req.user.id;
    console.log(userId)
    const course = await courseModel.find({ creator : userId })
    res.status(200).json({
      message: "Courses fetched successfully",
      course
    })
  }catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error, please try again latter",
    });
  }
} 