import React from "react";

const ProfilePersonalImfromation = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <User className="text-emerald-600" size={24} />
        Personal Information
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{userProfile.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{userProfile.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{userProfile.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{userProfile.dateOfBirth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePersonalImfromation;
