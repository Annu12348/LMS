import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios"

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      fullname: "",
      email: "",
      password: "",
      role: "",
    })


    const postRegister = () => {
      axios.post("http://localhost:3000/auth/register", user, {
        withCredentials: true,
      })
        .then((response) => {
          navigate("/")
        })
        .catch((error) => {
          alert("Registration failed. Please try again.");
        });
    }

  
      postRegister()
  
  };
  return (
    <div className="w-full min-h-[91.4vh] bg-[#F3F4F6]">
      <Navigation />
      <div className="w-full mt-[8.6vh]  h-[91.4vh] flex items-center justify-center   px-6  ">
        <div className="bg-white px-5 py-2 rounded-lg w-[30%] shadow flex items-center justify-center flex-col">
          <h1 className="text-xl mt-3 font-semibold tracking-tight leading-none ">
            Create Your Account
          </h1>
          <p className="mt-5 text-md">Join us today! It's quick and easy.</p>
          <div className="w-full mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ">
                <label className="text-md font-semibold capitalize ">
                  full name
                </label>
                <input
                  className="border outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="text"
                  name="fullname"
                  value={user.fullname}
                  onChange={(e) =>
                    setUser({ ...user, fullname: e.target.value })
                  }
                  placeholder="Enter Your Fullname"
                  required
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-md font-semibold capitalize ">
                  email addresh
                </label>
                <input
                  className="border outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="email"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-md font-semibold capitalize ">
                  password
                </label>
                <input
                  className="border outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="password"
                  placeholder="Enter Password"
                  required
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className=" mt-3 ">
                <h1 className="text-sm font-semibold">Role</h1>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={user.role === "Student"}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                  Student
                </label>
                <label>
                  <input
                    className="ml-10"
                    type="radio"
                    name="role"
                    value="Instructor"
                    checked={user.role === "Instructor"}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                  Instructor
                </label>
              </div>
              <input
                className="w-full bg-blue-500 flex items-center justify-center font-semibold capitalize text-xl py-2 rounded text-[#d1d5db] mt-4 "
                type="submit"
                value="signup"
              />
            </form>
          </div>
          <h1 className="my-4">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Log in
            </Link>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
