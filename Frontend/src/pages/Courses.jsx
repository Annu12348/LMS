import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPublisheds } from "../reduxtoolkit/reducer/CourseSlice";
import { Link, useParams } from "react-router-dom";

const Courses = () => {
  const dispatch = useDispatch();
  const { publisheds } = useSelector((store) => store.course);
  const { user } = useSelector((store) => store.authentication);

  const coursesData = [
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736314212/jfpghsox60pc7g7d6rgb.png",
      title: "MongoDb for Experts",
      description: "Hey i am subtitle of mongodb tutorial",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736318194/gdbbqendirhfmu9j8y5o.png",
      title: "Error Debugging fixed",
      description: "this is the subtitle for error debugging fixing course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736342831/g0tsjh20grikv3elufwz.jpg",
      title: "HTML Full Course For Beginners",
      description: "Hey this is the subtitle for the html course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736407191/l1gq2ktijx27krd5gwsg.jpg",
      title: "Node Js Tutorial",
      description: "hey this is the subtitle for trial course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736408421/vdb6ubcbyzfw2ptaimiu.png",
      title: "Express Js Tutorial",
      description: "hey this is the subtitle for express tutorial course",
    },
  ];

  const publishedCoursesApi = async () => {
    try {
      const respons = await axios.get("http://localhost:3000/course/publish", {
        withCredentials: true,
      });
      dispatch(setPublisheds(respons.data.course));
    } catch (error) {
      alert("published not working");
    }
  };

  useEffect(() => {
    publishedCoursesApi();
  }, []);

  return (
    <div className="w-full min-h-[91.4vh]  bg-[#e8ecf3]">
      <Navigation />
      <div className="w-full  mt-[6vh] md:mt-[8.6vh] min-h-[91.4vh] py-9 flex flex-col gap-3 items-center px-4   md:px-6 ">
        <h1 className="text-3xl tracking-tight leading-none font-semibold">
          Our Courses
        </h1>
        <p className="text-md text-zinc-500 text-center tracking-tight leading-none font-semibold">
          Explore our curated courses to boost your skills and career. Whether
          you're a beginner or an expert, we have something for everyone.
        </p>
        <div className="px-5 py-9 w-full  flex gap-8 justify-center flex-wrap items-center min-h-[80vh]  ">
          {publisheds.map((courses) => {
            return (
              <div
                key={courses._id}
                className=" bg-white  md:w-[55vh] rounded-lg  shadow"
              >
                <div className="w-[55vh] bg-white h-[28vh] overflow-hidden rounded-t-lg ">
                  <img
                    className="w-full h-full object-fit-cover  "
                    src={courses.imageCourseUrl}
                    alt="show images"
                  />
                </div>
                <div className="px-3 py-4">
                  <h1 className="text-md tracking-tight font-semibold leading-none ">
                    {courses.courseTitle}
                  </h1>
                  <h1 className="text-sm tracking-tight mt-4 mb-2 leading-none ">
                    {courses.description}
                  </h1>
                  <Link
                    to={user ? `/courses/${courses._id}` : "/login"}
                    className="mt-3 block w-fit bg-black text-white px-4 py-2 rounded shadow"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
