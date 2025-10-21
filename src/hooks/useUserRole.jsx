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
        const { role, userId } = response;

        return {
          email: user.email,
          role: role || "guest",
          userId: userId || "NULL",
        };
      } catch (error) {
        console.error("Error fetching user role:", error);
        return {
          email: user?.email || null,
          role: "guest",
          userId: "NULL",
        };
      }
    },
  });

  return {
    email: userData?.email,
    userId: userData?.userId,
    role: userData?.role,
    roleLoading: isLoading,
    isError,
    refetch,
  };
};

export default useUserRole;
