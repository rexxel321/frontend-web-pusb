import React from "react";
import CardWorkplan from "../../../cards/CardWorkplan/index"; 
import { mainWorkplanPUSB } from "../../../../lib/data";

const HomeMainWorkplanSection = ({ element }) => {
  return (
    <section className="w-full min-h-[90vh] px-8 lg:px-16 py-8" ref={element}>
      <div className="w-full mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold leading">
          <span className="flex items-center">
            <span className="h-px flex-1 bg-white"></span>
            <span className="shrink-0 px-4 lg:px-6">
              Sanctus Cabinet Workplans
            </span>
            <span className="h-px flex-1 bg-white"></span>
          </span>
        </h1>
      </div>
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 py-8"
        style={{ gridTemplateColumns: `repeat(${mainWorkplanPUSB.length}, 1fr)` }} 
      >
        {mainWorkplanPUSB.map((workplan, index) => (
          <CardWorkplan key={index} index={index} {...workplan} />
        ))}
      </div> 
    </section>
  );
};

export default HomeMainWorkplanSection;
