import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();
  const handleCheckoxChange = (gender: "male" | "female") => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputs);

    signup(inputs);
  };

  // ==================================
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-100 bg-clip-padding">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Sign Up ChatApp
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full py-1 border rounded-md pl-2 border-black/20 bg-gray-200 outline-none"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
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

          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-1 border rounded-md pl-2 border-black/20 bg-gray-200 outline-none"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            selectedGender={inputs.gender}
            onCheckboxChange={handleCheckoxChange}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-center"
          >
            Already have an account?
          </Link>

          <button
            className={`w-full bg-blue-500 text-white p-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600 transition ${
              loading && "bg-gray-400 disabled:pointer-events-none"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
