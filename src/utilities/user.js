/* eslint-disable no-unused-vars */

import { create } from "zustand";
import jwtDecode from "jwt-decode";
import axios from "utilities/axios";

const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { name: "", email: "", lastName: "", avatar: "", token: "" };

const useStore = create((set) => ({
  user: { ...storedUser },

  setUser: ({ name, email, lastName, avatar, token }) => {
    const user = { name, email, lastName, avatar, token };

    localStorage.setItem("user", JSON.stringify(user));

    return set((state) => ({
      user,
    }));
  },

  updateUser: ({ name, lastName }) =>
    set((state) => ({
      user: { ...state.user, name, lastName },
    })),

  updateToken: ({ token }) =>
    set((state) => ({
      user: { ...state.user, token },
    })),

  resetUser: () => {
    localStorage.removeItem("user");

    return set((state) => ({
      user: { name: "", lastName: "", avatar: "", token: "" },
    }));
  },
}));

export function useUserState() {
  const user = useStore((state) => state.user);

  const isUserAuthenticated = () => {
    if (user.token === "") return false;

    axios
      .get("api/Auth/authenticated")
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    const decodedToken = jwtDecode(user.token);
    const currentDate = new Date();

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      user.token = "";
      return false;
    }

    return true;
  };

  const setUser = useStore((state) => state.setUser);

  const updateUser = useStore((state) => state.updateUser);

  const updateToken = useStore((state) => state.updateToken);

  const resetUser = useStore((state) => state.resetUser);

  const getUser = () => ({
    name: user.name,
    email: user.email,
    lastName: user.lastName,
    avatar: user.avatar,
    token: user.token,
  });

  return {
    getUser,
    isUserAuthenticated,
    setUser,
    resetUser,
    updateUser,
    updateToken,
  };
}

export default useStore;
