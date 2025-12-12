import React from "react";

const CardLogoColor = ({ colorData, rightPosition }) => {
  return (
    <div
      className="relative bg-gray-900 p-4 rounded-lg shadow-lg text-white"
      style={{ right: rightPosition }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: colorData.colorHex }}
        ></div>
        <h3 className="text-xl font-bold">{colorData.color}</h3>
      </div>
      <p className="text-sm mt-2">{colorData.colorMeaning}</p>
    </div>
  );
};

export default CardLogoColor;
