import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../sheared/navber/Navbar";
import Footer from "../sheared/Footer";
import ReusableForm from "./ReusableForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export const AddClubCommitteeMember = ({ defaultValues }) => {
  const { clubId } = useParams();
  const { post } = useAxiosSecure();
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    try {
      const res = await post(`/${clubId}/add-club-committee-member`, formData);
      console.log(res.data);

      if (res.data) {
        toast.success("✅ Committee member added successfully!");
        navigate(`/clubdetails/${clubId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to add committee member. Try again!");
    }
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter full name",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      validation: { required: "Email is required" },
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Enter phone number",
      validation: { required: "Phone number is required" },
    },
    {
      name: "facebookLink",
      label: "Facebook Profile Link",
      type: "text",
      placeholder: "Enter Facebook URL",
      validation: { required: "Facebook link is required" },
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { value: "FECSA ELITE", label: "FECSA ELITE" },
        { value: "President", label: "President" },
        { value: "Vice-President", label: "Vice-President" },
        { value: "General Secretary", label: "General Secretary" },
        { value: "Joint Secretary", label: "Joint Secretary" },
        { value: "Organizing Secretary", label: "Organizing Secretary" },
        {
          value: "Joint Organizing Secretary",
          label: "Joint Organizing Secretary",
        },
        { value: "Chief Advisor", label: "Chief Advisor" },
        { value: "Honorary Advisors", label: "Honorary Advisors" },
        { value: "Advisors", label: "Advisors" },
        { value: "Treasurer", label: "Treasurer" },
        { value: "Deputy Treasurer", label: "Deputy Treasurer" },
        { value: "Treasure Secretary", label: "Treasure Secretary" },
        { value: "Secretary", label: "Secretary" },
        { value: "Office Secretary", label: "Office Secretary" },
        { value: "Joint Office Secretary", label: "Joint Office Secretary" },
        {
          value: "Science, Technology & Research Affairs Secretary",
          label: "Science, Technology & Research Affairs Secretary",
        },
        {
          value: "Joint Science, Technology & Research Affairs Secretary",
          label: "Joint Science, Technology & Research Affairs Secretary",
        },
        {
          value: "Press & Publicity Affairs Secretary",
          label: "Press & Publicity Affairs Secretary",
        },
        {
          value: "Joint Press & Publicity Affairs Secretary",
          label: "Joint Press & Publicity Affairs Secretary",
        },
        {
          value: "Press & Publication Secretary",
          label: "Press & Publication Secretary",
        },
        {
          value: "Debate & Workshop Secretary",
          label: "Debate & Workshop Secretary",
        },
        { value: "Information & Research", label: "Information & Research" },
        { value: "Coordinator", label: "Coordinator" },
        { value: "Member", label: "Member" },
        { value: "Other", label: "Other" },
      ],
      validation: { required: "Role is required" },
    },
    { name: "image", label: "Profile Image", type: "file", validation: {} },
  ];

  return (
    <>
      <Navbar />

      <div className="py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl px-2 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
            Add Club Member
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Fill in the details below to add a new member to the club committee.
          </p>

          <ReusableForm
            fields={fields}
            onSubmit={handleFormSubmit}
            defaultValues={defaultValues}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
