import React from "react";
import { useSelector } from "react-redux";
import cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { MdGeneratingTokens } from "react-icons/md";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.authentication);
  const token = cookies.get("token");

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
