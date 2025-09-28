import React from "react";
import ReusableForm from "./ReusableForm";

const AddClubMember = () => {
  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter your name",
      validation: { required: "Name is required" },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: { required: "Email is required" },
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
      validation: { required: "Please select gender" },
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
        { value: "guest", label: "Guest" },
      ],
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      placeholder: "Write something about yourself",
    },
     {
    name: "profileImage", 
    label: "Profile Image",
    type: "file", 
    validation: { required: "Please upload an image" },
  },
  ];
  const handelSubmit = (data) => {
    console.log("from Data:", data);
  };
  return <ReusableForm fields={fields} onSubmit={handelSubmit} />;
};

export default AddClubMember;
