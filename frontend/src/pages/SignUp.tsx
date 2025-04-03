import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-100 bg-clip-padding">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Sign Up ChatApp
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="">
              <span className="">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full py-1 border rounded-md pl-2 border-black/20 bg-gray-200 outline-none"
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
            />
          </div>

          <GenderCheckbox />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-center"
          >
            Already have an account?
          </Link>

          <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
