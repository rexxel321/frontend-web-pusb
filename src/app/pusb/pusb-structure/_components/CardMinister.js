import React from "react";
import people from "../../../../assets/s.png";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const CardMinister = ({ name, position, image, socialLinks = {}, size = "md", imageClass = "" }) => {
  const heightClass = size === "xl" ? "h-[30rem]" : size === "lg" ? "h-96" : "h-64";
  return (
    <div className="w-full flex justify-center items-center">
      <div className={`relative w-80 ${heightClass}`}>
        <div className="overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            src={image || people}
            alt={name}
            width={300}
            height={200}
            className={`object-contain w-full ${heightClass} rounded-lg ${imageClass}`}
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-1 text-lg font-bold text-white">{name}</p>
            <p className="mb-4 text-sm text-gray-300">{position}</p>

            {(socialLinks.linkedin || socialLinks.instagram) && (
              <div className="flex gap-4 justify-center opacity-75 hover:opacity-100 transition-opacity duration-300">
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
      </div>
    </div>
  );
};

export default CardMinister;
