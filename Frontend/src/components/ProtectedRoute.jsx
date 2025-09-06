import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const meRoutesget = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/me`,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    meRoutesget();
    // eslint-disable-next-line
  }, []);

  return children;
};

export default ProtectedRoute;
