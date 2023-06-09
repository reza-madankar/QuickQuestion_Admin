import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "utilities/axios";
import Modal from "component/modal";
import { toast } from "react-hot-toast";

import ProfileImage from "./components/profileImage";
import RoleModal from "./components/roleModal";
import ModifyModal from "./components/modifyModal";

import "../../asset/styles/user.scss";

import Boy from "asset/images/boy.png";

const User = () => {
  const [drprole, setDrpRole] = useState([]);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [modal, setModal] = useState("");

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

  const showModal = (id, name) => {
    setModal(name);
    setUserId(id);
  };

  const changeActive = (id) => {
    axios
      .get(`/api/Admin/users/changeUserActive/${id}`)
      .then((response) => {
        if (response.data === true) {
          setUsers((prev) =>
            prev.map((x) => (x.id === id ? { ...x, active: !x.active } : x))
          );
          toast.success("Updated Successfully!");
        } else {
          toast.error(
            "Server has rejected this request, please tell to developer."
          );
        }
      })
      .catch(() => {
        toast.error(
          "Please try it again, if it didn't work for second time, refresh page and try it again."
        );
      });
  };

  const changeSubscribe = (id) => {
    axios
      .get(`/api/Admin/users/changeUserSubscribe/${id}`)
      .then((response) => {
        if (response.data === true) {
          setUsers((prev) =>
            prev.map((x) =>
              x.id === id ? { ...x, subscribe: !x.subscribe } : x
            )
          );
          toast.success("Updated Successfully!");
        } else {
          toast.error(
            "Server has rejected this request, please tell to developer."
          );
        }
      })
      .catch(() => {
        toast.error(
          "Please try it again, if it didn't work for second time, refresh page and try it again."
        );
      });
  };

  const resetPassword = (id) => {
    axios
      .get(`/api/Admin/users/ResetPassword/${id}`)
      .then(() => {
        toast.success("Updated Successfully!");
      })
      .catch(() => {
        toast.error(
          "Please try it again, if it didn't work for second time, refresh page and try it again."
        );
      });
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
          <button
            type="button"
            className="create"
            onClick={() => showModal(0, "New User")}
          >
            New
          </button>
        </div>
      </div>
      <div className="items">
        {users.map((item, key) => (
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
            <img
              src={Boy}
              alt="reza madankar"
              onClick={() => showModal(item.id, "Profile Image")}
            />
            <h2>{item.name}</h2>
            <p>
              <i className="fa fa-envelope"></i> {item.email}
            </p>
            <p>
              <i className="fa fa-users"></i>{" "}
              {item.roles?.map((u) => u.title).join(", ")}
            </p>

            <hr />
            <div className="tools">
              <button
                type="button"
                onClick={() => showModal(item.id, "User Modify")}
              >
                <i className="fa fa-pencil" />
              </button>
              <button type="button" onClick={() => showModal(item.id, "Roles")}>
                <i className="fa fa-users" />
              </button>
              <button type="button" onClick={() => changeActive(item.id)}>
                {item.active === false ? (
                  <i className="fa fa-lock-open" />
                ) : (
                  <i className="fa fa-lock" />
                )}
              </button>
              <button type="button" onClick={() => changeSubscribe(item.id)}>
                {item.subscribe === false ? (
                  <i className="fa fa-bell" />
                ) : (
                  <i className="fa fa-bell-slash" />
                )}
              </button>
              <button type="button" onClick={() => resetPassword(item.id)}>
                <i className="fa fa-key" />
              </button>
            </div>
          </div>
        ))}
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
      <Modal isOpen={modal !== ""}>
        {(() => {
          switch (modal) {
            case "New User":
              return <ModifyModal closeModal={setModal} setUsers={setUsers} />;
            case "User Modify":
              return (
                <ModifyModal
                  userId={userId}
                  closeModal={setModal}
                  setUsers={setUsers}
                />
              );
            case "Roles":
              return (
                <RoleModal
                  userId={userId}
                  closeModal={setModal}
                  setUsers={setUsers}
                />
              );
            case "Profile Image":
              return <ProfileImage closeModal={setModal} userId={userId} />;
            default:
              return null;
          }
        })()}
      </Modal>
    </div>
  );
};

export default User;
