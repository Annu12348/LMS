import React from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { TiEdit } from "react-icons/ti";

const Lecture = () => {
  return (
    <>
      <div className="w-full min-h-screen  flex  overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] h-[10vh]  mt-16 p-5  ">
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
            />
          </div>
          <div className="mt-7 flex gap-10">
            <button className="bg-white px-4 py-4 rounded hover:bg-zinc-100 font-semibold capitalize tracking-tight leading-none ">
              back to course
            </button>
            <button className="bg-black text-white px-4 py-4 rounded hover:bg-blue-500 font-semibold capitalize tracking-tight leading-none ">
              create lecture
            </button>
          </div>
          <div className="mt-7 ">
            <div className="px-3 py-3 w-[90%] bg-white rounded flex items-center justify-between">
              <h1 className="text-md font-semibold capitalize leading-none tracking-tight ">
                leature - 1 : introduction to mern stack
              </h1>
              <span className="text-zinc-600 text-xl">
                <TiEdit />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lecture;
