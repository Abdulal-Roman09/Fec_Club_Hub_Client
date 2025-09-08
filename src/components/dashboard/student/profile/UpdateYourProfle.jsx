import React from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Users,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Alex",
      lastName: "Johnson",
      email: "alex.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      address: "123 Campus Drive, University City, UC 12345",
      dateOfBirth: "1999-03-15",
      department: "Computer Science",
      year: "Senior (4th Year)",
      gpa: "3.85",
      bio: "Passionate computer science student with interests in web development and AI.",
      emergencyContactName: "Sarah Johnson",
      emergencyContactRelationship: "Mother",
      emergencyContactPhone: "+1 (555) 987-6543",
      linkedinProfile: "https://linkedin.com/in/alexjohnson",
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Profile:", data);
    alert("Profile updated successfully!");
  };

  return (
    <div className=" md:p-6  mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        {/* Text Section */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Edit Profile
          </h1>
          <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
            Update your personal information & academic information
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden "
      >
        <div className="p-4 md:p-8 space-y-8">
          {/* Personal Info */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <User className="text-emerald-600" size={24} />
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">First name is required</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">Last name is required</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-1" /> Email *
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-1" /> Phone *
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" /> Address *
                </label>
                <input
                  {...register("address", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-1" /> Date of Birth *
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  {...register("linkedinProfile")}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          {/* Academic Info */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-emerald-600" size={24} />
              Academic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <select
                  {...register("department", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Psychology">Psychology</option>
                  <option value="Biology">Biology</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English Literature">English Literature</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Year *
                </label>
                <select
                  {...register("year", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Freshman (1st Year)">
                    Freshman (1st Year)
                  </option>
                  <option value="Sophomore (2nd Year)">
                    Sophomore (2nd Year)
                  </option>
                  <option value="Junior (3rd Year)">Junior (3rd Year)</option>
                  <option value="Senior (4th Year)">Senior (4th Year)</option>
                  <option value="Graduate Student">Graduate Student</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4.0"
                  {...register("gpa")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          {/* Bio */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="text-emerald-600" size={24} />
              About Me
            </h2>
            <textarea
              {...register("bio")}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 resize-none"
              placeholder="Tell us about yourself..."
            />
          </section>

          {/* Emergency Contact */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="text-emerald-600" size={24} />
              Emergency Contact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  {...register("emergencyContactName", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship *
                </label>
                <select
                  {...register("emergencyContactRelationship", {
                    required: true,
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  {...register("emergencyContactPhone", { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium flex items-center gap-4"
            >
              <ArrowLeft size={20} />
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
