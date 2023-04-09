import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useUserState } from "utilities/user";


export default function Authentication({ children }) {
  const location = useLocation();
  const { isUserAuthenticated } = useUserState();
  const userLoggedIn = isUserAuthenticated();
  const [isLoggin, setIsLoggin] = useState(userLoggedIn);

  return (
    <>
      {!isLoggin && <Navigate to="/login" state={{ from: location }} replace />}
      {children}
    </>
  );
}
