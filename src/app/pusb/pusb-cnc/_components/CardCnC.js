import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const CardCnC = ({ cnc }) => {
  const previewLength = 100;
  const shortDescription =
    cnc.description?.length > previewLength
      ? cnc.description.slice(0, previewLength) + "..."
      : cnc.description;

  return (
    <Card className="group relative bg-black border-0 h-64 shadow-sm shadow-white overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="flex justify-center items-center mb-3">
        <img
          alt={cnc.short_name}
          src={cnc.image}
          className="w-[120px] h-[120px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="px-4 z-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          {cnc.category}
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">
          {cnc.short_name}
        </p>
        <p className="text-sm font-medium text-gray-300">{cnc.full_name}</p>
      </div>

      {/* Hover Description */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <Link to={`/pusb-cnc/${cnc.id}`}>
          <p className="text-sm text-white text-justify bg-black/70 p-2 rounded hover:underline">
            {shortDescription}
          </p>
        </Link>
      </div>
    </Card>
  );
};

export default CardCnC;
