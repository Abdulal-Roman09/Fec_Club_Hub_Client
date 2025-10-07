import React from "react";

const ProfileEmergencyContact = ({ userProfile }) => {
  if (!userProfile?.emergencyContact) return null;

  const { name, relationship, phone } = userProfile.emergencyContact;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Emergency Contact
      </h3>
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{name || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Relationship</p>
            <p className="font-medium">{relationship || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{phone || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmergencyContact;
