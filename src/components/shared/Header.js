"use client";
import React, { useState, useEffect } from "react";
import PUSBLogo from "../../assets/pusblogo2.png";
import SanctusLogo from "../../assets/logo_voxaris.png";

const navItems = [
  { label: "About Us", link: "/pusb/pusb-about" },
  {
    label: "Structure",
    dropdown: [
      { label: "Voxaris Cabinet", link: "/pusb/pusb-structure-voxaris" },
      { label: "Sanctus Cabinet", link: "/pusb/pusb-structure" },
    ],
  },
  { label: "Events", link: "/pusb/pusb-event" },
  { label: "CnC", link: "/pusb/pusb-cnc" },
  { label: "SOP", link: "/pusb/pusb-sop" },
  { label: "News", link: "/pusb/pusb-news" },
  { label: "Contact Us", link: "/pusb/pusb-contact" },
];

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    <header className="w-full sticky top-0 z-50 flex justify-center px-4 pt-4">
      {/* Glassmorphism Navbar Container */}
      <nav
        className={`
          w-full max-w-5xl flex items-center justify-between
          px-5 py-2.5
          rounded-2xl
          border border-white/[0.08]
          transition-all duration-500 ease-out
          ${scroll >= 50
            ? "bg-[#0f172a]/80 shadow-lg shadow-black/20 border-white/[0.12]"
            : "bg-white/[0.04]"
          }
        `}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="flex items-center gap-1.5">
            <img
              src={PUSBLogo}
              width={32}
              height={32}
              alt="PUSB Logo"
              className="object-contain"
            />
            <img
              src={SanctusLogo}
              width={32}
              height={32}
              alt="Voxaris Logo"
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            PUSB
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="relative group">
                <button
                  className="
                    relative px-3.5 py-2 text-[13px] font-medium text-gray-300
                    rounded-xl
                    transition-all duration-300 ease-out
                    hover:text-white hover:bg-white/[0.08]
                    flex items-center gap-1
                  "
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown */}
                <ul className="
                  absolute top-full left-0 mt-1 min-w-[180px]
                  rounded-xl border border-white/[0.08] overflow-hidden
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 ease-out translate-y-1 group-hover:translate-y-0
                  z-50
                "
                  style={{
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {item.dropdown.map((sub) => (
                    <li key={sub.link}>
                      <a
                        href={sub.link}
                        className="block px-4 py-2.5 text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.link}>
                <a
                  href={item.link}
                  className="
                    relative px-3.5 py-2 text-[13px] font-medium text-gray-300
                    rounded-xl
                    transition-all duration-300 ease-out
                    hover:text-white hover:bg-white/[0.08]
                    block
                  "
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            className="p-2 transition duration-200 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.1] focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
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

          {/* Mobile Overlay Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/60 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Menu Panel */}
              <div
                className="fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/[0.1] p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.92)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <a href="/" className="flex items-center gap-2">
                    <img src={PUSBLogo} width={32} height={32} alt="PUSB Logo" />
                    <img src={SanctusLogo} width={32} height={32} alt="Voxaris Logo" />
                    <span className="text-white font-bold text-lg">PUSB</span>
                  </a>
                  <button
                    aria-label="Close Menu"
                    className="p-2 transition duration-200 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.1]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="space-y-1">
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <li key={item.label}>
                        <button
                          className="w-full text-left flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/[0.08]"
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown === item.label && (
                          <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                            {item.dropdown.map((sub) => (
                              <li key={sub.link}>
                                <a
                                  href={sub.link}
                                  className="block px-3 py-2 text-sm font-medium text-gray-400 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={item.link}>
                        <a
                          href={item.link}
                          className="block px-4 py-3 text-sm font-medium text-gray-300 rounded-xl transition-all duration-300 hover:text-white hover:bg-white/[0.08]"
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
