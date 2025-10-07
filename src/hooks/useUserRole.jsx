import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user } = useAuth();
  const { get } = useAxiosSecure();

  const {
    data: userData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user?.email) return null;

      try {
        const response = await get(`user-role/${user.email}`);
        console.log("User Role Response:", response);

        const roleData = response?.role;
        if (!roleData) {
          console.warn(`Role not found for user: ${user.email}`);
        }

        // return both email and role
        return {
          email: user.email,
          role: roleData || "guest",
        };
      } catch (error) {
        console.error("Error fetching user role:", error);
        return {
          email: user?.email || null,
          role: "guest",
        };
      }
    },
  });

  return {
    email: userData?.email,
    role: userData?.role,
    roleLoading: isLoading,
    isError,
    refetch,
  };
};

export default useUserRole;
