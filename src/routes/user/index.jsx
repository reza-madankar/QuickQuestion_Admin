import React, { useState } from "react";

import "../../asset/styles/user.scss";

import Boy from "asset/images/boy.png";
import Girl from "asset/images/girl.png";

const User = () => {
  const [drpMenu, setDrpMenu] = useState("");

  const changeSetDrpMenu = (drp) => {
    if (drpMenu === drp) {
      setDrpMenu("");
    } else {
      setDrpMenu(drp);
    }
  };

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
          <div className="drpBox">
            <button type="button" onClick={() => changeSetDrpMenu("category")}>
              Category 1
              <i className="fa fa-chevron-down" />
            </button>
            <div
              className={`drpContent ${
                drpMenu === "category" ? "show" : "hide"
              }`}
            >
              <ul>
                <li>
                  <span> Category 1</span>
                </li>
                <li>
                  <span> Category 2</span>
                </li>
                <li>
                  <span>Category 3</span>
                </li>
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
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" class="active">
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
