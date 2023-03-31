import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "utilities/axios";
import "asset/styles/login.scss";

const loginHandller = () => {
  axios
    .post("api/Auth/login", {
      name: "rezawww",
      Username: "m.reza.madankar@gmail.com",
      Password: "123456",
    })
    .then((response) => {
      toast.success("Success!");
    })
    .catch(function (error) {
      // handle error
      toast.success("Error!");
    })
    .finally(function () {
      // always executed
    });
};

const Login = () => {
  return (
    <div className="login">
      <div className="accountbox">
        <div className="logo">
          <i className="fa fa-user" />
          <h2>LOGIN</h2>
          <h3>Quick Question</h3>
        </div>
        <div className="formController">
          <input type="text" placeholder="Username" />
          <i className="fa fa-user"></i>
        </div>
        <div className="formController">
          <input type="password" placeholder="Password" />
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
