import React from "react";
import CardTabEvents from "../_components/CardTabEvents";
import Sceleton from "../../../../components/shared/Sceleton";

const ITEMS_PER_PAGE = 6; 

const ContainerCardEvents = ({ isLatest, pusbEvents, error, loading }) => {
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const validEvents = Array.isArray(pusbEvents) ? pusbEvents : [];

  const displayedEvents = isLatest
    ? validEvents.filter((event) => event.status === "PRESENT").slice(0, 3)
    : validEvents;

  const showSkeleton = loading && displayedEvents.length === 0;

  return (
    <>
      {showSkeleton ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 py-4">
          {Array.from({ length: isLatest ? 3 : ITEMS_PER_PAGE }).map(
            (_, index) => (
              <Sceleton key={index} />
            )
          )}
        </div>
      ) : (
        <div>
          {displayedEvents.length > 0 ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 py-4">
              {displayedEvents.map((event) => (
                <div key={event.id}>
                  <CardTabEvents pusbEvent={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">No events available.</div>
          )}
        </div>
      )}
    </>
  );
};

export default ContainerCardEvents;
