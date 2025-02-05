import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const accessToken = localStorage.getItem("accessToken");

  // Log for debugging purposes
  console.log("AccessToken:", accessToken);

  // Redirect to login if no access token is found
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the given element
  return element;
};

export default PrivateRoute;
