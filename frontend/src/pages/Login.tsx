import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs.username, inputs.password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Login ChatApp
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full py-1 border rounded-md pl-2 border-black/20 bg-gray-200 outline-none"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full py-1 border rounded-md pl-2 border-black/20 bg-gray-200 outline-none"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-center"
          >
            {"Don't"} have an account?
          </Link>

          <button
            className={`w-full bg-blue-500 text-white p-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600 transition ${
              loading && "bg-gray-400 disabled:pointer-events-none"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
