// src/hooks/useAxiosSecure.js
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://fec-backend.vercel.app/api/v1/",
});

const useAxiosSecure = () => {
  const get = async (url, params) => {
    const res = await axiosSecure.get(url, { params });
    return res.data;
  };

  const post = async (url, data) => {
    const res = await axiosSecure.post(url, data);
    return res.data;
  };

  const del = async (url, data) => {
    const res = await axiosSecure.delete(url, { data });
    return res.data;
  };

  const put = async (url, data) => {
    const res = await axiosSecure.put(url, data);
    return res.data;
  };
  const patch = async (url, data) => {
    const res = await axiosSecure.patch(url, data);
    return res.data;
  };

  return { get, post, del, put, patch };
};

export default useAxiosSecure;
