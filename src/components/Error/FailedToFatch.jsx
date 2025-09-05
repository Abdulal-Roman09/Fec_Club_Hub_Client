import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const FailedToFetch = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col items-center space-y-4 border border-red-200 dark:border-red-700">
        <FiAlertCircle className="text-red-600 dark:text-red-400 w-16 h-16" />
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Failed to load clubs
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Something went wrong while fetching the data. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-red-600 dark:bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailedToFetch;
