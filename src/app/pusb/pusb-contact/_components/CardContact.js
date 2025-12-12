import React from "react";

const CardContact = ({ contactIcon, contactTitle, contactDesc, contact }) => {
  return (
    <div className="h-44 p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
      <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
        {contactIcon}
      </span>

      <h2 className="text-base font-medium text-gray-800 dark:text-white">
        {contactTitle || "No Title"}
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {contactDesc || "No description available."}
      </p>
      <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
        {contact || "No contact info."}
      </p>
    </div>
  );
};

export default CardContact;
