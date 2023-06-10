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
      <NavLink to="/user" state={{ from: "calendar/earnings" }}>
        <i className="fa fa-users"></i>
        <span>User</span>
      </NavLink>
      <NavLink to="/category">
        <i className="fa fa-folder-plus"></i>
        <span>Category</span>
      </NavLink>
      <NavLink to="/content">
        <i className="fa fa-file-word"></i>
        <span>Blog</span>
      </NavLink>
      <NavLink to="/question/0">
        <i className="fa fa-comment"></i>
        <span>Question</span>
      </NavLink>
      <NavLink to="/tags">
        <i className="fa fa-tags"></i>
        <span>Tags</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
