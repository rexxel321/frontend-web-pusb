import React, { useRef, useEffect, useState } from "react";
import BannerEvent from "../../pusb-event/[id]/_components/BannerEvent";
import ContainerTimelineEvents from "../../pusb-event/[id]/_components/ContainerTimelineEvents";
import Loader from "../../../../components/shared/Loader";

const Page = ({ id }) => {
  const [pusbEvent, setPUSBEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const element = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/pusb-events/${id}`);
        const data = await response.json();
        setPUSBEvent(data);
      } catch (err) {
        console.error("Failed to load event data:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const handleScrollDown = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      {loading ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <BannerEvent
            eventName={pusbEvent?.name || "Unknown Event"}
            eventDescription={
              pusbEvent?.description || "No description available"
            }
            eventStatus={pusbEvent?.status || "No status"}
            eventImage={pusbEvent?.thumbnail || "/default"}
            handleScrollDown={handleScrollDown}
          />

          <section className="w-full mt-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Timeline Event
            </h2>
            <div className="w-full py-8 px-4 overflow-hidden overflow-x-auto scrollbar-timeline">
              <ContainerTimelineEvents eventId={id} />
            </div>
          </section>

          <section
            ref={element}
            className="w-full mt-16 bg-white dark:bg-gray-900"
          >
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Try something really different right now.
              </h2>
              <p className="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                iure tenetur commodi ipsam error voluptate magni. Adipisci
                repudiandae ullam commodi iusto reprehenderit suscipit facere
                voluptatem, eaque maiores minima. Neque, officiis.
              </p>
              <div className="mt-6">
                {!pusbEvent?.recruitment_link ||
                pusbEvent.recruitment_link === "#" ? (
                  !pusbEvent?.audience_link ||
                  pusbEvent.audience_link === "#" ? (
                    <p className="text-gray-500">
                      The event is no longer accepting registrations
                    </p>
                  ) : null
                ) : null}

                {pusbEvent?.recruitment_link &&
                  pusbEvent.recruitment_link !== "#" && (
                    <a
                      href={pusbEvent.recruitment_link}
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mx-2">Public Participant</span>
                    </a>
                  )}

                {pusbEvent?.audience_link &&
                  pusbEvent.audience_link !== "#" && (
                    <a
                      href={pusbEvent.audience_link}
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mx-2">Finalist Participant</span>
                    </a>
                  )}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Page;
