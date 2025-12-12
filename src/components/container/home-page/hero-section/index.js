"use client";

import React from "react";
import SanctusLogo from "../../../../assets/sanctusLogo.png";
import { AiFillCaretDown } from "react-icons/ai";

const HomeHeroSection = ({ handleScrollDown }) => {
  return (
    <section className="relative mx-auto lg:min-h-[85vh] min-h-screen max-w-screen-xl px-4 lg:px-20 flex flex-col justify-center items-center">
      <div className="absolute w-full -z-20 text-center">
        <p className="text-8xl lg:text-[350px] font-black opacity-40 lg:opacity-10 -mt-12">
          PUSB
        </p>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 -mt-16">
        <div className="w-full text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl mochiy-pop-one-bold font-bold">
            President University Student Board 2025
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold">Sanctus Cabinet</h1>
        </div>
        <div className="w-1/2 flex justify-center items-center">
           <img
            className="w-80 lg:h-96 brightness-150 p-1 rounded-full border border-gray-800 shadow-lg shadow-gray-500/50"
            src={SanctusLogo}
            alt="Sanctus Logo"
          />
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start items-center">
        <button
          className="px-8 lg:px-12 h-12 mt-12 lg:-mt-16 rounded-full border border-gray-600 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto flex flex-row-reverse justify-center items-center gap-2 mochiy-pop-one-regular"
          onClick={handleScrollDown}
        >
          <div>
            <AiFillCaretDown />
          </div>
          <p>Workplan</p>
        </button>
      </div>
    </section>
  );
};

export default HomeHeroSection;