import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Users,
  Award,
  Edit,
} from "lucide-react";
import useUserRole from "../../../../hooks/useUserRole";
import { useQuery } from "@tanstack/react-query";
import ProfileHeader from "./ProfileHeader";
import ProfilePersonalImfromation from "./ProfilePersonalImfromation";
import profileAcademicImfromation from "./profileAcademicImfromation";
import ProfileUserImfromation from "./profileUserImfromation";
import ProfileEmergnadyContact from "./ProfileEmergnadyContact";

export default function ProfilePage() {
  const { role, email } = useUserRole();
  console.log(role, email);
  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    address: "123 Campus Drive, University City, UC 12345",
    dateOfBirth: "March 15, 1999",
    studentId: "UC2021001234",
    department: "Computer Science",
    year: "Senior (4th Year)",
    gpa: "3.85",
    joinDate: "September 2021",
    clubs: ["Tech Club", "Debate Society", "Photography Club"],
    achievements: [
      "Dean's List 2023",
      "Best Project Award",
      "Leadership Certificate",
    ],
    bio: "Passionate computer science student with interests in web development and artificial intelligence. Active member of multiple university clubs and committed to academic excellence.",
    emergencyContact: {
      name: "Sarah Johnson",
      relationship: "Mother",
      phone: "+1 (555) 987-6543",
    },
  };

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user?.email) return null;

      // ✅ fetch data from backend
      const response = await get(`/users/${user.email}`);
      console.log("User Data:", response);
      return response;
    },
  });

  return (
    <>
      <div className="p-6  mx-auto">
        <ProfileHeader />
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Profile Header */}
          <ProfileUserImfromation />

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <ProfilePersonalImfromation />

              {/* Academic Information */}
              <profileAcademicImfromation />
            </div>

            {/* Bio Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About Me
              </h3>
              <p className="text-gray-700 leading-relaxed">{userProfile.bio}</p>
            </div>

            {/* Clubs */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="text-emerald-600" size={24} />
                Club Memberships
              </h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.clubs.map((club, index) => (
                  <span
                    key={index}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="text-emerald-600" size={24} />
                Achievements
              </h3>
              <div className="space-y-2">
                {userProfile.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <ProfileEmergnadyContact />
          </div>
        </div>
      </div>
    </>
  );
}
