import axios from "axios";

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

export { registerUser };
