import React, { useState } from "react";
// Path disesuaikan: naik 2 tingkat (ke folder components) lalu masuk ke animations
import SpotlightCard from "../../animations/SpotlightCard";
import ModalMainWorkplan from "../../../components/modal/ModalMainWorkplan";

const CardWorkplan = ({ Workplan, description, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalDescription = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <SpotlightCard 
        className="relative group h-64 w-full cursor-default rounded-tl-[40px] rounded-br-[40px]"
        spotlightColor="rgba(236, 72, 153, 0.25)" // Cahaya Pink
      >
        {/* Container Konten Utama */}
        <div className="relative p-8 h-full flex flex-col justify-center transition-all duration-500 group-hover:blur-md group-hover:opacity-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500 mb-3">
            Workplan # {index + 1}
          </p>
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl leading-tight">
            {Workplan}
          </h3>
        </div>

        {/* Tombol See More (Hanya muncul saat Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button
            className="px-8 py-3 text-sm font-bold text-white border-2 border-white rounded-xl 
                       hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-lg"
            onClick={handleModalDescription}
          >
            See more
          </button>
        </div>

        {/* Modal Logic */}
        {openModal && (
          <ModalMainWorkplan
            openModal={openModal}
            WorkplanName={Workplan}
            WorkplanDescription={description}
            handleModalDescription={handleModalDescription}
          />
        )}
      </SpotlightCard>
    </>
  );
};

export default CardWorkplan;