import React, { useState, useEffect } from "react";
import axios from "utilities/axios";
import { toast } from "react-hot-toast";

const RoleModal = ({ userId, closeModal, setUsers }) => {
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/api/Admin/roles").then((response) => {
      setRoles(response.data.sort((a, b) => a.title.localeCompare(b.title)));
    });

    axios.get(`/api/Admin/user/${userId}`).then((response) => {
      setUser(response.data.user);
    });
  }, [userId]);

  const userRoleAddorRemove = (userId, roleId) => {
    axios
      .get(`/api/Admin/users/addOrRemoveUserRole/${userId}/${roleId}`)
      .then((response) => {
        if (response) {
          const _roles = user.roles.find((x) => x.id === roleId)
            ? user.roles.filter((f) => f.id !== roleId)
            : [
                ...user.roles,
                {
                  title: roles.filter((r) => r.id === roleId)[0].title,
                  id: roleId,
                },
              ];

          setUser((prev) => ({
            ...prev,
            roles: _roles,
          }));

          setUsers((prev) =>
            prev.map((x) => (x.id === user.id ? { ...x, roles: _roles } : x))
          );
          toast.success(
            roleId > 0 ? "Removed Successfully!" : "Inserted Successfully!"
          );
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

  return (
    <>
      <div className="modal-header">
        <h2>{user.name} - Roles</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="roles">
        {user && (
          <ul>
            {roles.map((item, key) => (
              <li
                key={key}
                className={
                  user.roles && user.roles.find((x) => x.id === item.id)
                    ? "active"
                    : ""
                }
                onClick={() => userRoleAddorRemove(user.id, item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RoleModal;
