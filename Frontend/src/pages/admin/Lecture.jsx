import React from "react";
import SizeNavigation from "./SizeNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Lecture = () => {
  return (
    <>
      <div className="w-full min-h-screen  flex  overflow-y-auto overflow-x-hidden">
        <Navigation />
        <SizeNavigation />
        <div className="w-[81%] h-[10vh]  mt-16 p-5  "></div>
      </div>
      <Footer />
    </>
  );
};

export default Lecture;
