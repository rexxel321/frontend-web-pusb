"use client";

import React from "react";
import SanctusLogo from "../../../../assets/logo_voxaris.png";
import { AiFillCaretDown } from "react-icons/ai";

const HomeHeroSection = ({ handleScrollDown }) => {
  return (
    <section className="relative mx-auto lg:min-h-[85vh] min-h-screen max-w-screen-xl px-4 lg:px-20 flex flex-col justify-center items-center">

      {/* Centered PUSB text overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-0 select-none pointer-events-none">
        <p className="w-full text-center text-[100px] lg:text-[320px] font-display font-black text-gray-400/20 tracking-[0.05em] leading-none">
          PUSB
        </p>
      </div>

      {/* Main content row */}
      <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 -mt-16 z-10 relative">
        {/* Text side */}
        <div className="w-full text-center lg:text-left space-y-3">
          {/* Eyebrow badge */}
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full bg-vox-yellow text-vox-black font-body">
            Voxaris Cabinet 2026
          </span>

          <h1 className="text-4xl lg:text-7xl font-display tracking-wider text-vox-cream leading-none">
            President University
            <br />
            <span className="text-vox-yellow">Student Board</span>
          </h1>

          <p className="text-base text-vox-cream/60 font-body max-w-md font-light">
            Voice · Action · Strength — building an active, strong, and impactful
            student community at President University.
          </p>
        </div>

        {/* Logo side */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="w-72 lg:w-80 lg:h-80 object-contain"
            src={SanctusLogo}
            alt="Voxaris Logo"
          />
        </div>
      </div>

      {/* Scroll CTA */}
      <div className="w-full flex justify-center lg:justify-start items-center mt-8 z-10 relative">
        <button
          className="px-8 lg:px-12 h-11 rounded-full border border-vox-green/60
                     text-sm font-medium text-vox-cream font-body
                     hover:bg-vox-green hover:border-vox-green hover:text-vox-cream
                     focus:outline-none active:scale-95
                     flex flex-row-reverse justify-center items-center gap-2
                     transition-all duration-300"
          onClick={handleScrollDown}
        >
          <AiFillCaretDown />
          <span>Workplans</span>
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;