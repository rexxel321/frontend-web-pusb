import React, { useState, useEffect } from "react";
import PUSBLogo from "../../assets/pusblogo2.png";
import SanctusLogo from "../../assets/sanctusLogo.png";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(Math.round(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 p-4 flex ${
        scroll >= 50 ? "bg-[#020617] shadow-md text-white" : "bg-transparent"
      }`}
    >
      <div className="relative w-full flex items-center justify-between">
        <div className="container mx-auto flex flex-wrap items-center justify-around">
          <a href="/" className="flex gap-2">
            <img src={PUSBLogo} width={40} height={40} alt="PUSB Logo" />
            <img src={SanctusLogo} width={40} height={40} alt="Sanctus Logo" />
            <p className="flex flex-col md:flex-row items-center gap-2 self-center text-xl lg:text-[28px] font-black whitespace-nowrap">
              PUSB <span className="hidden md:block"> - </span>
              <span className="text-xs md:text-sm"> Sanctus Cabinet </span>
            </p>
          </a>
          <ul className="hidden lg:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium px-8">
            {[
              { label: "About Us", link: "/pusb/pusb-about" },
              { label: "Structure", link: "/pusb/pusb-structure" },
              { label: "Events", link: "/pusb/pusb-event" },
              { label: "CnC", link: "/pusb/pusb-cnc" },
              { label: "SOP", link: "/pusb/pusb-sop" },
              { label: "News", link: "/pusb/pusb-news" },
              { label: "Contact Us", link: "/pusb/pusb-contact" },
            ].map((item) => (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="text-sm hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none hover:bg-gray-200"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white shadow-lg">
              <div className="p-5 border rounded">
                <div className="flex items-center justify-between mb-4">
                  <a href="/" className="flex gap-2">
                    <img src={PUSBLogo} width={40} height={40} alt="PUSB Logo" />
                    <img src={SanctusLogo} width={40} height={40} alt="Sanctus Logo" />
                    <p className="text-black flex flex-col md:flex-row items-center gap-1 text-xl font-black">
                      PUSB <span className="text-sm"> Sanctus Cabinet </span>
                    </p>
                  </a>
                  <button
                    aria-label="Close Menu"
                    className="p-2 -mr-2 transition duration-200 rounded hover:bg-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="space-y-4 text-black font-medium">
                  {[
                    { label: "About Us", link: "/pusb/pusb-about" },
                    { label: "Structure", link: "/pusb/pusb-structure" },
                    { label: "Events", link: "/pusb/pusb-event" },
                    { label: "CnC", link: "/pusb/pusb-cnc" },
                    { label: "SOP", link: "/pusb/pusb-sop" },
                    { label: "News", link: "/pusb/pusb-news" },
                    { label: "Contact Us", link: "/pusb/pusb-contact" },
                  ].map((item) => (
                    <li key={item.link}>
                      <a href={item.link} className="block py-2">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
