import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navbar">
      <h1>Quick Question</h1>
      <NavLink end to="/" className="bbt-overview" id="overViewLink">
        <span>Overview</span>
      </NavLink>
      <NavLink
        to="/user"
        className="bbt-calendar"
        state={{ from: "calendar/earnings" }}
      >
        <span>User</span>
      </NavLink>
      <NavLink to="/category" className="bbt-simulator">
        <span>Category</span>
      </NavLink>
      <NavLink to="/content" className="bbt-simulator">
        <span>Blog</span>
      </NavLink>
      <NavLink to="/question/0" className="bbt-scanner">
        <span>Question</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
