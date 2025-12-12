import React from "react";
import { Modal } from "flowbite-react"; // Ensure Flowbite is installed
// import CardContentWorkplan from "./components/cards/CardContentWorkplan"; 

const ModalMainWorkplan = ({ 
  openModal, 
  WorkplanName, 
  WorkplanDescription, 
  handleModalDescription 
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      className="text-black"
      size="6xl"
    >
      <Modal.Header>{WorkplanName}</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {WorkplanDescription}
          </p>
          {/* Uncomment if needed */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CardContentWorkplan />
            <CardContentWorkplan />
            <CardContentWorkplan />
            <CardContentWorkplan />
            <CardContentWorkplan />
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">
          <span className="font-medium">{WorkplanName}</span> @ PUSB 2025
          Sanctus Cabinet
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMainWorkplan;
