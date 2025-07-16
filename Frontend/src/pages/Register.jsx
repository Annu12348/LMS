import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
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
            <form>
              <div className="flex flex-col ">
                <label className="text-md font-semibold capitalize ">
                  full name
                </label>
                <input
                  className="border capitalize outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="text"
                  required
                  placeholder="enter your full name"
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-md font-semibold capitalize ">
                  email addresh
                </label>
                <input
                  className="border capitalize outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="email"
                  required
                  placeholder="enter email"
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-md font-semibold capitalize ">
                  password
                </label>
                <input
                  className="border capitalize outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="password"
                  required
                  placeholder="enter password"
                />
              </div>
              <div className=" mt-3 ">
                <h1 className="text-sm font-semibold">Role</h1>
                <label>
                  <input type="radio" name="gender" value="male" /> student
                </label>
                <label>
                  <input
                    className="ml-10"
                    type="radio"
                    name="gender"
                    value="female"
                  />{" "}
                  Instructor
                </label>
              </div>
              <input
                className="w-full bg-blue-500 flex items-center justify-center font-semibold capitalize text-xl py-2 rounded text-[#d1d5db] mt-4 "
                type="submit"
                value='signup'
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
