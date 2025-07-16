import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Courses = () => {
  const coursesData = [
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736314212/jfpghsox60pc7g7d6rgb.png",
      title: "MongoDb for Experts",
      description: "Hey i am subtitle of mongodb tutorial",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736318194/gdbbqendirhfmu9j8y5o.png",
      title: "Error Debugging fixed",
      description: "this is the subtitle for error debugging fixing course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736342831/g0tsjh20grikv3elufwz.jpg",
      title: "HTML Full Course For Beginners",
      description: "Hey this is the subtitle for the html course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736407191/l1gq2ktijx27krd5gwsg.jpg",
      title: "Node Js Tutorial",
      description: "hey this is the subtitle for trial course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736408421/vdb6ubcbyzfw2ptaimiu.png",
      title: "Express Js Tutorial",
      description: "hey this is the subtitle for express tutorial course",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736524513/rmwrv6xafqtedylq6sbk.jpg",
      title: "Ms Excel for Beginners",
      description: "hey this is the subtitle for Exel tutorial course",
    },
  ];
  return (
    <div className="w-full min-h-[91.4vh] bg-[#e8ecf3]">
      <Navigation />
      <div className="w-full mt-[8.6vh] min-h-[91.4vh] py-9 flex flex-col gap-3 items-center   px-6 ">
        <h1 className="text-3xl tracking-tight leading-none font-semibold">
          Our Courses
        </h1>
        <p className="text-md text-zinc-500 tracking-tight leading-none font-semibold">
          Explore our curated courses to boost your skills and career. Whether
          you're a beginner or an expert, we have something for everyone.
        </p>
        <div className="px-5 py-9 w-full flex gap-8 justify-center flex-wrap items-center min-h-[80vh]  ">
          {coursesData.map((courses, index) => {
            return (
              <div
                key={index}
                className=" bg-white w-[55vh] rounded-lg  shadow"
              >
                <div className="w-[55vh] bg-white h-[28vh] overflow-hidden rounded-t-lg ">
                  <img
                    className="w-full h-full object-fit-cover  "
                    src={courses.imageUrl}
                    alt="show images"
                  />
                </div>
                <div className="px-3 py-4">
                  <h1 className="text-md tracking-tight font-semibold leading-none ">
                    {courses.title}
                  </h1>
                  <h1 className="text-sm tracking-tight mt-4 mb-2 leading-none ">
                    {courses.description}
                  </h1>
                  <button className="mt-3 bg-black text-white px-4 py-2 rounded shadow">
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
