import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const SizeNavigation = () => {
  return (
    <div className="w-[19%] min-h-[98vh]  bg-zinc-700 px-4 py-21 flex flex-col  ">
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-zinc-300 px-3 rounded-xl py-2 flex items-center gap-2 bg-black text-2xl capitalize font-semibold"
            : "text-zinc-100 px-3 rounded-xl py-2 flex items-center gap-2 text-2xl capitalize font-semibold"
        }
      >
        <MdOutlineSpaceDashboard />
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/course"
        className={({ isActive }) =>
          isActive
            ? "text-zinc-300 px-3 rounded-xl py-2 flex items-center gap-2 bg-black text-2xl capitalize font-semibold"
            : "text-zinc-100 px-3 rounded-xl py-2 flex items-center gap-2 text-2xl capitalize font-semibold"
        }
      >
        <AiOutlineFileAdd />
        Course
      </NavLink>
    </div>
  );
};

export default SizeNavigation;
