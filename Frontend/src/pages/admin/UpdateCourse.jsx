import React from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import CourseTab from "./CourseTab";
import { Link, useParams } from "react-router-dom";

const UpdateCourse = () => {
  document.title = "LMS | Admin-Dashboard";
  const { user } = useSelector((store) => store.authentication);
  const params = useParams()
  const courseid = params.courseId
  

  
  return (
    <>
      <div className="w-full min-h-screen  flex   overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[10vh]  mt-16 p-5  ">
          <div className="flex items-center justify-between">
            <h1 className="text-md  font-semibold">
              Add detail information regarding course
            </h1>
            <Link to={`/admin/course/${courseid}/lecture`} className="text-md hover:text-blue-500 hover:underline capitalize font-semibold cursor-pointer">
              go to leatures page
            </Link>
          </div>
          <CourseTab />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateCourse;
