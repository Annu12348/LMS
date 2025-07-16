import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="w-full min-h-[91.4vh] bg-[#F3F4F6]">
      <Navigation />
      <div className="w-full mt-[8.6vh]  h-[91.4vh] flex items-center justify-center   px-6  ">
        <div className="bg-white px-5 py-2 rounded-lg w-[30%] shadow flex items-center justify-center flex-col">
          <h1 className="text-xl mt-3 font-semibold tracking-tight leading-none ">
            Welcome Back
          </h1>
          <p className="mt-5 text-md">Please login to your account.</p>
          <div className="w-full mt-8">
            <form>
              <div className="flex flex-col mt-2 ">
                <label className="text-md font-semibold capitalize ">
                  email addresh
                </label>
                <input
                  className="border outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
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
                  className="border outline-none px-2 py-2 text-zinc-500 border-zinc-300 rounded  "
                  type="password"
                  required
                  placeholder="enter password"
                />
              </div>
            
              <input
                className="w-full bg-blue-500 flex items-center justify-center font-semibold capitalize text-xl py-2 rounded text-[#d1d5db] mt-4"
                type="submit"
                value="Login"
              />
            
                
               
            </form>
            <div className="w-[100%] h-[4vh]  mt-5 flex items-center justify-between ">
              <div className="w-[46%] bg-zinc-400 h-[1px] "></div>
              <h1 className="-mt-1 text-md uppercase text-zinc-500">or</h1>
              <div className="w-[46%] bg-zinc-400 h-[1px] -mr-2"></div>
              <div></div>
            </div>
          </div>
          <h1 className="my-4">
            Don't have an account?{" "}
            <Link className="text-blue-500" to="/register">
              Signup
            </Link>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
