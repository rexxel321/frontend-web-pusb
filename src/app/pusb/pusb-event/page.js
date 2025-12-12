import React, { useState, useEffect } from "react";
import CardHighlightContainer from "./_components/CardHighlightContainer";
import ContainerCardEvents from "./_components/ContainerCardEvents";
import { GetPUSBEvent } from "../../../pages/api/pusb-events"; 

const Page = () => {
  const [pusbEvents, setPusbEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await GetPUSBEvent(); 
        setPusbEvents(events);
      } catch (err) {
        setError(`Failed to load events. ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      {/* Header Section */}
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB Events
        </h1>
        <h3 className="text-lg text-center mt-8 mb-4">
          This PUSB Events page provides a schedule of various activities,
          including workshops, seminars, events, and more — opportunities to
          learn, connect, and grow.
        </h3>
      </section>

      {/* Highlights Section */}
      <section className="w-full min-h-[60vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
        <div className="w-full">
          <h2 className="text-4xl font-bold lg:text-5xl mb-4 lg:mb-0">
            <span className="italic">2025</span> EVENTS 
          </h2>
        </div>
        <div className="w-full">
          <div className="keen-slider">
            <div id="keen-slider" className="keen-slider">
              <CardHighlightContainer />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Events Section */}
     <section className="w-full">
      <h2 className="text-2xl font-bold lg:text-3xl">
        <span className="italic">2024</span> EVENTS
      </h2>

      <ContainerCardEvents
        pusbEvents={pusbEvents?.filter(
          (event) => event.name?.toUpperCase().trim() !== "COMING SOON"
        )}
        error={error}
        loading={loading}
        isLatest={true}
      />
    </section>


      {/* See All Events Link */}
      <section className="w-full flex justify-center mt-8">
        <a href="/pusb-event/all">
          <p className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 transition-all duration-300">
            See All Events
          </p>
        </a>
      </section>
    </main>
  );
};

export default Page;
