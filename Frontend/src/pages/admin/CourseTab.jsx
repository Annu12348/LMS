import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setSingleCourse } from "../../reduxtoolkit/reducer/CourseSlice";

const CourseTab = () => {
  const params = useParams();
  const id = params.courseId;
  const { singleCourse } = useSelector((store) => store.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getcourseById = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/course/${id}`, {
        withCredentials: true,
      });
      dispatch(setSingleCourse(response.data.course));
    } catch (error) {
      alert("No single courses");
    }
  };

  useEffect(() => {
    getcourseById();
  }, [id]);

  const clickedHandler = () => {
    const formData = new FormData();

    formData.append("courseTitle", singleCourse?.courseTitle || "");
    formData.append("subTitle", singleCourse?.subTitle || "");
    formData.append("category", singleCourse?.category || "");
    formData.append("courseLevel", singleCourse?.courseLevel || "");
    formData.append("coursePrice", singleCourse?.coursePrice || 0);
    formData.append("description", singleCourse?.description || "");
    formData.append("isPublished", singleCourse?.isPublished || false);

    if (singleCourse.file) {
      formData.append("imageCourseUrl", singleCourse?.file);
    }

    const putadminCourseUpdate = async () => {
      try {
        const res = await axios.put(
          `${import.meta.env.VITE_API_URL}/course/${id}`,
          formData,
          {
            withCredentials: true,
          }
        );
        navigate(-1);
      } catch (error) {
        alert("update admin course data not");
      }
    };
    putadminCourseUpdate();
  };

  const onClickHandler = () => {
    try {
      const courseDeleteApi = async () => {
        const resposes = await axios.delete(
          `${import.meta.env.VITE_API_URL}/course/${id}`,
          { withCredentials: true }
        );

        navigate(-1);
      };
      courseDeleteApi();
    } catch (error) {
      alert("course deleted successfully");
    }
  };

  const toggelOnClickedHandler = () => {
    try {
      const toggelIspublishedCourseApi = async () => {
        const res = await axios.patch(
          `${import.meta.env.VITE_API_URL}/course/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        const update = res.data.course;
        dispatch(setSingleCourse({ ...singleCourse, isPublished: update }));
        console.log(update);
      };
      toggelIspublishedCourseApi();
    } catch (error) {
      alert("no toggel isPublished api");
    }
  };

  return (
    <div className="mt-5 py-5 px-5  bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-md tracking-tight leading-none">
          <h1 className="font-bold mb-0.5">Basic Course Information</h1>
          <p>Make changes to your courses here. Click save when you're done.</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={toggelOnClickedHandler}
            className="bg-black px-5 py-2 cursor-pointer rounded  capitalize font-semibold text-white"
          >
            {singleCourse.isPublished ? "Published" : "unPublished"}
          </button>
          <button
            onClick={onClickHandler}
            className="bg-red-500 px-5 cursor-pointer py-2 rounded  capitalize font-semibold text-white"
          >
            remove course
          </button>
        </div>
      </div>
      <div className="w-full mt-12 flex flex-col">
        <label className="font-semibold capitalize">courseTitle</label>
        <input
          className="border-1 px-3 outline-none py-2 border-zinc-300 rounded capitalize text-zinc-500 "
          type="text"
          placeholder="error debuggingging fixed"
          value={singleCourse?.courseTitle || ""}
          onChange={(e) =>
            dispatch(
              setSingleCourse({ ...singleCourse, courseTitle: e.target.value })
            )
          }
        />
      </div>
      <div className="w-full mt-3 flex flex-col">
        <label className="font-semibold capitalize">SubTitle</label>
        <input
          className="border-1 outline-none px-3 py-2 border-zinc-300 rounded capitalize text-zinc-500"
          type="text"
          placeholder="error debuggingging fixed"
          value={singleCourse?.subTitle || ""}
          onChange={(e) =>
            dispatch(
              setSingleCourse({ ...singleCourse, subTitle: e.target.value })
            )
          }
        />
      </div>
      <div className="w-full mt-3 flex flex-col">
        <label className="font-semibold capitalize">description</label>
        <input
          className="border-1 outline-none px-3 py-2 border-zinc-300 rounded capitalize text-zinc-500"
          type="text"
          placeholder="description"
          value={singleCourse?.description || ""}
          onChange={(e) =>
            dispatch(
              setSingleCourse({ ...singleCourse, description: e.target.value })
            )
          }
        />
      </div>
      <div className="mt-4 flex gap-15">
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">category</label>
          <select
            value={singleCourse?.category || ""}
            onChange={(e) =>
              dispatch(
                setSingleCourse({ ...singleCourse, category: e.target.value })
              )
            }
            className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none"
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
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">courseLevel</label>
          <select
            onChange={(e) =>
              dispatch(
                setSingleCourse({
                  ...singleCourse,
                  courseLevel: e.target.value,
                })
              )
            }
            value={singleCourse?.courseLevel || ""}
            className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none"
          >
            <option value="">Course Level</option>
            <option value="Biginner">Biginner</option>
            <option value="Middium">Middium</option>
            <option value="Advance">Advance</option>
          </select>
        </div>
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">coursePrice</label>
          <input
            className="px-3 py-2 border mt-1.5 rounded border-zinc-300 outline-none text-zinc-500"
            type="Number"
            placeholder="0"
            value={singleCourse?.coursePrice || ""}
            onChange={(e) =>
              dispatch(
                setSingleCourse({
                  ...singleCourse,
                  coursePrice: e.target.value,
                })
              )
            }
          />
        </div>


        
      </div>
      <div className="flex flex-col mt-4">
        <label className="font-semibold tracking-tight leading-none ">
          Course Thumbnail
        </label>
        <input
          className="border w-[20%] px-2 py-1 rounded border-zinc-400 mt-2 "
          type="file"
          onChange={(e) =>
            dispatch(
              setSingleCourse({ ...singleCourse, file: e.target.files[0] })
            )
          }
        />
      </div>
      <img
        className="w-[27%] mt-5 rounded  h-[25vh] object-center "
        src={
          singleCourse?.imageCourseUrl ||
          "https://media.istockphoto.com/id/899881854/photo/nice-mountains-in-kyrgyzstan-country.jpg?s=612x612&w=0&k=20&c=gtsUw4W1aILn09irfxPm_1Olt6DU4cwu9OGd01qgy8g="
        }
      />
      <Link
        to="/admin/course"
        className="font-semibold cursor-pointer capitalize bg-red-500 text-white px-4 py-2 rounded mt-5 mr-5 "
      >
        cancel
      </Link>
      <button
        onClick={clickedHandler}
        className="font-semibold capitalize cursor-pointer bg-black text-white px-4 py-2 rounded mt-5 mr-5 "
      >
        save
      </button>
    </div>
  );
};

export default CourseTab;
