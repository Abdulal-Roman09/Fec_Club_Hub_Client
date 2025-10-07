import React from "react";

const ProfileEmergnadyContact = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Emergency Contact
      </h3>
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{userProfile.emergencyContact.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Relationship</p>
            <p className="font-medium">
              {userProfile.emergencyContact.relationship}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{userProfile.emergencyContact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmergnadyContact;
