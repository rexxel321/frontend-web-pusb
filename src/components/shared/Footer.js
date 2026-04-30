import React, { useEffect, useState } from "react";
import { FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillSpotify } from "react-icons/ai";
import pusblogo from "../../assets/pusblogo2.png";
import { GetPUSBProfile } from "../../pages/api/pusb-profile";

const Footer = () => {
  const [profilePUSB, setProfilePUSB] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetPUSBProfile();
        setProfilePUSB(data);
      } catch (err) {
        setError(`Failed to load data. ${err}`);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div className="text-center text-red-500 text-sm">{error}</div>;
  }

  return (
    <footer className="w-full h-full mt-16 bg-gray-950 text-white">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mx-auto lg:p-8 px-4 py-6">
        {/* Logo + Address */}
        <div className="w-full flex flex-col items-center lg:items-start lg:px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 px-4 lg:px-0">
            <img src={pusblogo} alt="PUSB LOGO" className="w-16 h-20 lg:w-28 lg:h-32" />
            <div className="text-center lg:text-left">
              <h2 className="text-sm lg:text-2xl font-bold">
                President University Student Board
              </h2>
              <p className="text-sm lg:text-lg font-bold">
                {profilePUSB?.cabinet_name ?? "Voxaris Cabinet"}
              </p>
            </div>
          </div>
          <p className="text-center lg:text-left font-medium text-xs lg:text-base mt-4">
            {profilePUSB?.address ?? "Jababeka Education Park, Jl. Ki Hajar Dewantara, RT.2/RW.4, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java 17530"}
          </p>
        </div>

        {/* Contact & Social */}
        <div className="w-full flex flex-col lg:flex-row justify-around mt-6 pb-4 gap-8">
          {/* Contact Us */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <p className="font-semibold text-sm lg:text-lg">Contact Us</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-center gap-2">
                <MdOutlineEmail className="w-5 h-5 lg:w-6 lg:h-6" />
                <a
                  href={`mailto:${profilePUSB?.email ?? "pusb@president.ac.id"}`}
                  className="text-white underline hover:text-gray-300 text-[10px] lg:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profilePUSB?.email ?? "pusb@president.ac.id"}
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <p className="font-semibold text-sm lg:text-lg">Find Us</p>
            <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-4 mt-4 justify-center text-xs lg:text-base">
              <a
                href={profilePUSB?.instagram ?? "https://www.instagram.com/pusbpresuniv"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="inline lg:hidden text-[10px] font-medium">@pusbpresuniv</span>
              </a>

              <a
                href={profilePUSB?.linkedin ?? "https://www.linkedin.com/company/president-university-student-union/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="inline lg:hidden text-[10px] font-medium">President University Student Board</span>
              </a>

              <a
                href={profilePUSB?.twitter ?? "https://x.com/pusupresuniv"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiTwitter className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="inline lg:hidden text-[10px] font-medium">@pusupresuniv</span>
              </a>

              <a
                href={profilePUSB?.youtube ?? "https://www.youtube.com/@PUSB_PresidentUniversity"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 min-w-0"
              >
                <FaYoutube className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="inline lg:hidden text-[10px] font-small">@PUSB</span>
              </a>

              <a
                href={profilePUSB?.podcast ?? "https://open.spotify.com/show/5CnFz5rV7STWOZpn0m7cn6"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <AiFillSpotify className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="inline lg:hidden text-[10px] font-medium">Broadtalk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-6 lg:py-4">
        <p className="text-center text-xs lg:text-base font-medium leading-relaxed">
          ©PUSB 2025. All rights reserved.
          <br />
          Created by <span className="px-2 font-semibold">PUSB MOC Web Developer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
