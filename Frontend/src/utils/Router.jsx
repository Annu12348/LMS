import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
