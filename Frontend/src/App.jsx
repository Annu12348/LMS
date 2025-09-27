import React from "react";
import Router from "./utils/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="bg-[#e8ecf3] ">
      <Router />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default App;
