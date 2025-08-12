import React, { useEffect } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { AiFillAccountBook } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../../reduxtoolkit/reducer/CourseSlice";

const Course = () => {
  document.title = "LMS | Admin-Course";
  const dispatch = useDispatch();
  const { course } = useSelector((store) => store.course);
  console.log(course);

  const getcreatecourse = async () => {
    try {
      const res = await axios.get("http://localhost:3000/course/fetchs", {
        withCredentials: true,
      });
      dispatch(setCourse(res.data.course));
    } catch (error) {
      alert("not courses created");
    }
  };

  useEffect(() => {
    getcreatecourse()
  },[]);

  return (
    <>
      <div className="w-full min-h-screen  flex  ">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[90vh]  mt-16 p-5  ">
          <Link
            to="/admin/course/create"
            className="mt-4 block w-fit px-6 py-3 bg-yellow-600 rounded shadow capitalize tracking-tight font-semibold text-white"
          >
            create course
          </Link>
          <div className="w-full capitalize text-zinc-400 mt-12 ">
            <div className="py-2 px-3 rounded w-full flex items-center hover:bg-zinc-100 justify-between">
              <h1 className="w-[25%] ">course</h1>
              <h1 className="w-[25%] text-center ">price</h1>
              <h1 className="w-[25%] text-center ">ststus</h1>
              <h1 className="w-[25%] text-right ">action</h1>
            </div>

            {course?.map((courses) => (
              <div
                key={courses._id}
                className="py-1 capitalize object-cover  px-3 mt-2 rounded w-full flex items-center hover:bg-zinc-100  justify-between"
              >
                <div className="w-[25%]  flex items-center gap-4 ">
                  <img
                    className="object-center w-[15vh] h-[9vh] rounded "
                    src={courses.imageCourseUrl || `https://images.unsplash.com/photo-1754079132860-5b37dab49daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8`}
                  />
                  <p className="text-black">{courses.courseTitle}</p>
                </div>
                <h1 className="w-[25%] text-center text-black ">
                  ${courses.coursePrice || "NA"}
                </h1>
                <h1 className="w-[25%] text-center   ">
                  <span
                    className={`px-7 ${
                      courses.isPublished ? "bg-green-600" : "bg-blue-500"
                    } py-2 rounded text-white font-semibold shadow`}
                  >
                    {courses.isPublished ? "published" : "draft"}
                  </span>
                </h1>
                <Link to={`/admin/course/${courses._id}`} className="w-[25%] text-right flex items-center justify-end pr-3 text-xl text-black ">
                  <span>
                    <TiEdit />
                  </span>
                </Link>
              </div>
            ))}

            <h1 className="text-center mt-4">A list of your recent courses.</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
