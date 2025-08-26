import React, { useState } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseCreate = () => {
  document.title = "LMS | Admin-Course | Create";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const coursecreate = async () => {
    try {
      const response = await axios.post(
        "${import.meta.env.VITE_API_URL}/course/courses",
        { category, subTitle, courseTitle },
        { withCredentials: true }
      );
      navigate(-1);
    } catch (error) {
      alert("Course not created");
    }
  };

  const createButtonHandleClicked = () => {
    coursecreate();
    setCategory("");
    setCourseTitle("");
    setSubTitle("");
  };
  return (
    <>
      <div className="w-full min-h-screen flex">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[90vh] mt-16 p-9">
          <h1 className="text-2xl capitalize font-semibold">
            let's add, <span className="text-blue-500">courses</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
            necessitatibus fugit vel distinctio architecto, ut ratione rem nobis
            eaque?
          </p>
          <div className="mt-10 flex w-full flex-col">
            <label className="text-md capitalize font-semibold">
              course title
            </label>
            <input
              className="w-full mt-1.5 border-1 border-zinc-300 px-3 capitalize font-semibold py-2 outline-none text-zinc-400 rounded"
              type="text"
              placeholder="your course title"
              required
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          <div className="mt-4 flex w-full flex-col">
            <label className="text-md capitalize font-semibold">Subtitle</label>
            <input
              className="w-full mt-1.5 border-1 border-zinc-300 px-3 capitalize font-semibold py-2 outline-none text-zinc-400 rounded"
              type="text"
              placeholder="your subtitle"
              required
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <div className="mt-3 w-full flex flex-col">
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
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="Next Js">Next Js</option>
              <option value="Data Science">Data Science</option>
              <option value="Docker">Docker</option>
              <option value="Phython">Phython</option>
              <option value="mern_stack">Mern Stack Developer</option>
              <option value="front-end-developer">Front-End-Developer</option>
              <option value="JavaScript">JavaScript</option>
              <option value="MongoDB">MongoDB</option>
              <option value="back-end-developer">Back-End-Developer</option>
              <option value="HTML">HTML</option>
            </select>
          </div>
          <button
            className="mt-7 w-30 px-5 py-2 cursor-pointer bg-white text-md font-semibold rounded mr-5"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="px-5 w-30 py-2 cursor-pointer bg-green-500  text-white font-semibold rounded"
            type="button"
            onClick={createButtonHandleClicked}
            disabled={loading}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCreate;
