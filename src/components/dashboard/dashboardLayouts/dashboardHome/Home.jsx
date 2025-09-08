import React from "react";
import useUserRole from "../../../../hooks/useUserRole";
import AdminDashboardHome from "../../admin/AdminDashboardHome";
import StudentDashboardHome from "../../student/StudentDashboardHome";
import CrDashboardHome from "../../cr/CrDashboardHome";
import ClubMemberDashboardHome from "../../clubMember/ClubMemberDashboardHome";

// all role
// ["Student", "ClubMember", "CR", "Admin", "SuperAdmin"]
const DashboardHome = () => {
  const { role } = useUserRole();
  return (
    <div>
      {/* work able */}
      {role === "Admin" && <AdminDashboardHome />}
      {role === "Student" && <StudentDashboardHome />}
      {role === "ClubMember" && <ClubMemberDashboardHome />}
      {/* not applyed now */}
      {role === "Cr" && <CrDashboardHome />}
      {role === "ClubMember" && <ClubMemberDashboardHome />}
    </div>
  );
};

export default DashboardHome;
