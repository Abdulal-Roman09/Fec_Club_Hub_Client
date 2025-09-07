import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user } = useAuth();
  const { get } = useAxiosSecure();

  const {
    data: roleData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email, // only run query if user exists
    queryFn: async () => {
      if (!user?.email) return null;
      const role = await get(`user-role/${user.email}`);
      return role?.role; // ensure only role is returned
    },
  });

  return {
    role: roleData,
    roleLoading: isLoading,
    isError,
    refetch,
  };
};

export default useUserRole;
