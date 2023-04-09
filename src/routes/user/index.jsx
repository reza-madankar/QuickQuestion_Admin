import React, { useState, useEffect, useRef } from "react";
import useOutsideDetector from "component/hooks/useDetectClickOutsideElement";
import axios from "utilities/axios";

import "../../asset/styles/user.scss";

import Boy from "asset/images/boy.png";
import Girl from "asset/images/girl.png";

const User = () => {
  const [drprole, setDrpRole] = useState([]);
  const [drpMenu, setDrpMenu] = useState("hide");
  const [role, setRole] = useState("All Roles");
  const drpRef = useRef(null);

  useEffect(() => {
    axios.get("/api/Auth/roles").then((response) => {
      setDrpRole(response.data.sort((a, b) => a.title.localeCompare(b.title)));
    });
  }, []);

  const changeSetDrpMenu = (drp) => {
    if (drp === null) {
      setDrpMenu("show");
    } else {
      setDrpMenu("hide");
      setRole(drp);
    }
  };

  useOutsideDetector(drpRef, role, () => {
    setDrpMenu("hide");
  });

  return (
    <div className="users">
      <div className="content-header">
        <h2>Users</h2>
        <ul>
          <li>
            <a href="#">OverView</a>
          </li>
          <li>/</li>
          <li>Users</li>
        </ul>
      </div>
      <div className="content-tools">
        <div className="formController">
          <input type="text" placeholder="search" />
          <i className="fa fa-search"></i>
        </div>
        <div className="right-tools">
          <div className="drpBox" ref={drpRef}>
          <button type="button" onClick={() => changeSetDrpMenu(null)}>
              {role}
              <i className="fa fa-chevron-down" />
            </button>
            <div
              className={`drpContent ${drpMenu}`}
            >
              <ul>
                <li  onClick={() => changeSetDrpMenu("All Roles")}>
                  <span>All Roles</span>
                </li>
                {drprole.map((item, key) => (
                  <li key={key}  onClick={() => changeSetDrpMenu(item.title)}>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button type="button" className="create">
            New
          </button>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3m</span>
            </p>
          </div>
          <img src={Boy} alt="reza madankar" />
          <h2>Mohammad Reza Madankar</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> Admin
          </p>

          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3D</span>
            </p>
          </div>
          <img src={Girl} alt="reza madankar" />
          <h2>Mansoureh Hosseini</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> User
          </p>
          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3m</span>
            </p>
          </div>
          <img src={Boy} alt="reza madankar" />
          <h2>Mohammad Reza Madankar</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> Admin
          </p>

          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3D</span>
            </p>
          </div>
          <img src={Girl} alt="reza madankar" />
          <h2>Mansoureh Hosseini</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> User
          </p>
          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3m</span>
            </p>
          </div>
          <img src={Boy} alt="reza madankar" />
          <h2>Mohammad Reza Madankar</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> Admin
          </p>

          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
        <div className="item">
          <div className="info">
            <p>
              <i className="fa fa-heart" />
            </p>
            <p>
              <i className="fa fa-comment" />
            </p>
            <p>
              <i className="fa fa-comment-dots" />
            </p>
            <p>
              <i className="fa fa-clock-four" />
              <span>3D</span>
            </p>
          </div>
          <img src={Girl} alt="reza madankar" />
          <h2>Mansoureh Hosseini</h2>
          <p>
            <i className="fa fa-envelope"></i> m.reza.madankar@gmail.com
          </p>
          <p>
            <i className="fa fa-users"></i> User
          </p>
          <hr />
          <div className="tools">
            <button type="button">
              <i className="fa fa-pencil" />
            </button>
            <button type="button">
              <i className="fa fa-users" />
            </button>
            <button type="button">
              <i className="fa fa-eye" />
            </button>
            <button type="button">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
      </div>
      <div className="content-footer">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default User;
