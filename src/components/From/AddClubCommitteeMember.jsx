import { useParams } from "react-router-dom";
import Footer from "../sheared/Footer";
import Navbar from "../sheared/Navbar";
import ReusableForm from "./ReusableForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export const AddClubCommitteeMember = ({ defaultValues }) => {
  const { clubId } = useParams();
  const { post } = useAxiosSecure();
  const handleFormSubmit = (formData) => {
    console.log("Committee Member Data:", formData);
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
        { value: "President", label: "President" },
        { value: "Vice President", label: "Vice President" },
        { value: "General Secretary", label: "General Secretary" },
        { value: "Joint Secretary", label: "Joint Secretary" },
        { value: "Treasurer", label: "Treasurer" },
        { value: "Member", label: "Member" },
        { value: "Advisor", label: "Advisor" },
        { value: "Coordinator", label: "Coordinator" },
        { value: "Other", label: "Other" },
      ],
      validation: { required: "Role is required" },
    },
    {
      name: "image",
      label: "Profile Image",
      type: "file",
      validation: {},
    },
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
