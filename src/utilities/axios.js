import axios from "axios";
//import config from "./config";

const instance = axios.create({
  baseURL: "https://localhost:7280",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": localStorage.getItem("language") || "en",
    Authorization: `Bearer ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).token
        : "notLoggin"
    }`,
  },
});

export default instance;
