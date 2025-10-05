import React from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { post } = useAxiosSecure();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      console.log(user)

      const userData = {
        name: user.displayName || "",
        email: user.email || "",
        profileImage: user.photoURL || "",
        password: "",
        year: "",
        semester: "",
        registerNumber: "",
        hallName: "",
        phone: "",
        linkedin: "",
        github: "",
        facebook: "",
        session: "",
      };

      const res = await post("/add-user", userData);

      if (res?.data?.message === "User already exists") {
        toast.success("Welcome back!");
      } else {
        toast.success("Google Login Successful & User saved!");
      }

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <hr className="w-2/4 border-gray-300" />
        <span className="text-gray-400 font-medium text-sm">OR</span>
        <hr className="w-2/4 border-gray-300" />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 w-full max-w-sm py-2 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 font-semibold text-base">
            Login with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
