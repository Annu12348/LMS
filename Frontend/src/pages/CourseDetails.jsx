import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import store from "../reduxtoolkit/store";

const CourseDetails = () => {
  const params = useParams()
  const courseId = params.courseId
  const { user } = useSelector(store => store.authentication);
  const { course } = useSelector(store => store.course);
  
 
  const courses = course.find(course => course._id === courseId)
  return (
    <>
      <div className="w-full min-h-screen py-3">
        <Navigation />
        <div className="mt-15  py-10 px-23">
          <div className="p-5 bg-white rounded ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 justify-between">
                <Link
                  to="/courses"
                  className="bg-zinc-200 p-3 leading-none rounded-full shadow hover:bg-zinc-500 inline-block"
                >
                  <GoArrowLeft />
                </Link>
                <h1 className="font-semibold text-xl capitalize tracking-tight leading-none">
                  {courses?.courseTitle || ""}
                </h1>
              </div>
              <button className="px-4 py-4 bg-green-400 rounded text-white capitalize font-semibold tracking-tight leading-none">
                enroll now
              </button>
            </div>
            <div className="w-full p-1 mt-6 flex gap-9 items-center ">
              <div className="w-[35%] h-[36vh] rounded shadow bg-amber-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={courses?.imageCourseUrl || ""}
                  alt="imageCourseUrl"
                />
              </div>
              <div className="">
                <h1 className="text-md font-semibold capitalize tracking-tight">
                  hey this is the subtitle for trial course
                </h1>
                <p className="mt-2 capitalize tracking-tight font-normal">
                  hey this is the subtitle for trial course
                </p>
                <h1 className="mt-2 capitalize tracking-tight font-normal">
                  ⭐⭐⭐⭐⭐ (4.8) | 1,200 reviews
                </h1>
                <h1 className="mt-2 capitalize text-xl font-semibold tracking-tight">
                  ₹{courses?.coursePrice || 99}
                </h1>
                <p className="relative -mt-1">
                  <span className="bg-zinc-400 h-0.5 w-8 absolute top-3 left-0.5 "></span>
                  ₹599
                </p>
                <p className="mt-2 capitalize tracking-tight font-normal">
                  ✔ 30+ hours of video content
                </p>
                <p className="mt-2 capitalize tracking-tight font-normal">
                  ✔ Lifetime access to course materials
                </p>
                <p className="mt-2 capitalize tracking-tight font-normal">
                  ✔ Certificate of completion
                </p>
              </div>
            </div>
            <h1 className="font-semibold capitalize mt-8 text-xl tracking-tight">
              What You'll Learn
            </h1>
            <p className="text-md list-item ml-4 mt-4 capitalize">
              Build dynamic web applications with React and Node.js.
            </p>
            <p className="text-md list-item ml-4 mt-1.5 capitalize">
              Deploy websites with modern tools like Vercel and Netlify.
            </p>
            <p className="text-md list-item ml-4 mt-1.5 capitalize">
              Understand REST APIs and database integration.
            </p>

            <h1 className="text-xl font-semibold capitalize tracking-tight mt-8">
              Requirements
            </h1>
            <p className="text-md mt-2.5 capitalize ">
              Basic programming knowledge is helpful but not required.
            </p>

            <h1 className="mt-8 font-semibold tracking-tight text-xl">
              Who This Course is For
            </h1>
            <p className="text-md mt-2.5 capitalize">
              Beginners, aspiring developers, and professionals looking to
              upgrade skill
            </p>
            <div className="w-full mt-18 justify-between flex items-start">
              <div className=" w-[63%] ">
                <h1 className="text-xl font-semibold tracking-tight">
                  Course Curriculum
                </h1>
                <p className="italic ">4 lectures</p>
                <div className="w-full bg-zinc-300 mt-2 flex gap-4  items-center p-4 rounded">
                  <span className="mt-1 text-2xl">
                    <IoPlayCircleOutline />
                  </span>
                  <h1 className="capitalize font-semibold tracking-tight text-xl">
                    Introduction to Node JS
                  </h1>
                </div>
                <div className="w-full bg-zinc-300 mt-5 flex gap-4  items-center p-4 rounded">
                  <span className="mt-0.5 text-2xl">
                    <FaLock />
                  </span>
                  <h1 className="capitalize font-semibold tracking-tight text-xl">
                    Basics of Node JS
                  </h1>
                </div>
                <div className="w-full bg-zinc-300 mt-5 flex gap-4  items-center p-4 rounded">
                  <span className="mt-0.5 text-2xl">
                    <FaLock />
                  </span>
                  <h1 className="capitalize font-semibold tracking-tight text-xl">
                    Basics of Node JS
                  </h1>
                </div>
                <div className="w-full bg-zinc-300 mt-5 flex gap-4  items-center p-4 rounded">
                  <span className="mt-0.5 text-2xl">
                    <FaLock />
                  </span>
                  <h1 className="capitalize font-semibold tracking-tight text-xl">
                    Basics of Node JS
                  </h1>
                </div>
              </div>
              <div className="w-[33%] p-2 shadow border-1 border-zinc-200">
                <div className="video w-full h-[35vh] rounded overflow-hidden bg-amber-200 ">
                  <video
                    src="https://videos.pexels.com/video-files/33535071/14259887_1440_2560_30fps.mp4"
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-semibold capitalize mt-2 tracking-tight">
                  Introduction to Node JS
                </h1>
                <hr className="text-zinc-300 mt-2" />
                <p className="text-md tracking-tight leading-5 mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, aspernatur a sed dolores possimus inventore amet quos
                  ab rerum illo.
                </p>
                <button className="text-md font-semibold capitalize mt-4 p-3 text-white bg-black rounded shadow ">
                  continue course
                </button>
              </div>
            </div>

            <h1 className="text-xl mt-6 font-semibold capitalize ">
              instructor
            </h1>
            <div className="flex items-center gap-4 my-3">
              <div className="w-[6%] bg-zinc-200 h-[11vh] overflow-hidden rounded-full ">
              <img className="w-full h-full object-cover " src={user.imageUrl || ""} />
              </div>
              <div>
                <h1 className="text-xl capitalize font-semibold tracking-tight">
                  {user?.fullname || ""}
                </h1>
                <h1 className="text-md capitalize tracking-tight">
                  {user?.description || ""}
                </h1>
              </div>
            </div>
            <p className="text-md capitalize">
              Hey i am a pro full stack developer from bhopal.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
