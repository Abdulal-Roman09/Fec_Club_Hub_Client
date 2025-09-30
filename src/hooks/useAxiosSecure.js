// src/hooks/useAxiosSecure.js
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
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
    const res = await axiosSecure.delete(url, data);
    return res.data;
  };

  return { get, post, del };
};

export default useAxiosSecure;
