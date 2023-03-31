import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navbar">
      <h1>Quick Question</h1>
      <hr />
      <NavLink end to="/" id="overViewLink">
        <i className="fa fa-home"></i>
        <span>Overview</span>
      </NavLink>
      <NavLink
        to="/user"
        className="bbt-calendar"
        state={{ from: "calendar/earnings" }}
      >
        <i className="fa fa-users"></i>
        <span>User</span>
      </NavLink>
      <NavLink to="/category" className="bbt-simulator">
        <i className="fa fa-folder-plus"></i>
        <span>Category</span>
      </NavLink>
      <NavLink to="/content" className="bbt-simulator">
        <i className="fa fa-file-word"></i>
        <span>Blog</span>
      </NavLink>
      <NavLink to="/question/0" className="bbt-scanner">
        <i className="fa fa-comment"></i>
        <span>Question</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
