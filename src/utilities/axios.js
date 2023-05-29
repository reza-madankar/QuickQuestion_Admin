import axios from "axios";
//import config from "./config";

const token = () => {
  const user = localStorage.getItem("user");

  if (user) {
    var userToken = JSON.parse(user).token;

    return userToken;
  } else {
    return "";
  }
};

const instance = axios.create({
  baseURL: "https://localhost:7280",
  timeout: 10000,
  headers: {
    // "Content-Type": "application/json",
    "Accept-Language": localStorage.getItem("language") || "en",
    "Authorization": `Bearer ${token()}`,
  },
});

export default instance;
