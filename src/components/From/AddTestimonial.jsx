import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../sheared/navber/Navbar";
import Footer from "../sheared/Footer";

const AddTestimonial = () => {
  const { clubId, userId } = useParams();
  console.log(clubId, userId);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default AddTestimonial;
