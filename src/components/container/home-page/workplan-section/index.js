import React from "react";
import CardWorkplan from "../../../cards/CardWorkplan/index";
import { mainWorkplanPUSB } from "../../../../lib/data";

const HomeMainWorkplanSection = ({ element }) => {
  return (
    <section
      className="w-full min-h-[60vh] px-8 lg:px-16 py-16"
      ref={element}
    >
      {/* Section header */}
      <div className="mb-10 flex flex-col items-center text-center gap-3">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-vox-green/15 border border-vox-green/30
                     text-vox-yellow text-[11px] font-semibold tracking-[0.2em] uppercase font-body"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vox-yellow animate-pulse" />
          Our Programs
        </span>

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-display tracking-wider text-vox-cream">
          Voxaris Cabinet{" "}
          <span className="text-vox-yellow">Workplans</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-md text-sm text-vox-cream/40 leading-relaxed font-body">
          Programs designed to inform, engage, and inspire the President
          University community throughout the academic year.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {mainWorkplanPUSB.map((workplan, index) => (
          <CardWorkplan key={index} index={index} {...workplan} />
        ))}
      </div>
    </section>
  );
};

export default HomeMainWorkplanSection;