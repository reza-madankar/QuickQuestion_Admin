import React, { useState, useEffect } from "react";
import axios from "utilities/axios";

const ModifyModal = ({ userId, closeModal, setUsers }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`/api/Admin/user/${userId}`).then((response) => {
      setUser(response.data.user);
      setName(response.data.user.name);
      setEmail(response.data.user.email);
    });
  }, [userId]);

  const submitModify = () => {
    axios
      .post("/api/Admin/UpdateUser", { id: user.id, name: name, email: email })
      .then((response) => {
        if (response) {
          setUsers((prev) =>
            prev.map((x) =>
              x.id === user.id ? { ...x, name: name, email: email } : x
            )
          );
        }
      });
  };

  return (
    <>
      <div className="modal-header">
        <h2>{user.name} - Modify User</h2>
        <button type="button" onClick={() => closeModal("")}>
          <i className="fa fa-xmark" />
        </button>
      </div>
      <div className="users">
        <div className="controller">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="controller">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="submit" onClick={submitModify}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ModifyModal;
