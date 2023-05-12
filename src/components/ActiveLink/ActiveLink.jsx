import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `mr-10 font-semibold text-2xl ${
            isActive ? "outline-double p-2" : " "
          }`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
