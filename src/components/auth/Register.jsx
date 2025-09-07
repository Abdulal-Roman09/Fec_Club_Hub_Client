import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import { FiCamera } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { auth } from "../../firebase/firebase.config"; // 🔑 auth import করতে হবে

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useAuth(); // setUser access নিচ্ছি
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState("");

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const result = await createUser(data.email, data.password);

      await updateUserProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });

      // 🔑 profile update এর পর user reload করে state set করছি
      await auth.currentUser.reload();
      setUser(auth.currentUser);

      toast.success("Register Successfully");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await imageUpload(file);
      setValue("photoURL", url);
      setPreview(url);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center pt-30 pb-10 md:h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo Upload */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Photo
              </label>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer transition">
                  <FiCamera className="text-green-600 text-xl" />
                  <span>
                    {preview ? "Change Photo" : "Upload Photo under 32 MB"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                  />
                )}
              </div>

              {uploading && (
                <p className="text-sm text-gray-500 mt-1">Uploading...</p>
              )}
            </div>

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
            <p className="mt-4 text-md text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-green-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
            >
              Register
            </button>
          </form>
          <SocialLogin />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
