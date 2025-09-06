import axios from "axios";

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);

  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_api_key}`,
      formData
    );

    return data?.data?.display_url;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};
