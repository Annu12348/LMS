import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMe, setUser } from "../reduxtoolkit/reducer/createSlice";
import { persistor } from "../reduxtoolkit/store";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { me } = useSelector(store => store.authentication)
  const dispatch = useDispatch()
  const location = useLocation();
  console.log(me)

  const meRoutesget = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/me`,
        { withCredentials: true }
      );
      dispatch(setMe(response.data))
    } catch (error) {
      console.error(error);
      navigate("/");
      dispatch(setMe(null))
      dispatch(setUser(null))
      await persistor.purge()
    }
  };

  useEffect(() => {
    meRoutesget();
    // eslint-disable-next-line
  }, [location.pathname]);

  return me ? children : null;
};

export default ProtectedRoute;
