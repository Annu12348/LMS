import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CourseTab = () => {
  
  return (
    <div className="mt-5 py-5 px-5  bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-md tracking-tight leading-none">
          <h1 className="font-bold mb-0.5">Basic Course Information</h1>
          <p>Make changes to your courses here. Click save when you're done.</p>
        </div>
        <div>
          <button className="bg-black text-white px-5 py-2 rounded mr-5 capitalize font-semibold">
            unPublished
          </button>
          <button className="bg-red-500 px-5 py-2 rounded  capitalize font-semibold text-white">
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
        />
      </div>
      <div className="w-full mt-3 flex flex-col">
        <label className="font-semibold capitalize">SubTitle</label>
        <input
          className="border-1 outline-none px-3 py-2 border-zinc-300 rounded capitalize text-zinc-500"
          type="text"
          placeholder="error debuggingging fixed"
        />
      </div>
      <div className="w-full mt-3 flex flex-col">
        <label className="font-semibold capitalize">description</label>
        <input
          className="border-1 outline-none px-3 py-2 border-zinc-300 rounded capitalize text-zinc-500"
          type="text"
          placeholder="description"
        />
      </div>
      <div className="mt-4 flex gap-15">
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">category</label>
          <select className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none">
            <option value="">Category</option>
            <option value="Node Js">Node Js</option>
            <option value="Java">Java</option>
            <option value="PHP">PHP</option>
            <option value="Phython">Phython</option>
            <option value="mern_stack">Mern Stack Developer</option>
            <option value="front-end-developer">Front-End-Developer</option>
            <option value="react-developer">React-Developer</option>
            <option value="javascript-developer">JavaScript-Developer</option>
            <option value="back-end-developer">Back-End-Developer</option>
          </select>
        </div>
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">courseLevel</label>
          <select className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none">
            <option value="">Course Level</option>
            <option value="Node Js">Node Js</option>
            <option value="Java">Java</option>
            <option value="PHP">PHP</option>
            <option value="Phython">Phython</option>
            <option value="mern_stack">Mern Stack Developer</option>
            <option value="front-end-developer">Front-End-Developer</option>
            <option value="react-developer">React-Developer</option>
            <option value="javascript-developer">JavaScript-Developer</option>
            <option value="back-end-developer">Back-End-Developer</option>
          </select>
        </div>
        <div className="flex flex-col w-[28%]">
          <label className="font-semibold capitalize">courseLevel</label>
          <input
            className="px-3 py-2 border mt-1.5 rounded border-zinc-300 outline-none text-zinc-500"
            type="Number"
            placeholder="399"
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
        />
      </div>
      <img
        className="w-[27%] mt-5 rounded  h-[25vh] object-center "
        src="https://ik.imagekit.io/4wk1vphpr/image/image-file1754957159047_NDaFJY50y.jpg"
      />
      <Link
        to="/admin/course"
        className="font-semibold capitalize bg-red-500 text-white px-4 py-2 rounded mt-5 mr-5 "
      >
        cancel
      </Link>
      <button className="font-semibold capitalize bg-black text-white px-4 py-2 rounded mt-5 mr-5 ">
        save
      </button>
    </div>
  );
};

export default CourseTab;
