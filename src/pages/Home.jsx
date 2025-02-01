import React, { useContext } from "react";
import { logoutCurrentUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const logoutUser = async () => {
    try {
      const res = await logoutCurrentUser();
      if (res.statusCode === 200) {
        localStorage.removeItem("userId");
        dispatch({ type: "SET_USER", payload: res.data });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        
      </div>
    </>
  );
};

export default Home;
