import React from "react";

const ProfileUserInformation = ({ user, userProfile }) => {
  if (!user || !userProfile) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 sm:p-8 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        {/* Avatar - keep big */}
        <div className="w-72 h-72 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md overflow-hidden">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "Avatar"}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            user.displayName?.charAt(0) || "U"
          )}
        </div>

        {/* User Info */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {user.displayName || userProfile.name}
          </h2>

          <p className="text-emerald-700 font-medium mt-1">
            {userProfile.department || "Department N/A"} •{" "}
            {userProfile.year || "Year N/A"}
          </p>

          {userProfile.registerNumber && (
            <p className="text-gray-600 font-medium mt-1">
              Student ID: {userProfile.registerNumber}
            </p>
          )}

          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          {userProfile.phone && (
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Phone:</span> {userProfile.phone}
            </p>
          )}

          {userProfile.address && (
            <div className="text-gray-700 mt-1">
              <span className="font-semibold">Address:</span>{" "}
              {userProfile.address.district || ""}{" "}
              {userProfile.address.zela || ""}{" "}
              {userProfile.address.upzela || ""}{" "}
              {userProfile.address.roadname || ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInformation;
