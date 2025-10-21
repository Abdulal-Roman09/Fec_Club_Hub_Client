import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Users, Award } from "lucide-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../loading/Loading";
import FailedToFetch from "../../../Error/FailedToFatch";
import ProfileHeader from "./ProfileHeader";
import ProfileAcademicInformation from "./profileAcademicInfromation";
import ProfileUserInformation from "./profileUserImfromation";
import useAuth from "../../../../hooks/useAuth";
import ProfilePersonalInformation from "./ProfilePersonalImfromation";
import ProfileEmergencyContact from "./ProfileEmergnadyContact";

export default function ProfilePage() {
  const { user } = useAuth();
  const { get } = useAxiosSecure();

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await get(`/user/${user.email}`);
      console.log("User Data:", response.data);
      return response || {};
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="">
      {/* Header */}
      <ProfileHeader />

      {/* Profile Card */}
      <div className="bg-white rounded-2xl overflow-hidden my-8">
        <ProfileUserInformation user={user} userProfile={userProfile} />

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ProfilePersonalInformation user={user} userProfile={userProfile} />
            <ProfileAcademicInformation userProfile={userProfile} />
          </div>

          {/* About Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              About Me
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {userProfile?.bio || "No bio available"}
            </p>
          </div>

          {/* Clubs Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="text-emerald-600" size={24} />
              Club Memberships
            </h3>
            <div className="flex flex-wrap gap-2">
              {userProfile?.clubs?.length > 0 ? (
                userProfile.clubs.map((club, index) => (
                  <span
                    key={index}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {club}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">No clubs</span>
              )}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="text-emerald-600" size={24} />
              Achievements
            </h3>
            <div className="space-y-2">
              {userProfile?.achievements?.length > 0 ? (
                userProfile.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">No achievements</span>
              )}
            </div>
          </div>

          {/* Emergency Contact Section */}
          <ProfileEmergencyContact userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
}
