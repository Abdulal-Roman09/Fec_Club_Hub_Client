import React from "react";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

const ProfilePersonalInformation = ({ userProfile }) => {
  if (!userProfile) return null;

  const { email, phone, address = {}, dateOfBirth } = userProfile;

  // format date if available
  const formattedDOB = dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : "N/A";

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <User className="text-emerald-600" size={24} />
        Personal Information
      </h3>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{email || "N/A"}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{phone || "N/A"}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <MapPin className="text-gray-400" size={20} />
          <div>
            <p>District: {address.district || "N/A"}</p>
            <p>Zela: {address.zela || "N/A"}</p>
            <p>Upzela: {address.upzela || "N/A"}</p>
            <p>Roadname: {address.roadname || "N/A"}</p>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center gap-3">
          <Calendar className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{formattedDOB}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePersonalInformation;
