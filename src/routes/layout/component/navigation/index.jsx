import React from "react";
import { NavLink } from "react-router-dom";
import UseTooltip from "component/useTooltip";

const Navigation = () => {
  return (
    <nav className="main-navbar">
      <UseTooltip
        overlayClassName='navigation-tooltip'
        placement="right"
        overlay={<span>Overview</span>}
      >
        <NavLink
          end
          to="/"
          className="bbt-overview"
        >
          <span>Overview</span>
        </NavLink>
      </UseTooltip>
      <UseTooltip
        overlayClassName='navigation-tooltip'
        placement="right"
        overlay={<span>User List</span>}
      >
        <NavLink
          to="/user"
          className="bbt-calendar"
          state={{ from: "calendar/earnings" }}
        >
          <span>User</span>
        </NavLink>
      </UseTooltip>
      <UseTooltip
        overlayClassName='navigation-tooltip'
        placement="right"
        overlay={<span>Category Content List</span>}
      >
               <NavLink
          to="/category"
          className="bbt-simulator"
        >
          <span>Category</span>
        </NavLink>
      </UseTooltip>
      <UseTooltip
        overlayClassName='navigation-tooltip'
        placement="right"
        overlay={<span>Blog List</span>}
      >
        <NavLink
          to="/content"
          className="bbt-simulator"
        >
          <span>Blog</span>
        </NavLink>
      </UseTooltip>
      <UseTooltip
        overlayClassName='navigation-tooltip'
        placement="right"
        overlay={<span>Question and Answer List</span>}
      >
        <NavLink
          to="/question/0"
          className="bbt-scanner"
        >
          <span>Question</span>
        </NavLink>
      </UseTooltip>
    </nav>
  );
};

export default Navigation;
