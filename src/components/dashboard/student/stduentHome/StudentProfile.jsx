import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/loading/Loading";
import FailedToFetch from "@/components/Error/FailedToFatch";

export default function StudentProfile() {
  const { user } = useAuth();
  console.log(user.email);
  const { get } = useAxiosSecure();

  const {
    data: userProfile = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", user?.email],

    enabled: !!user?.email,
    queryFn: async () => {
      const response = await get(`/user/${user.email}`);
      console.log("User Data:", response?.data);
      return response?.data || {};
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  const { name, session, department, role } = userProfile;

  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-50 to-white p-6 md:p-8 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
        <div className="h-20 w-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold">
          {""}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {name || "Student"}! 👋
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
              {role || "Student"}
            </span>
            <span>Session: {session || "N/A"}</span>
            <span>Department: {department || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
