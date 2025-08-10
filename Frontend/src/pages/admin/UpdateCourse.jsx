import React from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import CourseTab from "./CourseTab";

const Dashboard = () => {
  document.title = "LMS | Admin-Dashboard";
  const { user } = useSelector((store) => store.authentication);

  const enrollCoursesData = [
    {
      enroll: 5,
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
      enroll: 2,
      description: "Purchased Courses",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen  flex  overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] h-[10vh]  mt-16 p-5  ">
          <div className="flex items-center justify-between">
            <h1 className="text-md  font-semibold">
              Add detail information regarding course
            </h1>
            <p className="text-md hover:text-blue-500 hover:underline capitalize font-semibold cursor-pointer">
              go to leatures page
            </p>
          </div>
          <CourseTab />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
