import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ReusableForm from "./ReusableForm";

const AddEventCarousel = ({ defaultValues }) => {
  const { post } = useAxiosSecure();

  const hendelSubmit = async (data) => {
    try {
      const response = await post("/add-event-carousel", data);
      console.log("Server response:", response);
      toast.success("Banner Event added successfully!l");
    } catch (error) {
      console.error(" ✅ Error submitting carousel event:", error);
      toast.error("❌ Failed to add Banner Event. Please try again.");
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
      name: "eventTitle",
      label: "Event Title",
      placeholder: "Enter event title",
      validation: { required: "Event title is required" },
    },
    {
      name: "eventCategory",
      label: "Event Category",
      type: "select",
      options: [
        { value: "Innovation", label: "Innovation" },
        { value: "Technology", label: "Technology" },
        { value: "Arts", label: "Arts" },
        { value: "Religious", label: "Religious" },
        { value: "Community", label: "Community" },
        { value: "Sports", label: "Sports" },
        { value: "Creative", label: "Creative" },
        { value: "Academic", label: "Academic" },
        { value: "Cultural", label: "Cultural" },
        { value: "Professional", label: "Professional" },
        { value: "Education", label: "Education" },
      ],
      validation: { required: "Event category is required" },
    },
    {
      name: "status",
      label: "Event Status",
      type: "select",
      options: [
        { value: "Running", label: "Running" },
        { value: "Upcoming", label: "Upcoming" },
        { value: "Expired", label: "Expired" },
      ],
      validation: { required: "Status is required" },
    },
    {
      name: "date",
      label: "Event Date",
      type: "date",
      validation: { required: "Event date is required" },
    },
    {
      name: "eventTime",
      label: "Event Time",
      type: "text",
      placeholder: "HH:MM",
      validation: { required: "Event time is required" },
    },
    {
      name: "registerStartDate",
      label: "Registration Start Date",
      type: "date",
      validation: { required: "Start date is required" },
    },
    {
      name: "registerEndDate",
      label: "Registration End Date",
      type: "date",
      validation: { required: "End date is required" },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter event description",
      validation: { required: "Description is required" },
    },
    {
      name: "image",
      label: "Event Image",
      type: "file",
      validation: { required: "Image is required" },
    },
  ];

  return (
    <div className=" flex justify-center items-start">
      <div className="w-full max-w-5xl rounded-2xl md:p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Add Event Carousel
        </h1>
        <p className="text-gray-800 text-center mb-6">
          Fill out the form below to add a new event to the carousel.
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

export default AddEventCarousel;
