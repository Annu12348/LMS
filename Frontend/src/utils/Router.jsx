import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Dashboard from "../pages/admin/Dashboard";
import Course from "../pages/admin/Course";
import CourseCreate from "../pages/admin/CourseCreate";
import UpdateCourse from "../pages/admin/UpdateCourse";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/course" element={<Course />} />
        <Route path="/admin/course/create" element={<CourseCreate />} />
        <Route path="/admin/course/:courseId" element={<UpdateCourse />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/:id" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
