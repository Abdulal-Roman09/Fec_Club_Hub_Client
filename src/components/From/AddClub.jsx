import React from "react";
import ReusableForm from "./ReusableForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddClubForm = ({ defaultValues }) => {
  const navigate = useNavigate();
  const { post } = useAxiosSecure();
  const hendelSubmit = async (data) => {
    try {
      const response = await post("/add-club", data);
      console.log("Server response:", response);
      toast.success("✅ added clubs successfully!l");
      navigate("/");
    } catch (error) {
      console.error("  Error submitting carousel event:", error);
      toast.error(" Failed to add Club . Please try again.");
    }
  };

  const fields = [
    {
      name: "clubName",
      label: "Club Name",
      placeholder: "Enter club name",
      validation: { required: "Club name is required" },
    },
    {
      name: "clubSortName",
      label: "Short Name",
      placeholder: "Enter short name",
      validation: { required: "Short name is required" },
    },
    { name: "clubLogo", label: "Club Logo", type: "file", validation: {} },
    { name: "clubBanner", label: "Club Banner", type: "file", validation: {} },
    {
      name: "clubMotto",
      label: "Motto",
      placeholder: "Enter club motto",
      validation: {},
    },
     {
      name: "clubCreatingYear",
      label: "Science",
      placeholder: "Enter club club Creating Year",
      validation: {},
    },
    {
      name: "clubDescription",
      label: "Description",
      placeholder: "Enter club description",
      type: "textarea",
      validation: {},
    },
    {
      name: "clubCategory",
      label: "Category",
      type: "select",
      options: [
        "Innovation",
        "Technology",
        "Arts",
        "Religious",
        "Community",
        "Sports",
        "Creative",
        "Academic",
        "Cultural",
        "Professional",
        "Education",
      ].map((c) => ({ value: c, label: c })),
      validation: { required: "Category is required" },
    },
  ];

  return (
    <div className="max-w-5xl mx-auto  rounded-2xl sm:p-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 pt-5">
        Add New Club
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Fill in the details below to create a new club.
      </p>

      <ReusableForm
        fields={fields}
        onSubmit={hendelSubmit}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default AddClubForm;
