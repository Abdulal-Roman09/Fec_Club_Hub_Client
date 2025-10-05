import React from "react";
import Footer from "../sheared/Footer";
import ReusableForm from "./ReusableForm";
import Navbar from "../sheared/navber/Navbar";

const AddClubAchievement = ({ defaultValues }) => {
  const hendelSubmit = (data) => {
    console.log(data);
  };
  const fields = [
    {
      name: "title",
      label: "Achievement Title",
      placeholder: "Enter achievement title",
      validation: { required: "Title is required" },
    },
    {
      name: "year",
      label: "Year",
      type: "number",
      placeholder: "Enter year (e.g. 2025)",
    },
    { name: "date", label: "Event Date", type: "date" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter details about the achievement",
    },
    {
      name: "eventLocation",
      label: "Event Location",
      placeholder: "Enter location",
    },
    { name: "eventName", label: "Event Name", placeholder: "Enter event name" },
    {
      name: "image",
      label: "Achievement Image",
      type: "file",
      validation: { required: "Image is required" },
    },
    { name: "award", label: "Award", placeholder: "Enter award name if any" },
    {
      name: "result",
      label: "Result/Position",
      placeholder: "Enter result (e.g. 1st place, Runner-up)",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="py-20">
        <ReusableForm
          fields={fields}
          defaultValues={defaultValues}
          onSubmit={hendelSubmit}
        />
      </div>
      <Footer />
    </>
  );
};

export default AddClubAchievement;
