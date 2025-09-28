import React from "react";
import ReusableForm from "./ReusableForm";

const AddClubForm = ({ defaultValues }) => {
  const hendelSubmit = async (data) => {
    console.log("Form submitted:", data);
    // You can handle API request here using FormData if files are included
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
    <div className="py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl px-2 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
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
    </div>
  );
};

export default AddClubForm;
