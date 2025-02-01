import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const { state } = useContext(UserContext);
  const [loader, setLoader] = useState();
  const [authStatus, setAuthStatus] = useState();

  useEffect(() => {
    setAuthStatus(state.status);
  }, [state, navigate]);    

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authStatus, authentication]);
  return loader ? <h1>...loading</h1> : <>{children}</>;
}
