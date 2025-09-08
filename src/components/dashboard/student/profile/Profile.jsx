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
import { FiArrowLeft } from "react-icons/fi";

export default function ProfilePage() {
  const navigate=useNavigate()
  // Mock user data - later তুমি API থেকে আনতে পারো
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

  return (
    <>
      <div className="p-6  mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {/* Left Arrow */}
          <button onClick={()=>navigate(-1)} className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <FiArrowLeft className="text-emerald-700" size={20} />
          </button>

          {/* Title & Description Center */}
          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
              View and manage your personal information
            </p>
          </div>

          {/* Update Button */}
          <Link
            to="/dashboard/profile/edit"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Edit size={18} />
            <span className="hidden sm:inline">Update</span>
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Profile Header */}
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

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
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

              {/* Academic Information */}
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
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Contact
              </h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">
                      {userProfile.emergencyContact.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Relationship</p>
                    <p className="font-medium">
                      {userProfile.emergencyContact.relationship}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">
                      {userProfile.emergencyContact.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
