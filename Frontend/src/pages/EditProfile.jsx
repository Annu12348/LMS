import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { user } = useSelector((store) => store.authentication);
  const [input, setInput] = useState({
    name: user.fullname,
    description: user.description,
  });
  return (
    <div className="w-full h-screen flex items-center  justify-center fixed top-0 left-0  ">
      <div className="w-[60vh] relative flex-col bg-white rounded-lg h-[50vh] shadow p-6 flex items-center justify-cente ">
        <Link
          to="/profile"
          className="text-xl font-semibold right-3 absolute top-3 hover:text-zinc-500"
        >
          <IoMdClose />
        </Link>
        <h1 className="font-extrabold mt-2 leading-none capitalize">
          edit profile
        </h1>
        <p className="mt-1 text-sm font-semibold">
          Make changes to your profile here.
        </p>
        <div className="w-full flex gap-3 items-center mt-9 ml-16.5">
          <label className="text-md capitalize font-semibold tracking-tight">
            name
          </label>
          <input
            className="border-1 capitalize border-zinc-300 outline-none px-2  rounded py-1.5 w-[76%] "
            type="text"
            placeholder="name"
            name="name"
            value={input.name}
          />
        </div>
        <div className="w-full flex gap-3 items-center mt-5 ">
          <label className="text-md capitalize font-semibold tracking-tight">
            description
          </label>
          <input
            className="border-1 px-2 rounded border-zinc-300 outline-none py-1.5 w-full"
            type="text"
            placeholder=""
            name="description"
            value={input.description}
          />
        </div>
        <div className="w-full flex gap-3 items-center mt-5 ml-14">
          <label className="text-md capitalize font-semibold tracking-tight">
            picture
          </label>
          <input
            className="border-1 border-zinc-300 outline-none px-2 rounded py-1.5 w-[77%]"
            type="file"
          />
        </div>
        <Link to='/profile'>
        <button className=" py-2 px-5 mt-6 ml-70 rounded cursor-pointer capitalize font-semibold text-white bg-emerald-500">
          update
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
