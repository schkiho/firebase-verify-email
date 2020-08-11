import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutLinks = () => {
  return (
    <div>
      <li className="nav-item">
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </div>
  );
};

export default LoggedOutLinks;
