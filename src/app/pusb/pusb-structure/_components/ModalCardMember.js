import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const ModalCardMember = ({ name, position, role, image, socialLinks = {} }) => {
  return (
    <div className="w-full flex flex-col items-center shadow-sm shadow-gray-800">
      <img
        className="w-44 h-44 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
        alt={`${name}'s profile`}
        width={500}
        height={500}
        src={image}
      />
      <div className="text-center mt-6">
        <h1 className="text-xl font-bold mb-1">{name}</h1>
        <div className="font-light mb-2">{position || role}</div>

        {(socialLinks.linkedin || socialLinks.instagram) && (
          <div className="flex gap-4 items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
              >
                <FiLinkedin className="text-indigo-700 mx-auto mt-2" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-full hover:bg-orange-50 h-10 w-10"
              >
                <FiInstagram className="text-orange-400 mx-auto mt-2" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCardMember;
