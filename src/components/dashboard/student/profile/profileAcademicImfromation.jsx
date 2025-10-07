import React from "react";
import { GraduationCap } from "lucide-react";

const ProfileAcademicInformation = ({ userProfile }) => {
  if (!userProfile) return null;

  const { department, year, gpa, joinDate } = userProfile;

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <GraduationCap className="text-emerald-600" size={24} />
        Academic Information
      </h3>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Department</p>
          <p className="font-medium">{department}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Academic Year</p>
          <p className="font-medium">{year}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">GPA</p>
          <p className="font-medium">{gpa}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Join Date</p>
          <p className="font-medium">{joinDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAcademicInformation;
