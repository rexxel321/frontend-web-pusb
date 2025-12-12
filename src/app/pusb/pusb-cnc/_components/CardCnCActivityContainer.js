import React, { useEffect, useState } from "react";
import { GetPUSBCNCById } from "../../../../pages/api/pusb-cnc";
import CardCnCActivity from "./CardCnCActivity";

const CardCnCActivityContainer = ({ id }) => {
  const [workplan, setWorkplan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCnc = async () => {
      try {
        const result = await GetPUSBCNCById(id);
        const safeWorkplan = Array.isArray(result?.workplan) ? result.workplan : [];
        setWorkplan(safeWorkplan);
      } catch (error) {
        console.error("Error loading CNC workplan", error);
        setWorkplan([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCnc();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading Workplan...</p>;
  }

  if (workplan.length === 0) {
    return <p className="text-center text-gray-500">No workplan data available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {workplan.map((item) => (
        <CardCnCActivity key={item.id} workplan={item} />
      ))}
    </div>
  );
};

export default CardCnCActivityContainer;
