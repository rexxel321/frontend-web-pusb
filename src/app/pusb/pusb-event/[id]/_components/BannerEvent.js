import React from "react";

const BannerEvent = ({ 
  eventName, 
  eventDescription, 
  eventImage, 
  eventStatus 
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Banner Event"
              src={eventImage || "#"}
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="lg:py-24 text-center lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">{eventName}</h2>
            <p>
              <span className="text-base text-gray-400">
                &quot;The event{" "}
                {eventStatus === "PRESENT" && "is currently ongoing"}
                {eventStatus === "SOON" && "will start soon"}
                {eventStatus === "COMPLETE" && "has been completed"}&quot;
              </span>
            </p>
            <p className="mt-4 text-gray-100 text-justify">
              {eventDescription}
            </p>

            {/* Uncomment if needed */}
            {/* 
            <p className="mt-8 text-sm font-medium text-white">PUSB@2025</p> 
            <button
              className="px-12 h-12 mt-8 block rounded-full border border-gray-600 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto flex flex-row-reverse justify-center items-center gap-2"
              onClick={handleScrollDown}
            >
              Join Mr Ms
            </button> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerEvent;
