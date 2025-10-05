import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user } = useAuth();
  const { get } = useAxiosSecure();

  const {
    data: role,
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
        console.log(response?.role);
        const roleData = response?.role;
        if (!roleData) {
          console.warn(`Role not found for user: ${user.email}`);
        }

        return roleData;
      } catch (error) {
        console.error("Error fetching user role:", error);
        return null;
      }
    },
  });

  return {
    role,
    roleLoading: isLoading,
    isError,
    refetch,
  };
};

export default useUserRole;
