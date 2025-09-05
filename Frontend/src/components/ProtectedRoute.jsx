import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
          withCredentials: true
        });
        console.log(response.data);
        setIsAuthenticated(true); // token valid hai
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
        navigate("/login"); // token invalid -> login page
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // या spinner दिखा सकते हो
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;