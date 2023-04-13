import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "utilities/axios";

import "../../asset/styles/user.scss";

import Boy from "asset/images/boy.png";

const User = () => {
  const [drprole, setDrpRole] = useState([]);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState(null);

  useEffect(() => {
    axios.get(`/api/Admin/users/${role}/0`).then((response) => {
      setUsers(response.data.sort((a, b) => a.name.localeCompare(b.name)));
    });
  }, [role]);

  useEffect(() => {
    axios.get("/api/Admin/roles").then((response) => {
      setDrpRole(response.data.sort((a, b) => a.title.localeCompare(b.title)));
    });
  }, []);

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
          <Select
            className="drpRole"
            placeholder="Select Role"
            classNamePrefix="select"
            isClearable
            onChange={(option) => {
              return setRole(option === null ? null : option.value);
            }}
            options={drprole.map(({ id, title }) => ({
              value: id,
              label: title,
            }))}
          />
          <button type="button" className="create">
            New
          </button>
        </div>
      </div>
      <div className="items">
        {users.map((item, key) => 
          <div className="item" key={key}>
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
            <h2>{item.name}</h2>
            <p>
              <i className="fa fa-envelope"></i> {item.email}
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
        )}
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
