import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import pusblogo from "../../../../assets/pusblogo2.png";

const HomeHeroCabinetSection = () => {
  return (
    <section className="w-full min-h-[35vh] bg-vox-green/10 border-y border-vox-green/20">
      <div className="w-full h-full px-4 lg:px-16 py-10 mx-auto max-w-screen-xl">
        <div className="w-full h-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-10">
          
          {/* Image */}
          <div className="flex justify-center shrink-0">
            <img
              className="w-36 h-36 lg:w-52 lg:h-52 object-contain
                         drop-shadow-[0_0_15px_rgba(255,207,11,0.2)]"
              src={pusblogo}
              alt="PUSB Logo"
              width={300}
              height={300}
            />
          </div>

          {/* Content */}
          <div className="w-full flex flex-col items-center lg:items-start">
            {/* Title with side lines */}
            <p className="w-full text-xl lg:text-3xl font-display tracking-widest text-vox-cream flex items-center gap-4">
              <span className="h-px flex-1 bg-vox-cream/20" />
              <span className="shrink-0 text-vox-yellow">Voxaris Cabinet</span>
              <span className="h-px flex-1 bg-vox-cream/20" />
            </p>

            <div className="mt-4 text-center lg:text-justify">
              <p className="text-vox-cream/70 font-body leading-relaxed text-sm lg:text-base">
                <span className="font-bold text-vox-cream">"Voxaris"</span>{" "}
                embodies the spirit of voice, action, and strength. It portrays a
                commitment to listening and empowering voices to action and shared
                progress. The cabinet is devoted to building an active, strong, and
                impactful community in which it aspires to cultivate a vibrant and
                responsive student body that gives active contribution to President
                University.
              </p>
            </div>

            {/* Button */}
            <div className="w-full flex justify-center lg:justify-start py-5">
              <a href="/pusb/pusb-about">
                <button
                  className="border border-vox-yellow/50 px-8 py-2 rounded-xl
                             text-vox-yellow font-body text-sm font-medium
                             group hover:bg-vox-yellow hover:text-vox-black
                             hover:border-vox-yellow
                             transition-all duration-300 active:scale-95"
                >
                  <div className="flex justify-center items-center gap-3">
                    <span>Vision &amp; Mission</span>
                    <AiFillCaretRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroCabinetSection;