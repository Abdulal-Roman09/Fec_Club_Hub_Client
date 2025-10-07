import React from "react";

const profileAcademicImfromation = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <GraduationCap className="text-emerald-600" size={24} />
        Academic Information
      </h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Department</p>
          <p className="font-medium">{userProfile.department}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Academic Year</p>
          <p className="font-medium">{userProfile.year}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">GPA</p>
          <p className="font-medium">{userProfile.gpa}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Join Date</p>
          <p className="font-medium">{userProfile.joinDate}</p>
        </div>
      </div>
    </div>
  );
};

export default profileAcademicImfromation;
