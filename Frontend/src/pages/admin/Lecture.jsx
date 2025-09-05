import React, { useEffect, useState } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLecture } from "../../reduxtoolkit/reducer/LectureSlice";

const Lecture = () => {
  const params = useParams();
  const courseId = params.courseId;
  const dispatch = useDispatch();
  const { lecture } = useSelector((store) => store.lecture);
  const [lecturs, setLecturs] = useState({ lectureTitle: "" });

  const clickedHandlers = () => {
    const postcreateapi = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/course/${courseId}/lecture/create`,
          lecturs,
          { withCredentials: true }
        );

        setLecturs(res.data.lecture);
        setLecturs({ lectureTitle: "" });
        await getfetchapi();
      } catch (error) {
        console.log(error);
      }
    };
    postcreateapi();
  };

  const getfetchapi = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/course/${courseId}/lecture/read`,
        { withCredentials: true }
      );
      dispatch(setLecture(response.data.lectures));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getfetchapi();
  }, [courseId]);
  return (
    <>
      <div className="w-full min-h-screen  flex  overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[10vh]  mt-16 p-5  ">
          <h1 className="text-xl font-semibold capitalize tracking-tight leading-none">
            lets add <span className="text-blue-400">lectures</span>
          </h1>
          <p className="text-md mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
            necessitatibus fugit vel distinctio architecto, ut ratione rem nobis
            eaque?
          </p>

          <div className="mt-10 flex flex-col">
            <label className="text-md font-semibold capitalize tracking-tight leading-none">
              title
            </label>
            <input
              className="mt-2 border-1 w-[90%] px-2 py-2 capitalize rounded border-zinc-300 outline-none text-zinc-500"
              type="text"
              placeholder="your lecture name"
              value={lecturs.lectureTitle}
              onChange={(e) =>
                setLecturs({ ...lecturs, lectureTitle: e.target.value })
              }
            />
          </div>
          <div className="mt-7 flex gap-10">
            <button className="bg-white px-4 py-4 rounded hover:bg-zinc-100 font-semibold capitalize tracking-tight leading-none ">
              back to course
            </button>
            <button
              onClick={clickedHandlers}
              className="bg-black text-white px-4 py-4 rounded hover:bg-blue-500 font-semibold capitalize tracking-tight leading-none "
            >
              create lecture
            </button>
          </div>
          <div className="mt-7 ">
            {lecture?.length > 0
              ? lecture.map((lecture, index) => (
                  <div
                    key={lecture._id}
                    className="px-3 py-3 w-[90%] mt-3 bg-white rounded flex items-center justify-between"
                  >
                    <h1 className="text-md font-semibold capitalize leading-none tracking-tight ">
                      leature - 1 :{" "}
                      <span className="font-normal">
                        {lecture.lectureTitle}
                      </span>
                    </h1>

                    <Link
                      to={`/admin/course/${courseId}/lecture/${lecture._id}`}
                    >
                      <span className="text-zinc-600 text-xl">
                        <TiEdit />
                      </span>
                    </Link>
                  </div>
                ))
              : <h1 className="text-md capitalize font-semibold text-zinc-300">no lectures found</h1>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lecture;
