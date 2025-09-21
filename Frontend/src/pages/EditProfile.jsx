import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../reduxtoolkit/reducer/createSlice";

const EditProfile = () => {
  const { user } = useSelector((store) => store.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: user.fullname || "",
    email: user.email || "",
    description: user.description || "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageUrl") {
      setInput((prev) => ({ ...prev, file: files[0] }));
    } else {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.name);
    formData.append("email", input.email);
    formData.append("description", input.description);
    if (input.file) {
      formData.append("imageUrl", input.file);
    }

    const getUpdated = async () => {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/auth/update/${user.id}`,
          formData,
          {
            withCredentials: true,
          }
        );

        const responseData = response.data.user;
        dispatch(setUser(responseData));
        navigate(-1);
      } catch (error) {
        console.error(error);
      }
    };

    getUpdated();
  };

  return (
    <div className="w-full h-screen   flex items-center   justify-center fixed top-0 left-0  ">
      <div className="md:w-[60vh] w-[90%] relative  flex-col bg-zinc-50 rounded-lg h-[50vh] shadow p-6 flex items-center justify-cente ">
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

        <form className="w-full p-2" onSubmit={handleSubmit}>
          <div className="w-full flex gap-3 items-center mt-6  ml-9.5">
            <label className="text-md capitalize font-semibold tracking-tight">
              name
            </label>
            <input
              className="border-1 capitalize border-zinc-300 outline-none px-2  rounded py-1.5 w-[75%] md:w-[76%] "
              type="text"
              placeholder="name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex gap-3 items-center mt-2 ml-10.5">
            <label className="text-md capitalize font-semibold tracking-tight">
              email
            </label>
            <input
              className="border-1 border-zinc-300 outline-none px-2  rounded py-1.5 w-[76%] "
              type="email"
              placeholder="email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex gap-3 items-center mt-2 ">
            <label className="text-md capitalize font-semibold tracking-tight">
              description
            </label>
            <input
              className="border-1 px-2 rounded border-zinc-300 outline-none py-1.5  md:w-full"
              type="text"
              placeholder=""
              name="description"
              value={input.description}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex gap-3 items-center mt-2 ml-7">
            <label className="text-md capitalize font-semibold tracking-tight">
              picture
            </label>
            <input
              className="border-1 border-zinc-300 outline-none px-2 rounded py-1.5 w-[77%]"
              type="file"
              name="imageUrl"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button
            className=" py-2 px-5 mt-2.5 md:mt-6 ml-50 md:ml-70 rounded cursor-pointer capitalize font-semibold text-white bg-emerald-500"
            type="submit"
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
