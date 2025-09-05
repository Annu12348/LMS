import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((store) => store.authentication);
  const { publisheds } = useSelector((store) => store.course);

  return (
    <div className="w-full min-h-screen bg-zinc-200 ">
      <Navigation />
      <div className="w-full min-h-[90.8vh] py-10 md:px-50 mt-10 px-2  md:mt-16 ">
        <div className="p-6 rounded-lg bg-zinc-100 shadow md:flex gap-7 items-center  ">
          <div className="w-[20vh] rounded-full  h-[20vh] border-2 border-blue-500  overflow-hidden md:ml-0 ml-19 ">
            <img
              className="object-cover w-full h-full"
              src={
                user.imageUrl ||
                `data:image/jpeg;base64,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`
              }
            />
          </div>
          <div>
            <h1 className="md:text-4xl text-2xl md:mt-0 mt-2 text-center md:text-left capitalize text-blue-500 font-bold ">
              welcome, {user.fullname}
            </h1>
            <h1 className=" mt-2 text-center md:text-left">
              <span className="font-bold capitalize">email : </span>{" "}
              {user.email}
            </h1>
            <h1 className="text-center md:text-left  capitalize">
              <span className="font-bold capitalize">role : </span> {user.role}
            </h1>
            <h1 className="text-center md:text-left">
              <span className="font-bold capitalize">bio : </span>{" "}
              {user.description || "Add your bio"}
            </h1>
            <Link to="/profile/editprofile">
              <button className="px-5 md:ml-0 ml-24 capitalize font-semibold text-white py-2 mt-3 rounded shadow bg-green-500 ">
                edit profile
              </button>
            </Link>
          </div>
        </div>

        <Outlet />

        <div className="py-5 px-6 bg-zinc-100 shadow mt-5 rounded  ">
          <h1 className="text-xl capitalize font-bold ">
            Your Enrolled Courses
          </h1>
          <div className="w-full py-2 flex gap-13 mt-3 items-center justify-center flex-wrap">
            {publisheds && publisheds.length > 0 ? (
              publisheds.map((profile) => (
                <div
                  key={profile._id}
                  className="border-1 border-white rounded w-[45vh]  overflow-hidden   shadow "
                >
                  <div className="bg-white w-full h-[23vh] rounded ">
                    <img
                      className="object-cover w-full h-full"
                      src={profile?.imageCourseUrl || ""}
                      alt="image show"
                    />
                  </div>
                  <div className="py-2 px-2 pb-4">
                    <h1 className="font-bold text-xl capitalize">
                      {profile?.courseTitle || ""}
                    </h1>
                    <p className="text-sm leading-none font-serif mt-2">
                      {profile.description}
                    </p>
                    <Link to={`/courses/${profile._id}`} className="px-3 block w-fit py-2 capitalize font-semibold shadow bg-emerald-800 text-white mt-3 rounded">
                      view course
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl font-semibold text-zinc-400 capitalize ">
                no courses found
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
