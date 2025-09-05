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
import Lecture from "../pages/admin/Lecture";
import LectureUpdate from "../pages/admin/LectureUpdate";
import CourseDetails from "../pages/CourseDetails";
import ProtectedRoute from "../components/ProtectedRoute";


const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/course"
          element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/course/create"
          element={
            <ProtectedRoute>
              <CourseCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/course/:courseId"
          element={
            <ProtectedRoute>
              <UpdateCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/course/:courseId/lecture"
          element={
            <ProtectedRoute>
              <Lecture />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/course/:courseId/lecture/:lectureId"
          element={
            <ProtectedRoute>
              <LectureUpdate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;