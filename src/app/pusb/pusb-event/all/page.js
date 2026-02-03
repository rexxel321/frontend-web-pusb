"use client";
import React, { useState, useEffect } from "react";
import CardTabEvents from "../_components/CardTabEvents";
import { GetPUSBEvent } from "../../../../pages/api/pusb-events";
import Pagination from "../../../../components/shared/Pagination";
import Sceleton from "../../../../components/shared/Sceleton";
import DropdownFilter from "../../../../components/shared/DropdownFilter";

const Page = () => {
  const [pusbEvents, setPusbEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    audience: [],
    period: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

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

  const filterSections = [
    {
      title: "Status",
      options: ["SOON", "COMPLETED", "PRESENT"],
    },
    {
      title: "Audience",
      options: ["Cnc", "Public"],
    },
    {
      title: "Period",
      options: ["Daily", "Monthly", "Annually"],
    },
  ];

  const filterEvents = (events) => {
    if (!events) return [];
    return events.filter((event) => {
      const statusMatch =
        selectedFilters.status.length === 0 ||
        selectedFilters.status.includes(event.status);
      const audienceMatch =
        selectedFilters.audience.length === 0 ||
        selectedFilters.audience.includes(event.audience);
      const periodMatch =
        selectedFilters.period.length === 0 ||
        selectedFilters.period.includes(event.period);
      return statusMatch && audienceMatch && periodMatch;
    });
  };

  const filteredEvents = filterEvents(pusbEvents);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const handleFilterChange = (section, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section.toLowerCase()]: prev[section.toLowerCase()].includes(option)
        ? prev[section.toLowerCase()].filter((item) => item !== option)
        : [...prev[section.toLowerCase()], option],
    }));
    setCurrentPage(1);
  };

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">PUSB Events</h1>
        <h3 className="text-lg text-justify mt-8 mb-4">
          List of all events to be held by PUSB.
        </h3>
      </section>

      {/* Filter Section */}
      <div className="w-full flex justify-end mb-4 border border-black">
        <DropdownFilter
          sections={filterSections}
          selectedOptions={selectedFilters}
          onChange={handleFilterChange}
        />
      </div>

      {/* Events List */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 py-4">
        {loading
          ? Array.from({ length: eventsPerPage }).map((_, index) => (
            <Sceleton key={index} />
          ))
          : currentEvents.map((event) => (
            <div key={event.id}>
              <CardTabEvents pusbEvent={event} />
            </div>
          ))}
      </div>

      {/* Pagination */}
      {!loading && filteredEvents.length > eventsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Error Handling */}
      {error && (
        <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
          <p className="text-sm mt-2">Please refresh the page or try again later.</p>
        </div>
      )}

      {/* No Events */}
      {!loading && !error && filteredEvents.length === 0 && (
        <div className="w-full text-center py-8 text-gray-500">
          No events found matching your filters.
        </div>
      )}
    </main>
  );
};

export default Page;
