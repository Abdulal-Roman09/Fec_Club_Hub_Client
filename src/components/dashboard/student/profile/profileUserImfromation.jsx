import React from 'react'

const ProfileUserImfromation = () => {
  return (
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {userProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {userProfile.name}
                </h2>
                <p className="text-emerald-700 font-medium">
                  {userProfile.department} • {userProfile.year}
                </p>
                <p className="text-gray-600">
                  Student ID: {userProfile.studentId}
                </p>
              </div>
            </div>
          </div>
  )
}

export default ProfileUserImfromation
