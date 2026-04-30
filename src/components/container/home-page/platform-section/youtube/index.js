"use client";
import React, { useState, useEffect, useRef } from "react";

const HomeYoutubePlatformSection = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 } // Play when at least 50% is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-gray-900 px-8 lg:px-16 py-8">
      <div className="w-full text-center p-4 lg:p-0">
        <div className="w-full text-left px-4 lg:px-16">
          <h2 className="text-3xl font-extrabold lg:text-5xl text-white">PUSB on</h2>
        </div>
        <h2 className="text-5xl font-extrabold italic lg:text-7xl lg:-mt-2 text-white">YouTube!</h2>
      </div>

      <div className="w-full flex justify-center items-center p-4" ref={containerRef}>
        <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/wY34esIZsow?autoplay=${inView ? 1 : 0}&mute=1`}
            className="absolute top-0 left-0 w-full h-full"
            title="A YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HomeYoutubePlatformSection;
