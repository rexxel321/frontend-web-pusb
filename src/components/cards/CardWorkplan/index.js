import React, { useState } from "react";
import ModalMainWorkplan from "../../../components/modal/ModalMainWorkplan";

// Voxaris brand accent sets per card index
const accentSets = [
  {
    gradient: "from-vox-green to-emerald-700",     // card 01 — green
    gradientStyle: "linear-gradient(to bottom, #2B6130, #1a4d20)",
    badgeBg: "bg-vox-green",
    badge: "#2B6130",
    titleHover: "group-hover:text-vox-yellow",
    link: "text-vox-yellow",
    glow: "hover:shadow-[0_0_28px_rgba(43,97,48,0.25)]",
  },
  {
    gradient: "from-vox-red to-rose-900",          // card 02 — red
    gradientStyle: "linear-gradient(to bottom, #8C0D0F, #5a0809)",
    badgeBg: "bg-vox-red",
    badge: "#8C0D0F",
    titleHover: "group-hover:text-vox-cream",
    link: "text-red-400",
    glow: "hover:shadow-[0_0_28px_rgba(140,13,15,0.25)]",
  },
  {
    gradient: "from-vox-yellow to-amber-500",      // card 03 — yellow
    gradientStyle: "linear-gradient(to bottom, #FFCF0B, #d4a400)",
    badgeBg: "bg-vox-yellow",
    badge: "#FFCF0B",
    titleHover: "group-hover:text-vox-yellow",
    link: "text-yellow-400",
    glow: "hover:shadow-[0_0_28px_rgba(255,207,11,0.2)]",
  },
];

const CardWorkplan = ({ Workplan, description, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const acc = accentSets[index % accentSets.length];

  return (
    <>
      {/* Card */}
      <div
        className={`group relative flex flex-col gap-3 rounded-2xl p-6 cursor-pointer
                   bg-vox-cream/5 border border-vox-cream/10
                   hover:bg-vox-cream/10 hover:border-vox-cream/20
                   transition-all duration-300 ease-out ${acc.glow}`}
        onClick={() => setOpenModal(true)}
      >
        {/* Left accent stripe */}
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
          style={{ background: acc.gradientStyle }}
        />

        {/* Number badge + label */}
        <div className="flex items-center gap-3 pl-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold shrink-0 font-body"
            style={{ background: acc.badge }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-vox-cream/50 font-body">
            Workplan
          </span>
        </div>

        {/* Title */}
        <h3 className={`pl-3 text-lg font-display tracking-wide text-vox-cream leading-snug ${acc.titleHover} transition-colors duration-300`}>
          {Workplan}
        </h3>

        {/* Description preview */}
        <p className="pl-3 text-sm text-vox-cream/50 leading-relaxed line-clamp-2 font-body">
          {description}
        </p>

        {/* View Details link */}
        <div className="pl-3 mt-1 flex items-center gap-1.5">
          <span className={`text-xs font-semibold ${acc.link} font-body`}>
            View Details
          </span>
          <svg
            className={`w-3 h-3 ${acc.link} group-hover:translate-x-1 transition-transform duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <ModalMainWorkplan
          openModal={openModal}
          WorkplanName={Workplan}
          WorkplanDescription={description}
          handleModalDescription={() => setOpenModal(false)}
          accentStyle={acc.gradientStyle}
          accentColor={acc.badge}
          index={index}
        />
      )}
    </>
  );
};

export default CardWorkplan;