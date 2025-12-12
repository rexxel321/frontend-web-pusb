import React from "react";

const HomeYoutubePlatformSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-gray-900 px-8 lg:px-16 py-8">
      <div className="w-full text-center p-4 lg:p-0">
        <div className="w-full text-left px-4 lg:px-16">
          <h2 className="text-3xl font-extrabold lg:text-5xl">PUSB on</h2>
        </div>
        <h2 className="text-5xl font-extrabold italic lg:text-7xl lg:-mt-2">YouTube!</h2>
      </div>

      <div className="w-full flex justify-center items-center p-4">
        <div className="relative w-full max-w-xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/wY34esIZsow"
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
