import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logOutUser } from "../auth/authFunctions";

const LoggedInLinks = () => {
  return (
    <div>
      <li className="nav-item">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link" onClick={logOutUser}>
          Logout
        </Link>
      </li>
    </div>
  );
};

export default LoggedInLinks;
