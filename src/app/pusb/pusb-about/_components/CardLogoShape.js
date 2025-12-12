import React, { useState } from "react";

const CardLogoShape = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle missing `group` to avoid errors
  if (!group || !group.title) {
    return <div className="text-red-500">Error: Missing shape data</div>;
  }

  const shapeMeanings = group.shapeMeaning ? group.shapeMeaning.split(". ").filter(Boolean) : [];

  return (
    <div className="relative bg-gray-900 p-4 rounded-lg shadow-lg text-white">
      <button
        className="text-xl font-bold mb-2 text-center w-full flex justify-between items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {group.title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className="flex justify-center gap-4">
        {group.images && group.images.map((img, index) => (
          <img
            key={index}
            src={img.shapeImage}
            alt={img.shape}
            width="50"
            height="50"
            className="w-12 h-12"
          />
        ))}
      </div>

      {isOpen && (
        <ul className="list-disc mt-2 pl-6 text-sm text-left">
          {shapeMeanings.map((sentence, index) => (
            <li key={index}>{sentence.trim()}.</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardLogoShape;
