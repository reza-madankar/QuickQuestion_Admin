import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import Select from "react-select";
import { toast } from "react-hot-toast";

const AuthorModal = ({ blogId, closeModal }) => {
  const validRole = ["Admin", "Author"];
  const [drpRole, setDrpRole] = useState([]);
  const [drpUser, setDrpUser] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [roleId, setRoleId] = useState(0);

  useEffect(() => {
    axios.get("/api/Admin/roles").then((response) => {
      setDrpRole(
        response.data
          .sort((a, b) => a.title.localeCompare(b.title))
          .filter((x) => validRole.includes(x.title))
          .map((item) => ({
            label: item.title,
            value: item.id,
          }))
      );
    });
  }, []);

  useEffect(() => {
    if (roleId > 0) {
      axios.get(`/api/Admin/users/${roleId}/0`).then((response) => {
        setDrpUser(
          response.data
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => ({
              label: item.name,
              value: item.id,
            }))
        );
      });
    }
  }, [roleId]);

  useEffect(() => {
    if (blogId > 0) {
      axios.get(`/api/Admin/blog/${blogId}`).then((response) => {
        if (response.data.authorUserId > 0) {
          getUserInfo(response.data.authorUserId);
        }
      });
    }
  }, [blogId]);

  const getUserInfo = (userId) => {
    axios.get(`/api/Admin/user/${userId}`).then((response) => {
      setUserInfo(response.data.user);
      setRoleId(
        response.data.user.roles.filter((x) => validRole.includes(x.title))[0]
          .id
      );
    });
  };

  const submitAssign = () => {
    if (userInfo && userInfo.id > 0) {
      axios
        .get(`/api/Admin/blog/changeAuthor/${blogId}/${userInfo.id}`)
        .then((response) => {
          if (response.data === true) {
            closeModal("");
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
    } else {
      toast.error("Please choose Author from author list.");
    }
  };

  return (
    <>
      <div className="modal-header">
        <h2>Author {userInfo.name ? " - " + userInfo.name : ""}</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="modal-content">
        <div className="controller">
          <label>Role</label>

          <Select
            className="drpRole"
            placeholder="Select Role"
            classNamePrefix="select"
            isClearable
            value={drpRole.filter((x) => x.value === roleId)[0]}
            onChange={(option) => {
              return setRoleId(option === null ? null : option.value);
            }}
            options={drpRole}
          />
        </div>

        <div className="controller">
          <label>Users</label>
          <Select
            className="drpUser"
            placeholder="Select User"
            classNamePrefix="select"
            isClearable
            value={
                userInfo.id === null || userInfo.id === 0
                  ? null
                  : drpUser.filter((x) => x.value === userInfo.id)[0]
              }
              onChange={(option) => {
                setUserInfo((x) => ({ ...x, id: option === null ? 0 : option.value}));
              }}
            options={drpUser}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="submit" onClick={submitAssign}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AuthorModal;
