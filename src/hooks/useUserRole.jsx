import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user } = useAuth();
  const { get } = useAxiosSecure();
  const {
    data: roleData,
    isLoading,
    isError,
    refatch,
  } = useQuery({
    queryKey: [user?.email, "noman"],
    queryFn: async () => {
      const res = await get(`user/${user.email}/role`);
      return res.data.role;
    },
  });
  return {
    role: roleData,
    roleLoading: isLoading,
    isError,
    refatch,
  };
};

export default useUserRole;
