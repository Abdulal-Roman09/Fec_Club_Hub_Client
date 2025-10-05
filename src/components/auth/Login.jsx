import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../sheared/Footer";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Navbar from './../sheared/navber/Navbar';

const Login = () => {
  const { loginUser } = useAuth();
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Login Data:", data);
    try {
      const result = await loginUser(data.email, data.password);
      toast.success("Login  Successful! 🎉");
      navigate("/")
    } catch (error) {
      toast.error("Something went wrong! ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center pt-30 pb-10 md:min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-gray-500 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Register link */}
            <p className="mt-4  text-md text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-green-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <SocialLogin/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
