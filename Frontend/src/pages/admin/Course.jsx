import React, { useEffect } from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AiFillAccountBook } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  document.title = "LMS | Admin-Course";
  const dispatch = useDispatch()

  const getreadapi = async () => {
    try{
      const res = await axios.get("http://localhost:3000/course/publishs/", {
        withCredentials: true
      })
      dispatch()
    }catch(error){
      alert("not fetch data")
    }
  }
  
  useEffect(()=> {
    getreadapi()
  }, [])

  const data = [
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736318194/gdbbqendirhfmu9j8y5o.png",
      context: "error debugging fixed",
      price: "599",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736342831/g0tsjh20grikv3elufwz.jpg",
      context: "HTML Full Course For Beginners",
      price: "499",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736407191/l1gq2ktijx27krd5gwsg.jpg",
      context: "node js tutorial",
      price: "399",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736408421/vdb6ubcbyzfw2ptaimiu.png",
      context: "express js tutorial",
      price: "299",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/rohitsinghcloud/image/upload/v1736524513/rmwrv6xafqtedylq6sbk.jpg",
      context: "ms excel js tutorial",
      price: "199",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen  flex  ">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] min-h-[90vh]  mt-16 p-5  ">
          <Link
            to="/admin/course/create"
            className="mt-4 block w-fit px-6 py-3 bg-yellow-600 rounded shadow capitalize tracking-tight font-semibold text-white"
          >
            create course
          </Link>
          <div className="w-full capitalize text-zinc-400 mt-12 ">
            <div className="py-2 px-3 rounded w-full flex items-center hover:bg-zinc-100 justify-between">
              <h1 className="w-[25%] ">course</h1>
              <h1 className="w-[25%] text-center ">price</h1>
              <h1 className="w-[25%] text-center ">ststus</h1>
              <h1 className="w-[25%] text-right ">action</h1>
            </div>

            {data.map((d, i) => (
              <div
                key={i}
                className="py-1 capitalize px-3 mt-2 rounded w-full flex items-center hover:bg-zinc-100  justify-between"
              >
                <div className="w-[25%]  flex items-center gap-4 ">
                  <img
                    className="object-center w-[15vh] h-[9vh] rounded "
                    src={d.imageUrl}
                  />
                  <p className="text-black">{d.context}</p>
                </div>
                <h1 className="w-[25%] text-center text-black ">{d.price}</h1>
                <h1 className="w-[25%] text-center   ">
                  <span className="bg-green-600 px-7 py-2 rounded text-white font-semibold shadow">
                    published
                  </span>
                </h1>
                <h1 className="w-[25%] text-right flex items-center justify-end pr-3 text-2xl text-black ">
                  <span>
                    <AiFillAccountBook />
                  </span>
                </h1>
              </div>
            ))}

            <h1 className="text-center mt-4">A list of your recent courses.</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
