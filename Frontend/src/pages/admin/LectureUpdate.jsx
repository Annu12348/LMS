import React, { useEffect, useState } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleLectureCourse } from "../../reduxtoolkit/reducer/LectureSlice";
import { toast } from "react-toastify";

const LectureUpdate = () => {
  document.title = "LMS | Admin-Dashboard | course | lecture | lectureupdate";
  const params = useParams();
  const courseId = params.courseId;
  const lectureId = params.lectureId;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { SingleLectureCourse } = useSelector((store) => store.lecture);
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => {
    try {
      const lectureDeletedApi = async () => {
        const res = await axios.delete(
          `${
            import.meta.env.VITE_API_URL
          }/course/${courseId}/lecture/${lectureId}`,
          { withCredentials: true }
        );
        navigate(-1);
      };
      lectureDeletedApi();
    } catch (error) {
      if (error.res && error.res.data && error.res.data.message) {
        toast.error(error.res.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("something went wrong, please try again later");
      }
    }
  };

  const SinglelLectureCoursesApi = async () => {
    try {
      const responsess = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/course/${courseId}/lecture/${lectureId}`,
        { withCredentials: true }
      );
      dispatch(setSingleLectureCourse(responsess.data.lecture));
    } catch (error) {
      if (
        error.responsess &&
        error.responsess.data &&
        error.responsess.data.message
      ) {
        toast.error(error.responsess.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong, please try again latter");
      }
    }
  };

  useEffect(() => {
    SinglelLectureCoursesApi();
  }, [lectureId, courseId]);

  const onClickHandlers = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("lectureTitle", SingleLectureCourse.lectureTitle || "");
      formData.append(
        "ispreviewFree",
        SingleLectureCourse.ispreviewFree || false
      );
      if (SingleLectureCourse.file) {
        formData.append("video", SingleLectureCourse.file);
      }

      const upadeLectureCourseApi =  async () => {
        const respons = await axios.put(
          `${
            import.meta.env.VITE_API_URL
          }/course/${courseId}/lecture/${lectureId}`,
          formData,
          {
            withCredentials: true,
          }
        );
        navigate(-1);
        toast.success(respons.data.message);
      };
      await upadeLectureCourseApi();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen   flex  overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="md:w-[81%] w-full min-h-[10vh]   mt-16 md:p-8 p-2  ">
          <div className="flex items-center gap-4 ">
            <Link
              to={`/admin/course/${courseId}/lecture`}
              className="mt-1 shadow px-2.5 py-2.5 hover:bg-zinc-100 rounded-full bg-white"
            >
              <GoArrowLeft />
            </Link>
            <h1 className="text-xl capitalize font-bold italic">
              update your lecture
            </h1>
          </div>
          <div className="bg-white py-4 px-4 md:mt- mt-5 rounded">
            <div className="md:flex items-start justify-between">
              <div>
                <h1 className="text-xl font-semibold capitalize tracking-tight leading-none">
                  edit lecture
                </h1>
                <p className="text-zinc-400 tracking-tight leading-none mt-1 text-sm">
                  Make changes and click save when done.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClickHandler}
                  className="mt-2 bg-red-500 cursor-pointer px-4  py-3 rounded shadow capitalize font-semibold text-white tracking-tight leading-none"
                >
                  remove lecture
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-5 ">
              <label className="tect-md  font-semibold capitalize tracking-tight leading-none">
                lecture title
              </label>
              <input
                className="border-1 outline-none text-zinc-400 capitalize px-2 py-2 mt-1 tracking-tight leading-none rounded border-zinc-200 "
                type="text"
                placeholder="lecture title"
                value={SingleLectureCourse?.lectureTitle || ""}
                onChange={(e) =>
                  dispatch(
                    setSingleLectureCourse({
                      ...SingleLectureCourse,
                      lectureTitle: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="flex flex-col mt-3 ">
              <label className="tect-md font-semibold capitalize tracking-tight leading-none">
                lecture images
              </label>
              <input
                className="border-1 w-full outline-none text-zinc-400 capitalize px-2 md:w-[25%] py-2 mt-1 tracking-tight leading-none rounded border-zinc-200 "
                type="file"
                accept="video/*"
                placeholder="Lecture video"
                onChange={(e) =>
                  dispatch(
                    setSingleLectureCourse({
                      ...SingleLectureCourse,
                      file: e.target.files[0],
                    })
                  )
                }
              />
            </div>
            <div className="flex mt-2 flex-col w-[28%]">
              <label className="font-semibold capitalize">Paid or Free</label>
              <select
                value={
                  SingleLectureCourse?.ispreviewFree === true
                    ? "free"
                    : SingleLectureCourse?.ispreviewFree === false
                    ? "paid"
                    : ""
                }
                onChange={(e) =>
                  dispatch(
                    setSingleLectureCourse({
                      ...SingleLectureCourse,
                      ispreviewFree: e.target.value === "free" ? true : false,
                    })
                  )
                }
                className="border-1 tracking-tight leading-none border-zinc-300 text-zinc-600 md:px-3 px-1 font-semibold py-2 rounded outline-none capitalize w-[48.5vh]"
              >
                <option value="">Select Paid or Free</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <button
              onClick={onClickHandlers}
              className="mt-4 px-3 flex items-center justify-center py-3.5 cursor-pointer hover:bg-blue-500 bg-black rounded shadow text-white capitalize font-semibold tracking-tight leading-none"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3 flex-row-reverse">
                  <div className="w-5 h-5 border-b-3 rounded-full  animate-spin"></div>
                  <h1>update lecture</h1>
                </div>
              ) : (
                "update  lecture"
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LectureUpdate;
