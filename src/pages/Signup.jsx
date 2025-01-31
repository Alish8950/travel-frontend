import React, { useState } from "react";
import { Logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth.service";
import { CustomToast } from "../components";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      fullName: firstname + " " + lastname,
      username,
      email,
      password,
    };
    const response = await registerUser(user);
    console.log(response.message);

    if (response.statusCode === 200) {
      CustomToast.SuccessToast("User registered successfully");
      navigate("/login");
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
            Signup
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username*
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                // required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
              />
            </div>
            <div className="md:flex md:justify-between ">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  autoComplete="firstname"
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  autoComplete="lastname"
                  required
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                Password*
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
                    class="material-symbols-outlined text-gray-700 !text-lg absolute right-[10px] top-[10px] cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    visibility_off
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password*
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-light-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
              >
                Sign in
              </button>
              <div className="mt-4">
                <span className="font-medium text-gray-700">
                  Already have an account?{" "}
                </span>
                <Link
                  className="font-medium text-primary hover:text-primary-light"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
