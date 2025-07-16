import React from "react";
import Navigation from "../components/Navigation";
import { CiSearch } from "react-icons/ci";
import CountUp from "react-countup";
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="w-full h-[91.4vh] bg-[#1E293B]">
        <Navigation />
        <div className="w-full mt-[8.6vh] h-[100%] flex px-6 ">
          <div className="w-[50%] h-full  flex items-start flex-col justify-center  ">
            <h1 className="text-5xl font-bold text-[#d1d5db] tracking-tight leading-none ">
              Explore Our <span className="text-blue-500 ">14000+</span> <br />
              Online courses for all
            </h1>
            <p className="mt-9 text-xl tracking-tight  text-[#d1d5db] w-[90%] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur adipiscing elit tempor ut labore
            </p>
            <div className="bg-[#d1d5db] flex items-center rounded mt-8 ">
              <input
                className="px-3 py-3 outline-none text-zinc-600 capitalize  w-[40vh] "
                type="text"
                placeholder="search your courses here..."
              />
              <h1 className="flex items-center bg-blue-500 rounded h-full px-5 text-[#d1d5db] font-semibold capitalize text-xl gap-2">
                search
                <span className="text-2xl">
                  <CiSearch />
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[50%] relative h-full  flex items-end justify-center    ">
            <img
              className="w-[80%] h-[95%] object-cover  "
              src="./d.png"
              alt="images"
            />
            <div className=" bg-white top-10 left-19 rounded px-2 py-2 absolute flex items-center gap-3">
              <div className="w-12 rounded-full h-12 bg-zinc-400 overflow-hidden ">
              <img className="w-[100%] h-[100%] object-cover "  src="./d1.png" />
              </div>
              <h1 className="font-bold">
                <CountUp end={684} /> + <br />
                <i className="text-zinc-500 ">Certified Students</i>
              </h1>
            </div>
            <div className=" bg-white top-50 right-10 rounded px-2 py-2 absolute flex items-center gap-3">
              <div className="w-12 rounded-full h-12   ">
              <img className="w-full h-full object-center "  src="https://imgs.search.brave.com/uCyoDfqbUjxX6jC7v7f2JhuMIVT5f_pk68rpwH0EBJc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTIyMjUvMTIy/MjU4ODEucG5n" alt="userimage"></img>
              </div>
              <h1 className="font-bold">
                <CountUp end={4500} /> + <br />
                <i className="text-zinc-500 ">Active Students</i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
