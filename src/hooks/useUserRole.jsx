import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
//http://localhost:8000/api/v1/user-role/roman@example.com
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
      const { data } = await get(`user-role/${user.email}`);
      console.log(data);
      return data?.role;
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
