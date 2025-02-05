import axios from "axios";
import API from "./axiosInstance";

const registerUser = async (user) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      user
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const loginUser = async (user) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      user,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await API.get(
      `${import.meta.env.VITE_BASE_URL}/users/current-user`
    );
    
    return response.data;
  } catch (error) {
    console.log(error);
    
    return error;
  }
};

const logoutCurrentUser = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export { registerUser, loginUser, getCurrentUser, logoutCurrentUser };
