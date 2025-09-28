import React from "react";
import { useParams } from "react-router-dom";
import ReusableForm from "./ReusableForm";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";

const AddClubEvents = ({ defaultValues }) => {
  const { clubId } = useParams();

  const hendelSubmit = (data) => {
    const eventData = { ...data, clubId };
    console.log("Submit Event:", eventData);
  };

  const fields = [
    {
      name: "title",
      label: "Event Title",
      placeholder: "Enter event title",
      validation: { required: "Event title is required" },
    },
    {
      name: "banner",
      label: "Banner Image",
      type: "file",
      validation: { required: "Banner image is required" },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter event details",
    },
    {
      name: "date",
      label: "Event Date",
      type: "date",
      validation: { required: "Date is required" },
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Enter event location",
    },
    {
      name: "speaker",
      label: "Speaker",
      placeholder: "Enter speaker name",
    },
    {
      name: "organizerClub",
      label: "Organizer Club",
      placeholder: "Enter organizer club name",
    },
    {
      name: "registerLink",
      label: "Registration Link",
      type: "url",
      placeholder: "Enter registration link",
    },
    {
      name: "registerDeadline",
      label: "Registration Deadline",
      type: "date",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-20">
        <p className="text-center text-5xl py-5 font-semibold">
          Add Club Event
          <br />
          1/ai kahne register start date lagbe <br />
          2/event start time <br />
          3/status <br />
        </p>
        <ReusableForm
          fields={fields}
          onSubmit={hendelSubmit}
          defaultValues={defaultValues}
        />
      </div>
      <Footer />
    </>
  );
};

export default AddClubEvents;
