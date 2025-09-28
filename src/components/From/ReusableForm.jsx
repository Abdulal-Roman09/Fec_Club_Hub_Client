import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";

const ReusableForm = ({ fields, onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  const [imagePreviews, setImagePreviews] = useState({});
  const [uploading, setUploading] = useState(false);

  // 🔹 Local preview
  const handleImagePreview = (fieldName, files) => {
    const file = files[0];
    if (file) {
      setValue(fieldName, file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews((prev) => ({
          ...prev,
          [fieldName]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 🔹 (Submit + Upload) image
  const handleFormSubmit = async (data) => {
    setUploading(true);

    const uploadedData = { ...data };

    for (let field of fields) {
      if (field.type === "file" && data[field.name] instanceof File) {
        try {
          const url = await imageUpload(data[field.name]);
          uploadedData[field.name] = url || "";
        } catch (err) {
          console.error("Image upload error:", err);
          uploadedData[field.name] = "";
        }
      }
    }

    setUploading(false);
    onSubmit(uploadedData);
  };

  return (
    <div className="">
      <div className="max-w-2xl mx-auto">
        {/* --- Form --- */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white shadow-2xl rounded-2xl p-4 md:p-8 space-y-3 md:space-x-6 border border-green-100"
        >
          {fields.map((field, index) => {
            switch (field.type) {
              case "textarea":
                return (
                  <div key={index} className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">
                      {field.label}
                      {field.validation?.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <textarea
                      {...register(field.name, field.validation)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
             focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100
             transition-all duration-200 resize-none text-gray-700 placeholder-gray-400"
                    />

                    {errors[field.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                );

              case "select":
                return (
                  <div key={index} className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">
                      {field.label}
                      {field.validation?.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <select
                      {...register(field.name, field.validation)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500  focus:ring-green-100 transition-all duration-200 text-gray-700 bg-white cursor-pointer"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option, i) => (
                        <option key={i} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors[field.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                );

              case "radio":
                return (
                  <div key={index} className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">
                      {field.label}
                      {field.validation?.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <div className="flex gap-4">
                      {field.options.map((option, i) => (
                        <label
                          key={i}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            value={option.value}
                            {...register(field.name, field.validation)}
                            className="w-4 h-4 text-green-600 border-2 border-gray-300 focus:ring-0"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                    {errors[field.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                );

              case "checkbox":
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register(field.name, field.validation)}
                      className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label className="text-gray-700">{field.label}</label>
                    {errors[field.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                );

              case "file":
                return (
                  <div key={index} className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                      {field.validation?.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>

                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 hover:bg-green-50 transition-all duration-200 group">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.gif"
                        onChange={(e) =>
                          handleImagePreview(field.name, e.target.files)
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />

                      {imagePreviews[field.name] ? (
                        <div className="space-y-4">
                          <img
                            src={
                              imagePreviews[field.name] || "/placeholder.svg"
                            }
                            alt="preview"
                            className="h-32 mx-auto object-cover rounded-xl shadow-lg"
                          />
                          <p className="text-sm text-green-600 font-medium">
                            Image uploaded successfully!
                          </p>
                          <p className="text-xs text-gray-500">
                            Click or drag to change image
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <svg
                              className="w-8 h-8 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">
                              Drop your image here, or{" "}
                              <span className="text-green-600">browse</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              PNG, JPG, GIF up to 32MB
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {errors[field.name] && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors[field.name].message}
                      </div>
                    )}
                  </div>
                );

              default:
                return (
                  <div key={index} className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">
                      {field.label}
                      {field.validation?.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      {...register(field.name, field.validation)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
           focus:outline-none focus:border-green-500  focus:ring-green-500
           transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                    {errors[field.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                );
            }
          })}

          {/* --- Submit Button --- */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-gradient-to-r from-green-600 to-green-600 hover:from-green-800 hover:to-green-800 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;
