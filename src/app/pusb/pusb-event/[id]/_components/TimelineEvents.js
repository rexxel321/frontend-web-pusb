import React from "react";
import { TbTimelineEventText } from "react-icons/tb";

// Utility function to format the date (example)
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TimelineEvents = ({ timeline }) => {
  return (
    <div className="w-96 relative mb-6 sm:mb-0">
      <div className="w-full flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <TbTimelineEventText className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="w-full mt-3 sm:pe-20">
        <h3 className="text-lg font-semibold text-white">
          {timeline?.title || "No Title"}
        </h3>
        <p className="block mb-2 text-sm font-normal leading-none text-gray-300">
          Released on {timeline?.event_date ? formatDate(timeline.event_date) : "Unknown Date"}
        </p>
        <p className="text-base font-normal text-gray-400">
          {timeline?.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default TimelineEvents;
