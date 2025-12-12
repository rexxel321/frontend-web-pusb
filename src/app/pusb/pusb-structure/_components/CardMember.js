import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const CardMember = ({ name, role, imageSrc, socialLinks }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <img
        className="w-44 h-44 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
        alt="team picture"
        width={500}
        height={500}
        src={imageSrc}
      />
      <div className="text-center mt-6">
        <h1 className="text-white text-xl font-bold mb-1">{name}</h1>
        <div className="text-white font-light mb-2">{role}</div>
        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
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
      </div>
    </div>
  );
};

export default CardMember;
