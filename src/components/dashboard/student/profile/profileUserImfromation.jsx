import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";

const ProfileUserInformation = ({ user, userProfile }) => {
  if (!user || !userProfile) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
        {/* Avatar - keep big */}
        <div className="w-48 h-48 md:w-72 md:h-72 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl md:text-5xl font-bold shadow-md overflow-hidden">
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
        <div className="md:text-left flex-1 space-y-2">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900">
            {user.displayName || userProfile.name}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-emerald-700 font-medium">
            <span className="font-bold">Department:</span>{" "}
            {userProfile.department || "Department N/A"}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-emerald-700 font-medium">
            <span className="font-bold">Year:</span> {userProfile.year || "Year N/A"}
          </p>

          {userProfile.registerNumber && (
            <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-1">
              <User size={16} /> <span className="font-bold">Register Number:</span>{" "}
              {userProfile.registerNumber}
            </p>
          )}

          <p className="text-sm sm:text-base text-gray-700 flex items-center gap-1">
            <Mail size={16} /> <span className="font-bold">Email:</span> {user.email}
          </p>

          {userProfile.phone && (
            <p className="text-sm sm:text-base text-gray-700 flex items-center gap-1">
              <Phone size={16} /> <span className="font-bold">Phone:</span> {userProfile.phone}
            </p>
          )}

          {userProfile.address && (
            <div className="text-sm sm:text-base text-gray-700 flex flex-col gap-1">
              <span className="flex items-center gap-1">
                <MapPin size={16} /> <span className="font-bold">Address:</span>
              </span>

              <p className="ml-5">
                <span className="font-bold">District:</span> {userProfile.address.district || ""}
              </p>
              <p className="ml-5">
                <span className="font-bold">Zela:</span> {userProfile.address.zela || ""}
              </p>
              <p className="ml-5">
                <span className="font-bold">UpZila:</span> {userProfile.address.upzela || ""}
              </p>
              <p className="ml-5">
                <span className="font-bold">Road Name:</span> {userProfile.address.roadname || ""}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInformation;
