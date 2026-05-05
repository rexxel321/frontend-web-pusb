import React, { useEffect, useState } from "react";
import { GetPUSBProfile } from "../utils/aboutProfileAPI";
import ContainerAccordion from "../_components/Accordion/ContainerAccordion";
import CardLogoContainer from "../_components/CardLogoContainer";
import { MissionPUSB } from "../../../../lib/data";
import pusblogo from "../../../../assets/pusblogo2.png";
import sanctusLogo from "../../../../assets/logo_voxaris.png";

const fallbackProfile = {
  cabinet_logo: sanctusLogo,
  cabinet_name: "Voxaris Cabinet",
  vision:
    "PUSB (President University Student Board) cultivates a vibrant and inclusive student organization at President University, providing a sanctuary where every PresUnivers feels safe, respected, and empowered to thrive, grow, and make a positive impact. Through both on-campus and off-campus collaborations, we collectively aim to inspire and support PresUnivers in becoming influential leaders, dedicated to the betterment of Indonesia.",
};

const fallbackMissions = [
  "Sanctuary: Foster a safe, supportive environment at PresUnivers where every member feels protected, respected, and empowered to express themselves and explore their potential.",
  "Support: Develop programs and activities that nurture the holistic development of PresUnivers, ensuring every student receives the guidance and support needed to achieve their goals and aspirations.",
  "Impact: Empower PresUnivers to contribute positively to President University and the broader community by fostering responsibility, leadership, and engagement in impactful initiatives.",
];

const PUSBPage = () => {
  const [profilePUSB, setProfilePUSB] = useState(fallbackProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetPUSBProfile();
        if (!data || Object.keys(data).length === 0) {
          console.warn("Using fallback profile due to empty API response.");
          setProfilePUSB(fallbackProfile);
        } else {
          setProfilePUSB({ ...fallbackProfile, ...data });
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setProfilePUSB(fallbackProfile);
        setError("Failed to fetch profile. Using fallback data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {error && (
        <p className="text-center text-sm text-red-500 mt-2">{error}</p>
      )}

      {/* HERO SECTION */}
      <section className="w-full min-h-[86vh] bg-gray-900 flex flex-col justify-center items-center gap-4 px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
          <img
            src={pusblogo}
            alt="PUSB Logo"
            className="w-36 sm:w-44 lg:w-56 object-contain"
          />
          {profilePUSB.cabinet_logo && (
            <img
              src={profilePUSB.cabinet_logo}
              alt="PUSB Cabinet Logo"
              className="w-44 sm:w-60 lg:w-80 object-contain"
            />
          )}
        </div>

        <div className="text-center px-4">
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold">
            President University Student Board 2025
          </h2>
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold">
            {profilePUSB.cabinet_name}
          </h2>
        </div>
      </section>

    {/* VISION SECTION */}
<section className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 py-16 px-6 lg:px-16">
  {/* Left: Title */}
  <div className="w-full lg:w-2/5 font-black text-center lg:text-left shrink-0">
    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2 font-normal">Our Direction</p>
    <h2 className="text-4xl lg:text-5xl font-black leading-tight">PUSB</h2>
    <h2 className="text-4xl lg:text-5xl font-black leading-tight">2025</h2>
    <div className="w-12 h-1 bg-white mt-4 mx-auto lg:mx-0" />
    <h3 className="text-xl lg:text-2xl font-semibold mt-4 text-gray-300">
      {profilePUSB.cabinet_name}
    </h3>
  </div>

  {/* Right: Vision card */}
  <div className="w-full lg:w-3/5 relative">
    {/* Decorative quote mark */}
    <span className="absolute -top-6 -left-2 text-8xl text-white/10 font-serif select-none leading-none">
      "
    </span>
    <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-6 lg:p-10 relative z-10">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">
        Vision
      </p>
      <p className="text-base lg:text-lg text-white/90 font-sans font-normal leading-[1.9] tracking-wide">
        {profilePUSB.vision}
      </p>
    </div>
  </div>
</section>

      {/* MISSION SECTION */}
      <section className="w-full flex flex-col lg:flex-row-reverse justify-center items-center py-8 px-6 lg:px-16 bg-gray-900">
        <div className="w-full text-center font-black pb-4 lg:pb-0">
          <h2 className="text-2xl lg:text-4xl">Mission</h2>
          <h1 className="text-3xl lg:text-5xl">PUSB 2025</h1>
          <h3 className="text-3xl lg:text-5xl">{profilePUSB.cabinet_name}</h3>
        </div>
        <ContainerAccordion
          missions={MissionPUSB.length ? MissionPUSB : fallbackMissions}
        />
      </section>

      {/* LOGO SECTION */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center px-6 lg:px-16 mt-8 mb-12">
        <CardLogoContainer />
      </section>
    </main>
  );
};

export default PUSBPage;