import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Google Login Sucessfull");
      navigate("/");
    } catch (error) {
      // console.error("Google Login Error:", error);
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
