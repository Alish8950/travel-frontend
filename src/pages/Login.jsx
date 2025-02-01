import React, { useState, useContext } from "react";
import { Logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../services/auth.service";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmail = emailUsername.includes("@");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = {
        ...(!isEmail && { username: emailUsername }),
        ...(isEmail && { emailUsername }),
        password,
      };

      const response = await loginUser(user);

      if (response.statusCode === 200) {      
        console.log( response);
        localStorage.setItem("userId", response.data.user._id)
        dispatch({ type: "SET_USER", payload: response.data });
        console.log(response);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="mx-auto w-40">
            <img src={Logo} alt="Travel Logo" className="w-full" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email/Username
              </label>
              <input
                id="email"
                name="email"
                onChange={(e) => setEmailUsername(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
                />
                {showPassword ? (
                  <span
                    className="material-symbols-outlined text-gray-700 !text-lg absolute right-[10px] top-[10px] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    visibility
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined text-gray-700 !text-lg absolute right-[10px] top-[10px] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    visibility_off
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary-light"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary hover:text-primary-light"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-light-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
              >
                Login
              </button>
              <div className="mt-4">
                <span className="font-medium text-gray-700">
                  Do not have an account?{" "}
                </span>
                <Link
                  className="font-medium text-primary hover:text-primary-light"
                  to="/signup"
                >
                  Start your journey
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
