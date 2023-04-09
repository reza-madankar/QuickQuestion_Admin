import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, Navigate } from "react-router-dom";
import { useUserState } from "utilities/user";
import axios from "utilities/axios";

export default function Authentication({ children }) {
  const location = useLocation();
  const { isUserAuthenticated, resetUser, getUser } = useUserState();
  const userLoggedIn = isUserAuthenticated();
  const [isLoggin, setIsLoggin] = useState(userLoggedIn);

  useEffect(() => {
    if (isLoggin === true) {
      axios
        .get("api/Auth/authenticated")
        .then(() => {
          setIsLoggin(true);
          resetUser();
        })
        .catch(() => {
          toast.error("Your token expired.");
          setIsLoggin(false);
        });
    }
  }, []);

  return (
    <>
      {!isLoggin && <Navigate to="/login" state={{ from: location }} replace />}
      {children}
    </>
  );
}
