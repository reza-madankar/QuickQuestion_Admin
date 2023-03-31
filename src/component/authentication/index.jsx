import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useUserState } from "utilities/user";

export default function Authentication({ children }) {
  const location = useLocation();
  const { isUserAuthenticated } = useUserState();
  const userLoggedIn = isUserAuthenticated();

  return (
    <>
      {!userLoggedIn && (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
      {userLoggedIn && { children }}
    </>
  );
}
