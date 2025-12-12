import React, { useState } from "react";
import { Card } from "flowbite-react";
import ModalMainWorkplan from "../../../components/modal/ModalMainWorkplan";

const CardWorkplan = ({ Workplan, description, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalDescription = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Card className="relative group h-56 block shadow-sm shadow-white rounded-tl-3xl rounded-br-3xl bg-black hover:bg-white hover:bg-opacity-20">
        <div className="relative p-2 group-hover:bg-opacity-20 group-hover:blur-sm">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Workplan # {index + 1}
          </p>

          <p className="text-xl font-bold text-white sm:text-3xl">
            {Workplan}
          </p>
        </div>

        <div className="hidden absolute inset-0 group-hover:flex justify-center items-center text-white -ml-2 transition-all duration-300">
          <button
            className="text-base border-2 border-white px-6 py-1 rounded-lg hover:bg-gray-800"
            onClick={handleModalDescription}
          >
            See more
          </button>
        </div>

        {openModal && (
          <ModalMainWorkplan
            openModal={openModal}
            WorkplanName={Workplan}
            WorkplanDescription={description}
            handleModalDescription={handleModalDescription}
          />
        )}
      </Card>
    </>
  );
};

export default CardWorkplan;
