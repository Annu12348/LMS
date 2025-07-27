import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/:id" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
