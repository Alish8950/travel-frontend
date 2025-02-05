import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// Refresh token logic extracted for reuse
const refreshAccessToken = async () => {
  const refreshResponse = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/users/refresh-token`,
    {},
    { withCredentials: true }
  );

  const { accessToken } = refreshResponse.data;
  localStorage.setItem("accessToken", accessToken);
  return accessToken;
};

// Request Interceptor
API.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        console.log(error);

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
