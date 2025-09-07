import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();
  const [profileCompleted, setProfileCompleted] = useState(false);

  const handleCompleteProfile = () => {
    setProfileCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          {/* User Photo */}
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.name || "User"}
            className="w-24 h-24 rounded-full border-2 border-green-600"
          />

          {/* User Info */}
          <h2 className="text-xl font-semibold">{user?.name || "Your Name"}</h2>
          <p className="text-gray-500">
            {user?.email || "your.email@example.com"}
          </p>

          {/* Profile Status */}
          <p className="text-sm text-gray-400">
            {profileCompleted
              ? "Your profile is complete!"
              : "Your profile is incomplete."}
          </p>

          {/* Action Button */}
          {!profileCompleted ? (
            <button
              onClick={handleCompleteProfile}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition"
            >
              Complete Your Profile
            </button>
          ) : (
            <Link
              to="/update-profile"
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-center transition"
            >
              Update Profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
