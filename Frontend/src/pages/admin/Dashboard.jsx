import React from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"
import { useSelector } from "react-redux";

const Dashboard = () => {
  document.title = "LMS | Admin-Dashboard";
  const { user } = useSelector((store) => store.authentication);
  const { course } = useSelector(store => store.course)
  const { publisheds } = useSelector(store => store.course)
  console.log(publisheds.length)

  const enrollCoursesData = [
    {
      enroll: course.length,
      description: "Total Enrolled Courses",
    },
    {
      enroll: 12,
      description: "Completed Assignments",
    },
    {
      enroll: 3,
      description: "Pending Quizzes",
    },
    {
      enroll: publisheds ? publisheds.length : 0,
      description: "Purchased Courses",
    },
  ];
  return (
    <>
    <div className="w-full min-h-screen  flex  overflow-y-auto overflow-x-hidden">
      <Navigation />
      <SizeNavigation />
      <div className="w-[81%] h-[10vh]  mt-16 p-5  ">
        <div className="w-full p-4 bg-blue-700 rounded-lg">
          <h1 className="text-2xl font-semibold text-white capitalize">
            Welcome back, {user.fullname}!
          </h1>
          <button className="mt-2 font-semibold capitalize text-blue-500 bg-zinc-50 hover:bg-zinc-200 px-5 py-3 rounded-lg cursor-pointer ">
            browser new courses
          </button>
        </div>

        <div className="w-full flex items-center gap-10 mt-5">
          {enrollCoursesData.map((enrolls, index) => (
            <div key={index} className="p-2 shadow  w-[24%]  rounded bg-white flex flex-col items-center">
              <h1 className="font-semibold text-xl">{enrolls.enroll}</h1>
              <h1 className="font-semibold text-zinc-600">
                {enrolls.description}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-full mt-7">
          <h1 className="text-xl capitalize font-semibold">active courses</h1>
          <div className="mt-1 flex items-center gap-10">
            <div className="w-[33%] bg-white py-2.5 px-4 rounded">
              <h1 className="text-xl capitalize tracking-tight font-semibold ">
                course 1
              </h1>
              <div className="w-full my-2.5 h-2.5 rounded-full  bg-zinc-300 overflow-hidden ">
                <div className="h-full bg-blue-500 w-[30%] rounded-r-full "></div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 w-full rounded-lg py-2 text-white font-semibold mt-2">
                view details{" "}
              </button>
            </div>
            <div className="w-[33%] bg-white py-2.5 px-4 rounded">
              <h1 className="text-xl capitalize tracking-tight font-semibold ">
                course 2
              </h1>
              <div className="w-full my-2.5 h-2.5 rounded-full  bg-zinc-300 overflow-hidden ">
                <div className="h-full bg-blue-500 w-[50%] rounded-r-full "></div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 w-full rounded-lg py-2 text-white font-semibold mt-2">
                view details{" "}
              </button>
            </div>
            <div className="w-[33%] bg-white py-2.5 px-4 rounded">
              <h1 className="text-xl capitalize tracking-tight font-semibold ">
                course 3
              </h1>
              <div className="w-full my-2.5 h-2.5 rounded-full  bg-zinc-300 overflow-hidden ">
                <div className="h-full bg-blue-500 w-[70%] rounded-r-full "></div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 w-full rounded-lg py-2 text-white font-semibold mt-2">
                view details{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-xl capitalize font-semibold">
            upcoming deadlines
          </h1>
          <div className="flex w-full p-5 rounded shadow mt-3 items-center justify-between bg-white">
            <h1 className="font-semibold text-sm ">Assignment 1</h1>
            <p className="font-semibold text-sm">Due: jan 15, 2025</p>
          </div>
          <div className="flex w-full p-5 rounded shadow mt-3 items-center justify-between bg-white">
            <h1 className="font-semibold text-sm">Quiz 2</h1>
            <p className="text-sm font-semibold">Due: jan 18, 2025</p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
