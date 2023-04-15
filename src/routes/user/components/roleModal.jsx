import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

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
      .get(`/api/Admin/addOrRemoveUserRole/${userId}/${roleId}`)
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
            roles: _roles
          }));

          setUsers((prev) =>
            prev.map((x) =>
              x.id === user.id ? { ...x, roles: _roles } : x
            )
          );
        }
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
