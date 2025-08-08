import React, { useEffect, useState } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseCreate = () => {
  document.title = "LMS | Admin-Course | Create";
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false)

  console.log(category);
  console.log(courseTitle);

  const onvaluechangehandler = (val) => {
    setCategory(val.target.value)
  }

  const postapi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/course/courses",
        { courseTitle, category },
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    postapi();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen  flex  ">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[90vh]   mt-16 p-9  ">
          <h1 className="text-2xl capitalize font-semibold ">
            let add, <span className="text-blue-500">courses</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
            necessitatibus fugit vel distinctio architecto, ut ratione rem nobis
            eaque?
          </p>
          <div className="mt-10 flex w-full flex-col">
            <label className="text-md capitalize font-semibold">title</label>
            <input
              className="w-full mt-1.5 border-1 border-zinc-300 px-3 capitalize font-semibold py-2 outline-none text-zinc-400 rounded"
              type="text"
              placeholder="your course name"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          <div className="mt-4 w-full flex flex-col">
            <label
              htmlFor="category"
              className="capitalize text-md font-semibold"
            >
              category
            </label>
            <select
              id="category"
              className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none"
              value={category}
              onChange={onvaluechangehandler}
            >
              <option value="">Select category</option>
              <option value="Node Js">Node Js</option>
              <option value="Java">Java</option>
              <option value="PHP">PHP</option>
              <option value="Phython">Phython</option>
              <option value="mern_stack">Mern Stack Developer</option>
              <option value="front-end-developer">Front-End-Developer</option>
              <option value="react-developer">React-Developer</option>
              <option value="javascript-developer">JavaScript-Developer</option>
              <option value="back-end-developer">Back-End-Developer</option>
            </select>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="mt-7 px-5 py-2 bg-white text-md font-semibold rounded mr-5"
          >
            Cancel
          </button>
          <button disabled={loading} onClick={postapi} className="px-5 py-2 bg-green-500 text-white font-semibold rounded">
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCreate;
