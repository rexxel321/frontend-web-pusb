import React, { useEffect, useState } from "react";
import TimelineEvents from "./TimelineEvents";

const ContainerTimelineEvents = ({ eventId }) => {
  const [pusbEventTimeline, setPUSBEventTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.pusb.or.id/pusb-events/${eventId}`);
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        setPUSBEventTimeline(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (pusbEventTimeline.length === 0) return <p>No data available</p>;

  return (
    <div className="w-full flex px-8">
      {pusbEventTimeline.map((item) => (
        <div className="w-full pl-4" key={item.id}>
          <TimelineEvents timeline={item} />
        </div>
      ))}
    </div>
  );
};

export default ContainerTimelineEvents;
