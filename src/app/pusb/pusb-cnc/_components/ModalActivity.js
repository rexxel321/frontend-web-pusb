import React from "react";
import { Modal } from "flowbite-react";

const ModalActivity = ({ openModal, handleModalDescription, WorkplanCNC }) => {
  return (
    <Modal dismissible show={openModal} onClose={handleModalDescription}>
      <Modal.Header>{WorkplanCNC.title}</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <p className="text-base leading-relaxed text-gray-500">
            {WorkplanCNC.description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center">
        <p className="text-sm text-gray-500">{WorkplanCNC.duration}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalActivity;
