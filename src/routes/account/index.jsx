import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "utilities/axios";
import { useUserState } from "utilities/user";
import { useNavigate } from "react-router-dom";

import "asset/styles/login.scss";

const Login = () => {
  const { setUser, isUserAuthenticated } = useUserState();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    if (isUserAuthenticated() === true) {
      navigate("/");
      window.location.reload();
    }
  }, []);

  const loginHandller = () => {
    if (email.length <= 0 || password.length <= 0) {
      toast.error("All inputs are required.");
    } else if (!emailPattern.test(email)) {
      toast.error("Email is not valid.");
    } else {
      axios
        .post("api/Auth/login", {
          Username: email,
          Password: password,
        })
        .then((response) => {
          const { user } = response.data;
          if (
            user.roles.length > 0 &&
            user.roles.some((x) => x === "Admin") === true
          ) {
            setUser({
              email: user.email,
              name: user.name,
              token: user.token,
            });

            navigate("/");
            window.location.reload();
          } else {
            toast.error(
              "Your account doesn't have permissions to access the Admin panel."
            );
          }
        })
        .catch(function (error) {
          toast.error("Couldn’t find your email. Please sign up instead.");
        });
    }
  };

  return (
    <div className="login">
      <div className="accountbox">
        <div className="logo">
          <i className="fa fa-user" />
          <h2>LOGIN</h2>
          <h3>Quick Question</h3>
        </div>
        <div className="formController">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fa fa-user"></i>
        </div>
        <div className="formController">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa fa-key"></i>
        </div>
        <button type="button" onClick={() => loginHandller()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
