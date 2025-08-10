import React from "react";

const CourseTab = () => {
  return (
    <div className="mt-5 py-5 px-5 bg-white rounded-lg">
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
      <div>
        <div>
          <label></label>
          <select
              
              className="border-1 border-zinc-300 text-zinc-600 px-3 py-2 rounded mt-1.5 outline-none"
              
            >
              <option value="">Select category</option>
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
      </div>
    </div>
  );
};

export default CourseTab;
